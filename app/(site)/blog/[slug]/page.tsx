import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Container } from '@/components/container';
import { Prose } from '@/components/prose';
import { ProductGrid } from '@/components/product-grid';
import { RatingStars } from '@/components/rating-stars';
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { generateOpenGraph, jsonLdArticle } from '@/lib/seo';
import { config } from '@/lib/config';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.excerpt,
    openGraph: generateOpenGraph({
      title: post.frontMatter.title,
      description: post.frontMatter.excerpt,
      url: `${config.siteUrl}/blog/${slug}`,
      image: post.frontMatter.cover,
      type: 'article',
    }),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);
  const articleJsonLd = jsonLdArticle({
    title: post.frontMatter.title,
    description: post.frontMatter.excerpt,
    datePublished: new Date(post.frontMatter.date).toISOString(),
    image: post.frontMatter.cover,
    url: `${config.siteUrl}/blog/${slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <article>
        {post.frontMatter.cover && (
          <div className="relative h-96 w-full">
            <Image
              src={post.frontMatter.cover}
              alt={post.frontMatter.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <Container className="max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <time dateTime={post.frontMatter.date}>
                {formatDate(post.frontMatter.date)}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-5xl font-bold mb-4">{post.frontMatter.title}</h1>
            
            <p className="text-xl text-gray-600 mb-4">{post.frontMatter.excerpt}</p>

            {post.frontMatter.rating && (
              <div className="flex items-center gap-4">
                <span className="font-semibold">Overall Rating:</span>
                <RatingStars rating={post.frontMatter.rating} />
              </div>
            )}

            {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.frontMatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <Prose>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </Prose>

          {post.frontMatter.products && post.frontMatter.products.length > 0 && (
            <section className="mt-12">
              <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
              <ProductGrid products={post.frontMatter.products} />
            </section>
          )}
        </Container>
      </article>
    </>
  );
}

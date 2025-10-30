import { Container } from '@/components/container';
import { Card } from '@/components/card';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Cat litter reviews, guides, and tips from Cat of View.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="hero-desert">
      <Container className="py-16 lg:py-20">
        <h1 className="text-4xl font-bold text-[color:var(--text)] mb-4">Blog</h1>
        <p className="text-xl text-[color:var(--subtext)] mb-12">
          In-depth reviews, buying guides, and expert tips for cat litter and accessories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.slug}
              title={post.frontMatter.title}
              description={post.frontMatter.excerpt}
              image={post.frontMatter.cover}
              href={`/blog/${post.slug}`}
            >
              <div className="flex items-center justify-between text-sm text-[color:var(--subtext)] mt-4">
                <span>{formatDate(post.frontMatter.date)}</span>
                <span>{post.readingTime}</span>
              </div>
              {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.frontMatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-desert-100 text-[color:var(--text)] rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[color:var(--subtext)]">No posts yet. Check back soon!</p>
          </div>
        )}
      </Container>
    </section>
  );
}

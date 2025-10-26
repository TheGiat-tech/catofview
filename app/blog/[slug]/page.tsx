import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import BlogContent from '@/components/BlogContent';
import AmazonProduct from '@/components/AmazonProduct';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-desert-cream">
      {/* Header */}
      <header className="bg-desert-tan border-b-4 border-desert-mustard">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="text-desert-dark-brown hover:text-desert-terracotta font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-desert-dark-brown mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-desert-brown">
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-desert-sand">
          <BlogContent content={post.content} />

          {/* Sample Amazon Products Section */}
          {post.slug === 'top-cat-toys' && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-desert-dark-brown mb-6">
                Recommended Products
              </h2>
              
              <AmazonProduct
                title="Interactive Feather Wand Toy"
                imageUrl="/images/feather-wand.svg"
                amazonUrl="https://www.amazon.com/dp/B00DT2WL26"
                price="$12.99"
                description="Premium quality feather wand with natural feathers that cats love. Durable construction for hours of interactive play."
              />

              <AmazonProduct
                title="Automatic Laser Toy for Cats"
                imageUrl="/images/laser-toy.svg"
                amazonUrl="https://www.amazon.com/dp/B07H8YZYJ3"
                price="$29.99"
                description="Hands-free laser entertainment! Adjustable timer and multiple patterns to keep your cat engaged."
              />

              <AmazonProduct
                title="Cat Puzzle Feeder & Slow Bowl"
                imageUrl="/images/puzzle-feeder.svg"
                amazonUrl="https://www.amazon.com/dp/B07L6TC3SM"
                price="$15.99"
                description="Promotes healthy eating habits while providing mental stimulation. Perfect for fast eaters."
              />
            </div>
          )}

          {post.slug === 'welcome-to-cat-of-view' && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-desert-dark-brown mb-6">
                Featured Cat Essentials
              </h2>
              
              <AmazonProduct
                title="Premium Cat Food - Grain Free"
                imageUrl="/images/cat-food.svg"
                amazonUrl="https://www.amazon.com/dp/B004D3AIXO"
                price="$39.99"
                description="High-protein, grain-free formula for optimal cat health. Made with real chicken and wholesome ingredients."
              />
            </div>
          )}
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-desert-tan border-t-4 border-desert-mustard mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-desert-dark-brown">
            © 2025 Cat of View. All rights reserved.
          </p>
          <p className="text-desert-brown text-sm mt-2">
            Made with ❤️ for cat lovers everywhere
          </p>
        </div>
      </footer>
    </div>
  );
}

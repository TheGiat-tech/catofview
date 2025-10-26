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
    <Container>
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-xl text-gray-600 mb-12">
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
            <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
              <span>{formatDate(post.frontMatter.date)}</span>
              <span>{post.readingTime}</span>
            </div>
            {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {post.frontMatter.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-brand-100 text-brand-700 rounded text-xs">
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
          <p className="text-gray-500">No posts yet. Check back soon!</p>
        </div>
      )}
    </Container>
  );
}

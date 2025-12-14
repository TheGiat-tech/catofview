import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import type { Post } from '@/lib/posts';

interface RelatedPostsProps {
  currentSlug: string;
  posts: Post[];
  tags?: string[];
}

export function RelatedPosts({ currentSlug, posts, tags = [] }: RelatedPostsProps) {
  // Filter out the current post and find related posts
  const relatedPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      // Calculate relevance score based on matching tags
      let relevance = 0;
      if (tags.length > 0 && post.frontMatter.tags) {
        relevance = post.frontMatter.tags.filter((tag) => tags.includes(tag)).length;
      }
      return { post, relevance };
    })
    .sort((a, b) => {
      // Sort by relevance first, then by date
      if (b.relevance !== a.relevance) {
        return b.relevance - a.relevance;
      }
      return (
        new Date(b.post.frontMatter.date).getTime() - new Date(a.post.frontMatter.date).getTime()
      );
    })
    .slice(0, 3)
    .map(({ post }) => post);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {post.frontMatter.cover && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.frontMatter.cover}
                  alt={post.frontMatter.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 group-hover:text-brand-600 transition-colors">
                {post.frontMatter.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {post.frontMatter.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <time dateTime={post.frontMatter.date}>
                  {formatDate(post.frontMatter.date)}
                </time>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

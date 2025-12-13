import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

interface RelatedPostsProps {
  currentSlug: string;
  currentTags: string[];
  allPosts: Post[];
  limit?: number;
}

export function RelatedPosts({ currentSlug, currentTags, allPosts, limit = 3 }: RelatedPostsProps) {
  // Filter out current post and calculate relevance score
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const tags = post.frontMatter.tags || [];
      const commonTags = tags.filter((tag) => currentTags.includes(tag)).length;
      return { post, score: commonTags };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);

  // If no related posts with matching tags, show latest posts
  const postsToShow =
    relatedPosts.length > 0
      ? relatedPosts
      : allPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);

  if (postsToShow.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-gray-200 pt-12">
      <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {postsToShow.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            {post.frontMatter.cover && (
              <div className="relative h-48 w-full overflow-hidden">
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
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
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

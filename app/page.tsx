import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-desert-cream">
      {/* Header */}
      <header className="bg-desert-tan border-b-4 border-desert-mustard">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-5xl font-bold text-desert-dark-brown mb-2">
            🐱 Cat of View
          </h1>
          <p className="text-xl text-desert-brown">
            Your Feline Perspective on Life
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-desert-dark-brown mb-6">
            Latest Posts
          </h2>
        </div>

        {posts.length === 0 ? (
          <div className="bg-desert-sand rounded-lg p-8 text-center">
            <p className="text-desert-brown text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-desert-sand overflow-hidden"
              >
                {post.image && (
                  <div className="h-48 bg-desert-sand flex items-center justify-center">
                    <span className="text-desert-brown text-4xl">🐱</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-desert-dark-brown mb-2 group-hover:text-desert-terracotta transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-desert-brown mb-3">
                    {post.date} • {post.author}
                  </p>
                  <p className="text-desert-dark-brown leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-desert-terracotta font-semibold group-hover:text-desert-mustard">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

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

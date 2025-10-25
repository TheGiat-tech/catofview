import { getAllPosts } from '@/lib/posts';
import { config } from '@/lib/config';

export async function GET() {
  const posts = await getAllPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${config.siteName}</title>
    <link>${config.siteUrl}</link>
    <description>${config.siteDescription}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${config.siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title>${post.frontMatter.title}</title>
      <link>${config.siteUrl}/blog/${post.slug}</link>
      <description>${post.frontMatter.excerpt}</description>
      <pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate>
      <guid>${config.siteUrl}/blog/${post.slug}</guid>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

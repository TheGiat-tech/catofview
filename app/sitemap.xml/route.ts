import { getAllPostsMeta } from '@/lib/markdown'
export async function GET(){
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const posts = getAllPostsMeta()
  const urls = posts.map(p=>`<url><loc>${base}/blog/${p.slug}</loc></url>`).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${base}</loc></url>${urls}</urlset>`
  return new Response(xml,{headers:{'Content-Type':'application/xml'}})
}

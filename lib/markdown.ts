import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'content', 'posts')

export type PostMeta = { slug:string; title:string; date:string; excerpt:string }
export type Post = PostMeta & { html:string }

export function getAllPostsMeta(): PostMeta[] {
  if(!fs.existsSync(postsDir)) return []
  const slugs = fs.readdirSync(postsDir).filter(f=>f.endsWith('.md'))
  const posts = slugs.map(file=>{
    const slug = file.replace(/\.md$/,'')
    const raw = fs.readFileSync(path.join(postsDir,file),'utf8')
    const { data, content } = matter(raw)
    const excerpt = (data.excerpt || content.slice(0,180)).toString()
    return { slug, title: data.title ?? slug, date: data.date ?? new Date().toISOString(), excerpt }
  })
  return posts.sort((a,b)=> (a.date < b.date ? 1 : -1))
}

export async function getPost(slug:string): Promise<Post | null> {
  const file = path.join(postsDir, `${slug}.md`)
  if(!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file,'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html).process(content)
  return {
    slug,
    title: (data as any).title ?? slug,
    date: (data as any).date ?? new Date().toISOString(),
    excerpt: (data as any).excerpt ?? content.slice(0,180),
    html: processed.toString()
  }
}

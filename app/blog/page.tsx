import PostCard from '@/components/PostCard'
import { getAllPostsMeta } from '@/lib/markdown'

export const revalidate = 3600

export default function BlogPage(){
  const posts = getAllPostsMeta()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      {posts.length===0 && <p className="text-neutral-400">No posts yet.</p>}
      <div className="grid gap-4">
        {posts.map(p=> <PostCard key={p.slug} {...p}/>)}
      </div>
    </div>
  )
}

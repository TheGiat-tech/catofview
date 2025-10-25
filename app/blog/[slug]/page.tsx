import { getPost, getAllPostsMeta } from '@/lib/markdown'

export async function generateStaticParams(){
  return getAllPostsMeta().map(p=>({ slug: p.slug }))
}

export default async function PostPage({ params }:{ params:{ slug:string } }){
  const post = await getPost(params.slug)
  if(!post) return <div>Not found</div>
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{post.title}</h1>
      <p><small>{new Date(post.date).toLocaleDateString()}</small></p>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </article>
  )
}

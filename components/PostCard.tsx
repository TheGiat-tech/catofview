import Link from 'next/link'
export default function PostCard({slug,title,excerpt,date}:{slug:string,title:string,excerpt:string,date:string}){
  return (
    <article className="border border-neutral-800 rounded-lg p-4 hover:border-neutral-600 transition">
      <h3 className="text-xl font-semibold mb-1"><Link href={`/blog/${slug}`}>{title}</Link></h3>
      <p className="text-neutral-400 text-sm mb-2">{new Date(date).toLocaleDateString()}</p>
      <p className="text-neutral-200">{excerpt}</p>
      <div className="mt-3">
        <Link className="text-blue-400" href={`/blog/${slug}`}>Read more →</Link>
      </div>
    </article>
  )
}

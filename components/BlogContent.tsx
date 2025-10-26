import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold text-desert-dark-brown mb-4 mt-8" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-bold text-desert-dark-brown mb-3 mt-6" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-semibold text-desert-brown mb-2 mt-4" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-desert-dark-brown mb-4 leading-relaxed" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-desert-terracotta hover:text-desert-mustard underline" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside mb-4 text-desert-dark-brown space-y-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-4 text-desert-dark-brown space-y-2" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="ml-4" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-desert-mustard pl-4 italic text-desert-brown my-4" {...props} />
          ),
          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <code className={className} {...props}>
                {children}
              </code>
            ) : (
              <code className="bg-desert-sand text-desert-dark-brown px-1 py-0.5 rounded text-sm" {...props}>
                {children}
              </code>
            );
          },
          pre: ({ node, ...props }) => (
            <pre className="bg-desert-dark-brown rounded-lg p-4 overflow-x-auto my-4" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-desert-dark-brown" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

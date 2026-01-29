import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  children: string;
  className?: string;
}

export function Markdown({ children, className = '' }: MarkdownProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Überschreibe Standard-Styling mit unseren Custom Colors
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold mb-4 text-foreground" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold mb-3 text-foreground" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold mb-2 text-foreground" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-3 last:mb-0 text-foreground-secondary leading-relaxed" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-outside mb-4 space-y-1.5 text-foreground-secondary ml-5" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-outside mb-4 space-y-1.5 text-foreground-secondary ml-5" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="text-foreground-secondary leading-relaxed" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-foreground" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-foreground-secondary" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-accent hover:text-accent/80 underline transition-colors" {...props} />
          ),
          code: ({ node, className, ...props }: any) => {
            const isInline = !className;
            return isInline ? (
              <code className="px-1.5 py-0.5 rounded bg-surface border border-border text-foreground text-sm font-mono" {...props} />
            ) : (
              <code className="block p-4 rounded-lg bg-surface border border-border text-foreground text-sm font-mono overflow-x-auto" {...props} />
            );
          },
          pre: ({ node, ...props }) => (
            <pre className="mb-4" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-accent pl-4 italic text-foreground-secondary mb-4" {...props} />
          ),
          hr: ({ node, ...props }) => (
            <hr className="my-6 border-border" {...props} />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

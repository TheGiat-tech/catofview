import { cn } from '@/lib/utils';

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div className={cn('prose prose-brand max-w-none', className)}>
      {children}
    </div>
  );
}

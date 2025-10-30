import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variantClasses = {
    default: 'bg-[color:var(--bg-muted)] text-[color:var(--text)]',
    success: 'bg-desert-100 text-desert-800',
    warning: 'bg-terracotta/10 text-terracotta',
    info: 'bg-oasis/10 text-oasis',
  } as const;

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-sm font-medium border border-[color:var(--border)] shadow-desert',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

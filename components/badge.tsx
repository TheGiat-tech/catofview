import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variantClasses = {
    default: 'bg-gray-100 text-gray-900',
    success: 'bg-brand-100 text-brand-900',
    warning: 'bg-yellow-100 text-yellow-900',
    info: 'bg-blue-100 text-blue-900',
  };

  return (
    <span className={cn('inline-block px-3 py-1 rounded-full text-sm font-medium', variantClasses[variant], className)}>
      {children}
    </span>
  );
}

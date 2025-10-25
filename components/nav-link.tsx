import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-gray-700 hover:text-brand-600 transition-colors font-medium',
        className
      )}
    >
      {children}
    </Link>
  );
}

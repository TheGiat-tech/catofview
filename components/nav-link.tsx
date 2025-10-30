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
        'text-[color:var(--text)] hover:text-[color:var(--link)] transition-colors font-medium',
        className,
      )}
    >
      {children}
    </Link>
  );
}

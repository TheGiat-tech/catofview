import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Card({ title, description, image, href, className, children }: CardProps) {
  const content = (
    <div
      className={cn(
        'card overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-desert',
        className,
      )}
    >
      {image && (
        <div className="relative h-48 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[color:var(--text)] mb-2">{title}</h3>
        {description && <p className="text-[color:var(--subtext)] mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

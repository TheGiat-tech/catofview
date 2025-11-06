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
    <div className={cn('bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow', className)}>
      {image && (
        <div className="relative h-48 w-full">
          <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
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

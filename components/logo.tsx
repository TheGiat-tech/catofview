import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
      <Image src="/logo.png" alt="Cat of View" width={40} height={40} className="rounded-lg" />
      <span className="text-xl font-bold text-camel">Cat of View</span>
    </Link>
  );
}

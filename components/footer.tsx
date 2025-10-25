import Link from 'next/link';
import { config } from '@/lib/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-brand-700 mb-4">Cat of View</h3>
            <p className="text-sm text-gray-600">
              Expert reviews and recommendations for cat litter and cat care products.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/reviews" className="text-sm text-gray-600 hover:text-brand-600">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/self-cleaning" className="text-sm text-gray-600 hover:text-brand-600">
                  Self-Cleaning
                </Link>
              </li>
              <li>
                <Link href="/how-we-test" className="text-sm text-gray-600 hover:text-brand-600">
                  How We Test
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-brand-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/comparison" className="text-sm text-gray-600 hover:text-brand-600">
                  Comparison
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-brand-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-brand-600">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <p className="text-xs text-gray-500">
              We may earn a commission through affiliate links. This does not affect our reviews.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {currentYear} {config.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

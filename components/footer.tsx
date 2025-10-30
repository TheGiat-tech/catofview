import Link from 'next/link';
import { config } from '@/lib/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--bg-muted)] border-t border-[color:var(--border)] mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-[color:var(--text)] mb-4">Cat of View</h3>
            <p className="text-sm text-[color:var(--subtext)]">
              Expert reviews and recommendations for cat litter and cat care products.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[color:var(--text)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/reviews" className="text-sm text-[color:var(--subtext)] hover:text-[color:var(--link)]">
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/self-cleaning"
                  className="text-sm text-[color:var(--subtext)] hover:text-[color:var(--link)]"
                >
                  Self-Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-test"
                  className="text-sm text-[color:var(--subtext)] hover:text-[color:var(--link)]"
                >
                  How We Test
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-[color:var(--subtext)] hover:text-[color:var(--link)]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[color:var(--text)] mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/comparison"
                  className="text-sm text-[color:var(--subtext)] hover:text-[color:var(--link)]"
                >
                  Comparison
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-[color:var(--subtext)] hover:text-[color:var(--link)]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[color:var(--subtext)] hover:text-[color:var(--link)]">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[color:var(--text)] mb-4">Legal</h4>
            <p className="text-xs text-[color:var(--subtext)]/80">
              We may earn a commission through affiliate links. This does not affect our reviews.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[color:var(--border)] text-center text-sm text-[color:var(--subtext)]">
          <p>© {currentYear} {config.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

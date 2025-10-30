import { Logo } from './logo';
import { NavLink } from './nav-link';
import { config } from '@/lib/config';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[color:var(--card)]/95 border-b border-[color:var(--border)] shadow-desert backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            {config.nav.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button className="text-[color:var(--text)] hover:text-[color:var(--link)]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

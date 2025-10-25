import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cat of View — Tofu Cat Litter Reviews',
  description: 'Independent reviews and guides for cat parents.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-neutral-800">
          <div className="container flex items-center justify-between h-14">
            <a href="/" className="font-semibold">Cat of View</a>
            <nav className="text-sm gap-4 flex">
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="container py-10 text-sm text-neutral-400">
          © {new Date().getFullYear()} Cat of View. All rights reserved.
        </footer>
      </body>
    </html>
  )
}

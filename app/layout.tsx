import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Adsense } from '@/components/adsense';
import { config } from '@/lib/config';
import { jsonLdWebsite } from '@/lib/seo';
import './globals.css';
import '@/styles/prose.css';

export const metadata: Metadata = {
  title: {
    default: config.siteName,
    template: `%s | ${config.siteName}`,
  },
  description: config.siteDescription,
  metadataBase: new URL(config.siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: config.siteUrl,
    siteName: config.siteName,
    title: config.siteName,
    description: config.siteDescription,
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: config.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.siteName,
    description: config.siteDescription,
    images: ['/og-default.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Adsense />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebsite()),
          }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

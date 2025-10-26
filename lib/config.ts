export const config = {
  siteName: 'Cat of View',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://catofview.com',
  siteDescription:
    'Expert reviews and recommendations for cat litter, self-cleaning litter boxes, and cat care products. We test everything so you can choose the best for your cat.',
  author: 'Cat of View',
  adsenseClient: 'ca-pub-8054613417167519',
  amazonTag: process.env.AMAZON_TAG ?? '',
  brandColor: '#d4892d',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/self-cleaning', label: 'Self-Cleaning' },
    { href: '/how-we-test', label: 'How We Test' },
    { href: '/comparison', label: 'Comparison' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ],
};

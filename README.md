# Cat of View

Expert reviews and recommendations for cat litter, self-cleaning litter boxes, and cat care products. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 📝 **Markdown Blog** with full-text posts, SEO optimization, and RSS feed
- 🔍 **SEO Optimized** with OpenGraph, JSON-LD, and proper meta tags
- 🎨 **Responsive Design** built with Tailwind CSS
- 🚀 **Static Site Generation** for maximum performance
- 📱 **Self-Cleaning Litter Box Hub** with product comparisons
- 💰 **Amazon Affiliate Integration** via search links
- 📊 **Google AdSense** ready (production only)
- 🗺️ **Sitemap & RSS** auto-generated from content

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://catofview.com
AMAZON_TAG=yourtag-20
REVALIDATE_SECRET=choose-a-strong-secret
```

### Variable Descriptions

- **NEXT_PUBLIC_SITE_URL**: Your production domain (used for SEO, sitemaps, and canonical URLs)
- **AMAZON_TAG**: Your Amazon Associates tag for affiliate links
- **REVALIDATE_SECRET**: Secret key for the revalidation API endpoint

## Project Structure

```
catofview/
├─ app/                          # Next.js App Router
│  ├─ layout.tsx                 # Root layout with SEO
│  ├─ page.tsx                   # Home page
│  ├─ (site)/                    # Site pages
│  │  ├─ reviews/
│  │  ├─ self-cleaning/          # Self-cleaning litter boxes hub
│  │  ├─ how-we-test/
│  │  ├─ comparison/
│  │  ├─ faq/
│  │  ├─ about/
│  │  └─ blog/
│  │     ├─ page.tsx             # Blog index
│  │     └─ [slug]/page.tsx      # Individual posts
│  ├─ api/revalidate/            # On-demand revalidation
│  ├─ sitemap.ts                 # Dynamic sitemap
│  └─ rss.xml/route.ts           # RSS feed
├─ components/                   # React components
│  ├─ header.tsx
│  ├─ footer.tsx
│  ├─ product-grid.tsx
│  ├─ rating-stars.tsx
│  └─ ...
├─ lib/                          # Utilities
│  ├─ config.ts                  # Site configuration
│  ├─ seo.ts                     # SEO helpers
│  ├─ affiliates.ts              # Amazon affiliate links
│  └─ posts.ts                   # Blog post utilities
├─ content/posts/                # Markdown blog posts
│  ├─ best-tofu-litter-2026.md
│  └─ best-self-cleaning-litter-boxes-2026.md
├─ public/                       # Static assets
│  ├─ images/                    # Product images
│  ├─ robots.txt
│  ├─ ads.txt                    # Google AdSense
│  └─ manifest.webmanifest
└─ styles/                       # CSS
   └─ prose.css                  # Blog typography
```

## Content Management

### Adding a New Blog Post

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter with required fields:

```yaml
---
title: "Your Post Title"
date: "2026-10-20"
excerpt: "Brief description for SEO and previews"
cover: "/images/your-cover.jpg"
tags: ["tag1", "tag2"]
rating: 4.5
products:
  - title: "Product Name"
    name: "Product Name for Amazon Search"
    image: "/images/product.jpg"
    pros:
      - "Advantage 1"
      - "Advantage 2"
    cons:
      - "Disadvantage 1"
    specs:
      Feature1: "Value1"
      Feature2: "Value2"
---

Your markdown content here...
```

3. Write your content using standard Markdown
4. The post will automatically appear on the blog index and in the sitemap

### Replacing Images

All product images are stored in `/public/images/`. To replace an image:

1. Keep the same filename (e.g., `litter-robot-4.jpg`)
2. Replace the file in the appropriate directory
3. Images are referenced in Markdown posts and code

**Image directories:**
- `/public/images/brand/` - Branding and hero images
- `/public/images/litter/` - Cat litter product photos
- `/public/images/self-cleaning/` - Self-cleaning litter box photos

## Customization

### Site Configuration

Edit `lib/config.ts` to update:
- Site name and description
- Navigation menu
- Brand colors
- AdSense client ID

### Styling

- **Global styles**: `app/globals.css`
- **Blog typography**: `styles/prose.css`
- **Theme colors**: `tailwind.config.ts`

### SEO

- **Meta tags**: Defined in each page's metadata export
- **OpenGraph**: Generated via `lib/seo.ts`
- **JSON-LD**: Automatic for website and articles
- **Sitemap**: Auto-generated from pages and posts

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify  
- Cloudflare Pages
- Any Node.js hosting

## AdSense Setup

Google AdSense is configured for production only:

1. Update `lib/config.ts` with your AdSense client ID
2. Update `public/ads.txt` with your publisher ID
3. AdSense script loads only in production (`NODE_ENV === 'production'`)

## Affiliate Links

Amazon affiliate links are generated via `lib/affiliates.ts`:

```typescript
import { amazonSearch } from '@/lib/affiliates';

// Generates: https://www.amazon.com/s?k=Product+Name&tag=yourtag-20
const url = amazonSearch('Product Name');
```

Set your `AMAZON_TAG` environment variable to include your affiliate tag in links.

## API Routes

### Revalidation

Manually revalidate pages:

```bash
curl "https://catofview.com/api/revalidate?secret=YOUR_SECRET&path=/blog"
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

For questions or issues:
- Check existing blog posts for examples
- Review component documentation in code comments
- Refer to Next.js 14 documentation

---

Built with ❤️ for cat lovers everywhere.
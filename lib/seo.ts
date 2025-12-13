import { config } from './config';
import { Product } from './posts';

interface OpenGraphData {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
}

export function generateOpenGraph(data: OpenGraphData) {
  return {
    title: data.title,
    description: data.description,
    url: data.url,
    siteName: config.siteName,
    images: [
      {
        url: data.image || `${config.siteUrl}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: data.title,
      },
    ],
    locale: 'en_US',
    type: data.type || 'website',
  };
}

export function jsonLdWebsite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.siteName,
    url: config.siteUrl,
    description: config.siteDescription,
    author: {
      '@type': 'Organization',
      name: config.author,
    },
  };
}

export function jsonLdArticle(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  rating?: number;
}) {
  const articleData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || `${config.siteUrl}/og-default.jpg`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: config.author,
    },
    publisher: {
      '@type': 'Organization',
      name: config.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${config.siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };

  // Add review aggregate rating if available
  if (article.rating) {
    articleData.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: article.rating,
      bestRating: 5,
      ratingCount: 1,
    };
  }

  return articleData;
}

export function jsonLdProductReview(product: Product & { rating?: number; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: product.name,
      image: product.image,
      description: product.pros.join(', '),
    },
    reviewRating: product.rating
      ? {
          '@type': 'Rating',
          ratingValue: product.rating,
          bestRating: 5,
        }
      : undefined,
    author: {
      '@type': 'Organization',
      name: config.author,
    },
    publisher: {
      '@type': 'Organization',
      name: config.siteName,
    },
    url: product.url,
  };
}

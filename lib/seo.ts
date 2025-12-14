import { config } from './config';
import type { Product } from './posts';

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
  return {
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
    ...(article.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: article.rating,
        bestRating: 5,
        ratingCount: 1,
      },
    }),
  };
}

export function jsonLdProduct(product: {
  name: string;
  description?: string;
  image: string;
  rating?: number;
  pros?: string[];
  cons?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || `Expert review of ${product.name}`,
    image: product.image.startsWith('http') 
      ? product.image 
      : `${config.siteUrl}${product.image}`,
    brand: {
      '@type': 'Brand',
      name: product.name.split(' ')[0],
    },
    ...(product.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        bestRating: 5,
        ratingCount: 1,
      },
    }),
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: product.rating || 4.5,
        bestRating: 5,
      },
      author: {
        '@type': 'Organization',
        name: config.author,
      },
      ...(product.pros && {
        positiveNotes: {
          '@type': 'ItemList',
          itemListElement: product.pros.map((pro, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: pro,
          })),
        },
      }),
      ...(product.cons && {
        negativeNotes: {
          '@type': 'ItemList',
          itemListElement: product.cons.map((con, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: con,
          })),
        },
      }),
    },
  };
}

export function jsonLdReviewArticle(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  rating?: number;
  products?: Product[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': article.url,
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
    ...(article.rating && {
      reviewRating: {
        '@type': 'Rating',
        ratingValue: article.rating,
        bestRating: 5,
      },
    }),
    ...(article.products && article.products.length > 0 && {
      itemReviewed: {
        '@type': 'ItemList',
        itemListElement: article.products.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Product',
            name: product.name || product.title,
            image: product.image.startsWith('http')
              ? product.image
              : `${config.siteUrl}${product.image}`,
          },
        })),
      },
    }),
  };
}

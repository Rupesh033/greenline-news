import { MetadataRoute } from 'next';
import { articles_en, articles_hi, categories_en, categories_hi } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenlinenews.com';
  const languages = ['hi', 'en'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Home and static pages for each language
  languages.forEach((lang) => {
    // Homepage
    sitemapEntries.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1.0,
      alternates: {
        languages: {
          hi: `${baseUrl}/hi`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}/hi`,
        },
      },
    });

    // Static pages
    const staticPages = ['about', 'contact', 'search', 'privacy', 'terms'];
    staticPages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/${page}`,
        lastModified: new Date(),
        changeFrequency: page === 'search' ? 'weekly' : 'monthly',
        priority: page === 'about' || page === 'contact' ? 0.7 : 0.4,
        alternates: {
          languages: {
            hi: `${baseUrl}/hi/${page}`,
            en: `${baseUrl}/en/${page}`,
          },
        },
      });
    });

    // Categories
    const categories = lang === 'hi' ? categories_hi : categories_en;
    categories.forEach((cat) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/category/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: ['garhwa', 'daltonganj', 'palamu', 'ranchi', 'crime', 'relationships', 'viral'].includes(cat.slug) ? 0.95 : 0.85,
        alternates: {
          languages: {
            hi: `${baseUrl}/hi/category/${cat.slug}`,
            en: `${baseUrl}/en/category/${cat.slug}`,
          },
        },
      });
    });
  });

  // Articles in English
  articles_en.forEach((article) => {
    sitemapEntries.push({
      url: `${baseUrl}/en/article/${article.slug}`,
      lastModified: new Date(article.date || Date.now()),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/article/${article.slug}`,
        },
      },
    });
  });

  // Articles in Hindi
  articles_hi.forEach((article) => {
    sitemapEntries.push({
      url: `${baseUrl}/hi/article/${article.slug}`,
      lastModified: new Date(article.date || Date.now()),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          hi: `${baseUrl}/hi/article/${article.slug}`,
        },
      },
    });
  });

  return sitemapEntries;
}

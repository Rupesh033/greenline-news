import type { Metadata } from 'next';
import { getArticleBySlug, getCategoryById, getArticlesByCategory } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Share2, Link as LinkIcon, MessageSquare } from 'lucide-react';
import AdPlaceholder from '@/components/AdPlaceholder';
import NewsletterBox from '@/components/NewsletterBox';
import ArticleCard from '@/components/ArticleCard';
import CopyLinkButton from '@/components/CopyLinkButton';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = getArticleBySlug(slug, lang);

  if (!article) {
    return {
      title: 'Article Not Found | Greenline News',
    };
  }

  const category = getCategoryById(article.categoryId, lang) || { name: 'News', slug: 'news' };
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenlinenews.com';
  const articleUrl = `${baseUrl}/${lang}/article/${article.slug}`;
  const isHindi = lang === 'hi';

  const defaultKeywords = isHindi
    ? [
        'greenline news',
        'garhwa news',
        'greenline news garhwa',
        'news agency in garhwa',
        'viral news',
        'garhwa popular news',
        'best news',
        'jharkhand news',
        'garhwa breaking news',
        'garhwa samachar',
        'गढ़वा समाचार',
        'गढ़वा न्यूज़',
        'ग्रीनलाइन न्यूज गढ़वा',
        'झारखंड समाचार',
        'वायरल न्यूज़',
        category.name,
        article.title,
      ]
    : [
        'greenline news',
        'green line news',
        'greenlinenews',
        'garhwa news',
        'greenline news garhwa',
        'news agency in garhwa',
        'viral news',
        'garhwa popular news',
        'best news',
        'jharkhand news',
        'garhwa breaking news',
        category.name,
        article.title,
      ];

  return {
    title: `${article.title} | Greenline News`,
    description: article.excerpt,
    keywords: defaultKeywords,
    authors: [{ name: article.author.name }],
    alternates: {
      canonical: articleUrl,
      languages: {
        [lang]: articleUrl,
      },
    },
    openGraph: {
      type: 'article',
      locale: isHindi ? 'hi_IN' : 'en_US',
      url: articleUrl,
      title: article.title,
      description: article.excerpt,
      siteName: 'Greenline News',
      publishedTime: article.date,
      authors: [article.author.name],
      section: category.name,
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const article = getArticleBySlug(slug, lang);

  if (!article) {
    notFound();
  }

  const category = getCategoryById(article.categoryId, lang) || { name: 'News', slug: 'news' };
  const relatedArticles = getArticlesByCategory(article.categoryId, lang)
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const formattedDate = new Date(article.date).toLocaleDateString(
    lang === 'hi' ? 'hi-IN' : 'en-US',
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
  );

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenlinenews.com';
  const articleUrl = `${baseUrl}/${lang}/article/${article.slug}`;

  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: [article.imageUrl],
    datePublished: article.date,
    dateModified: article.date,
    author: [
      {
        '@type': 'Person',
        name: article.author.name,
      },
    ],
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'Greenline News',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    articleSection: category.name,
    inLanguage: lang === 'hi' ? 'hi-IN' : 'en-US',
    keywords: `greenline news, garhwa news, ${category.name}, ${article.title}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category.name,
        item: `${baseUrl}/${lang}/category/${category.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 max-w-7xl py-8">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-6">
          <Link href={`/${lang}`} className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}/category/${category.slug}`} className="hover:text-primary">
            {category.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 truncate max-w-[200px] md:max-w-md">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Article */}
          <article className="lg:col-span-3">
            <header className="mb-8">
              <Link href={`/${lang}/category/${category.slug}`}>
                <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 inline-block">
                  {category.name}
                </span>
              </Link>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 font-serif italic">{article.excerpt}</p>

              <div className="flex flex-col md:flex-row md:items-center justify-between border-y border-gray-100 py-4 gap-4">
                <div className="flex items-center">
                  <Image
                    src={article.author.avatarUrl}
                    alt={article.author.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{article.author.name}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{formattedDate}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" /> {article.readTime} read
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-gray-500 mr-2 flex items-center">
                    <Share2 size={16} className="mr-1" /> Share
                  </span>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold"
                  >
                    FB
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-xs font-bold"
                  >
                    X
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' ' + articleUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors text-xs font-bold"
                  >
                    WA
                  </a>
                  <CopyLinkButton />
                </div>
              </div>
            </header>

            <figure className="mb-10">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                {article.title} - Greenline News
              </figcaption>
            </figure>

            <div
              className="prose prose-lg max-w-none mb-12 prose-a:text-primary hover:prose-a:text-green-700 prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags & Keywords for SEO */}
            <div className="flex flex-wrap gap-2 mb-12 border-t border-gray-100 pt-8">
              <Link
                href={`/${lang}/category/${category.slug}`}
                className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors"
              >
                #{category.name}
              </Link>
              <Link
                href={`/${lang}/category/garhwa`}
                className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors"
              >
                #GarhwaNews
              </Link>
              <Link
                href={`/${lang}/category/viral`}
                className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors"
              >
                #ViralNews
              </Link>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                #GreenlineNews
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                #Jharkhand
              </span>
            </div>

            {/* Author Bio Box */}
            <div className="bg-secondary/50 rounded-xl p-8 mb-12 flex flex-col md:flex-row items-center md:items-start gap-6">
              <Image
                src={article.author.avatarUrl}
                alt={article.author.name}
                width={100}
                height={100}
                className="rounded-full object-cover shadow-sm"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold font-serif mb-2">About {article.author.name}</h3>
                <p className="text-gray-600 mb-4">
                  {article.author.name} is a senior correspondent at Greenline News covering{' '}
                  {category.name.toLowerCase()}, Garhwa regional updates, and breaking news across
                  Jharkhand.
                </p>
                <Link
                  href={`/${lang}/search?q=${encodeURIComponent(article.author.name)}`}
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  View all articles by {article.author.name}
                </Link>
              </div>
            </div>

            {/* Comments Section (Static) */}
            <div className="border-t border-gray-100 pt-10">
              <h3 className="text-2xl font-bold font-serif mb-8 flex items-center">
                <MessageSquare className="mr-3 text-primary" /> Comments (2)
              </h3>

              {/* Comment Form */}
              <form className="mb-10">
                <textarea
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  rows={4}
                  placeholder="Leave a comment..."
                ></textarea>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors"
                  >
                    Post Comment
                  </button>
                </div>
              </form>

              {/* Comment List */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-gray-500">
                    JD
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="font-bold text-gray-900 mr-2">John Doe</span>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-gray-700">
                      Excellent reporting on this issue. It&apos;s crucial that we stay informed
                      about these developments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-gray-500">
                    AS
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="font-bold text-gray-900 mr-2">Alice Smith</span>
                      <span className="text-xs text-gray-500">5 hours ago</span>
                    </div>
                    <p className="text-gray-700">
                      Great coverage by Greenline News. Looking forward to further updates on Garhwa
                      and Jharkhand developments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="flex justify-center">
              <AdPlaceholder width={300} height={250} lang={lang} />
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold font-serif mb-6 relative pb-2 border-b-2 border-gray-100">
                Related Articles
                <span className="absolute -bottom-0.5 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <div className="flex flex-col space-y-6">
                {relatedArticles.map((relArt) => (
                  <ArticleCard key={relArt.id} article={relArt} lang={lang} layout="compact" />
                ))}
              </div>
            </div>

            <NewsletterBox mini />

            <div className="flex justify-center sticky top-24">
              <AdPlaceholder width={300} height={600} lang={lang} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

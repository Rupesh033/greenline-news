import type { Metadata } from 'next';
import { getCategoryBySlug, getArticlesByCategory } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import NewsletterBox from '@/components/NewsletterBox';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const category = getCategoryBySlug(slug, lang);

  if (!category) {
    return {
      title: 'Category Not Found | Greenline News',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenlinenews.com';
  const categoryUrl = `${baseUrl}/${lang}/category/${slug}`;
  const isHindi = lang === 'hi';

  let title = `${category.name} | Greenline News`;
  let description = `Latest ${category.name.toLowerCase()} news, updates, and in-depth analysis on Greenline News.`;
  let keywords = [
    'greenline news',
    'green line news',
    'greenlinenews',
    'best news',
    category.name,
  ];

  if (slug === 'garhwa') {
    title = isHindi
      ? 'गढ़वा समाचार (Garhwa News) - ब्रेकिंग न्यूज़, ज़मीनी रिपोर्ट व ताज़ा खबरें | Greenline News'
      : 'Garhwa News (गढ़वा समाचार) - Breaking Updates, Ground Reports & Headlines | Greenline News';
    description = isHindi
      ? 'गढ़वा समाचार (Garhwa News): गढ़वा शहर, सोनपुरवा, मझिआंव, रंका, नगर उंटारी, भवनाथपुर सहित पूरे गढ़वा जिले की ताज़ा और ब्रेकिंग खबरें Greenline News पर।'
      : 'Latest Garhwa news (गढ़वा समाचार), breaking local reports, crime, politics, administration, and community stories from Garhwa, Jharkhand on Greenline News.';
    keywords = [
      'garhwa news',
      'greenline news garhwa',
      'news agency in garhwa',
      'garhwa popular news',
      'garhwa breaking news',
      'garhwa samachar',
      'गढ़वा समाचार',
      'गढ़वा न्यूज़',
      'ग्रीनलाइन न्यूज गढ़वा',
      'झारखंड समाचार',
      'greenline news',
      'greenlinenews',
      'viral news',
      'best news',
    ];
  } else if (slug === 'daltonganj') {
    title = isHindi
      ? 'डाल्टनगंज समाचार (Daltonganj News) - मेदिनीनगर ब्रेकिंग न्यूज़ व ताज़ा खबरें | Greenline News'
      : 'Daltonganj News (डाल्टनगंज समाचार) - Medininagar Breaking News & Updates | Greenline News';
    description = isHindi
      ? 'डाल्टनगंज समाचार (Daltonganj News): मेदिनीनगर, कोयल नदी, शाहपुर, चियांकी सहित पूरे पलामू प्रमंडल की ताज़ा और ब्रेकिंग खबरें Greenline News पर।'
      : 'Latest Daltonganj & Medininagar news (डाल्टनगंज समाचार), civic developments, traffic, crime, and breaking reports from Palamu division on Greenline News.';
    keywords = [
      'daltonganj news',
      'medininagar news',
      'डाल्टनगंज समाचार',
      'मेदिनीनगर समाचार',
      'greenline news daltonganj',
      'daltonganj breaking news',
      'greenline news palamu',
      'palamu news',
      'jharkhand news',
    ];
  } else if (slug === 'palamu') {
    title = isHindi
      ? 'पलामू समाचार (Palamu News) - पलामू जिला ब्रेकिंग न्यूज़ व ज़मीनी रिपोर्ट | Greenline News'
      : 'Palamu News (पलामू समाचार) - Latest Breaking News & Ground Reports | Greenline News';
    description = isHindi
      ? 'पलामू जिला समाचार: मेदिनीनगर, पाटन, लेस्लीगंज, छतरपुर, हुसैनाबाद, हैदरनगर, विश्रामपुर और बेतला की ताज़ा खबरें Greenline News पर।'
      : 'Comprehensive Palamu news (पलामू समाचार), crime, politics, rural administration, healthcare, and forestry updates across Palamu District, Jharkhand.';
    keywords = [
      'palamu news',
      'पलामू समाचार',
      'greenline news palamu',
      'palamu breaking news',
      'पलामू न्यूज़',
      'daltonganj news',
      'greenline news',
      'jharkhand news',
    ];
  } else if (slug === 'ranchi') {
    title = isHindi
      ? 'राँची समाचार (Ranchi News) - झारखंड राजधानी ब्रेकिंग न्यूज़ व प्रशासनिक हलचल | Greenline News'
      : 'Ranchi News (राँची समाचार) - Jharkhand Capital Breaking Updates | Greenline News';
    description = isHindi
      ? 'झारखंड की राजधानी राँची से विधानसभा, सचिवालय, स्मार्ट सिटी, अपराध, राजनीति और राज्यस्तरीय बड़े फैसलों की ताज़ा खबरें Greenline News पर।'
      : 'Latest Ranchi news (राँची समाचार), Jharkhand assembly updates, smart city projects, governance, and state headlines on Greenline News.';
    keywords = [
      'ranchi news',
      'green line news ranchi',
      'राँची समाचार',
      'ranchi breaking news',
      'greenline news',
      'jharkhand news',
      'झारखंड राजधानी समाचार',
    ];
  } else if (slug === 'viral') {
    title = isHindi
      ? 'वायरल न्यूज़ (Viral News) - ट्रेंडिंग वीडियो व सोशल मीडिया सुर्खियाँ | Greenline News'
      : 'Viral News - Trending Videos, Social Buzz & Popular Stories | Greenline News';
    description = isHindi
      ? 'सोशल मीडिया पर वायरल हो रही ताज़ा खबरें, रोचक वीडियो और ट्रेंडिंग मुद्दे पढ़ें Greenline News पर।'
      : 'Discover top viral news stories, trending videos, and most talked-about happenings curated by Greenline News.';
    keywords = [
      'viral news',
      'best news',
      'वायरल न्यूज़',
      'garhwa popular news',
      'greenline news',
      'greenlinenews',
      'trending news',
    ];
  } else if (slug === 'crime') {
    title = isHindi
      ? 'क्राइम न्यूज़ (Crime & Investigation) - सेक्सटॉर्शन, साइबर फ्रॉड, पुलिस कार्रवाई व कानूनी खबरें | Greenline News'
      : 'Crime & Investigation News - Cyber Sextortion, Police Crackdowns, Law & Safety | Greenline News';
    description = isHindi
      ? 'क्राइम न्यूज़, साइबर सेक्सटॉर्शन वीडियो कॉल ब्लैकमेलिंग गिरोह, अवैध सेक्स रैकेट भंडाफोड़, महिला सुरक्षा (POCSO, BNS) और पुलिस ऑपरेशन्स की ताजा खबरें Greenline News पर।'
      : 'Latest crime news, cyber sextortion alerts, inter-state illegal trafficking & sex racket crackdowns, women safety laws (POSH/BNS), and police investigations on Greenline News.';
    keywords = [
      'sex news',
      'sex news in english',
      'india sex news today in english',
      'sex crime news',
      'sextortion news',
      'sexual harassment news',
      'sexual assault news',
      'sex racket news',
      'sex news articles',
      'crime news',
      'cyber crime alert',
      'police action',
      'greenline news',
      'greenlinenews',
    ];
  } else if (slug === 'relationships') {
    title = isHindi
      ? 'रिलेशनशिप व सेक्शुअल हेल्थ (Relationships & Health) - मानसिक स्वास्थ्य, वेलनेस व विशेषज्ञ सलाह | Greenline News'
      : 'Sex and Relationships News - Health, Intimacy, Mental Wellness & Expert Insights | Greenline News';
    description = isHindi
      ? 'रिलेशनशिप व सेक्शुअल हेल्थ: आधुनिक रिश्तों में आपसी समझ, मेंटल वेलनेस, सेक्शुअल हेल्थ गाइडलाइंस और डॉक्टर व काउंसलर्स की प्रमाणित सलाह पढ़ें Greenline News पर।'
      : 'Read latest sex and relationships news, sexual health awareness, clinical psychology insights, marital wellness, and lifestyle research on Greenline News.';
    keywords = [
      'sex and relationships news',
      'sexual health news',
      'sex news articles',
      'sex news value',
      'relationships news',
      'mental wellness',
      'healthy relationships',
      'greenline news',
      'greenlinenews',
    ];
  }

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: categoryUrl,
      languages: {
        hi: `${baseUrl}/hi/category/${slug}`,
        en: `${baseUrl}/en/category/${slug}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: isHindi ? 'hi_IN' : 'en_US',
      url: categoryUrl,
      title,
      description,
      siteName: 'Greenline News',
      images: [
        {
          url: `${baseUrl}/logo.jpg`,
          width: 1200,
          height: 630,
          alt: `${category.name} - Greenline News`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/logo.jpg`],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const category = getCategoryBySlug(slug, lang);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category.id, lang);
  const isHindi = lang === 'hi';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenlinenews.com';
  const categoryUrl = `${baseUrl}/${lang}/category/${slug}`;

  const isRegional = ['garhwa', 'daltonganj', 'palamu', 'ranchi'].includes(slug);

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
        item: categoryUrl,
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} - Greenline News`,
    url: categoryUrl,
    description: `Latest news and updates in ${category.name}`,
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'Greenline News',
      url: baseUrl,
    },
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="flex text-sm text-gray-500 mb-6">
        <Link href={`/${lang}`} className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-semibold">{category.name}</span>
      </nav>

      {/* Regional Quick City Switcher Bar */}
      {isRegional && (
        <div className="mb-8 bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-3 flex flex-wrap items-center gap-2 text-xs md:text-sm">
          <span className="font-bold text-emerald-900 pr-2 border-r border-emerald-200">
            {isHindi ? 'झारखंड शहर' : 'Jharkhand Cities'}:
          </span>
          <Link
            href={`/${lang}/category/garhwa`}
            className={`px-3 py-1 rounded-full font-semibold transition-colors ${
              slug === 'garhwa'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 hover:bg-emerald-100 hover:text-emerald-800'
            }`}
          >
            {isHindi ? 'गढ़वा' : 'Garhwa'}
          </Link>
          <Link
            href={`/${lang}/category/daltonganj`}
            className={`px-3 py-1 rounded-full font-semibold transition-colors ${
              slug === 'daltonganj'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 hover:bg-emerald-100 hover:text-emerald-800'
            }`}
          >
            {isHindi ? 'डाल्टनगंज (मेदिनीनगर)' : 'Daltonganj'}
          </Link>
          <Link
            href={`/${lang}/category/palamu`}
            className={`px-3 py-1 rounded-full font-semibold transition-colors ${
              slug === 'palamu'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 hover:bg-emerald-100 hover:text-emerald-800'
            }`}
          >
            {isHindi ? 'पलामू' : 'Palamu'}
          </Link>
          <Link
            href={`/${lang}/category/ranchi`}
            className={`px-3 py-1 rounded-full font-semibold transition-colors ${
              slug === 'ranchi'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 hover:bg-emerald-100 hover:text-emerald-800'
            }`}
          >
            {isHindi ? 'राँची' : 'Ranchi'}
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-8 border-b-2 border-emerald-600 pb-5">
            <h1 className="text-4xl font-bold font-serif mb-2 text-gray-900 flex items-center gap-3">
              <span>{category.name}</span>
              {isRegional && (
                <span className="text-sm font-sans font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                  {isHindi ? 'ब्यूरो कवरेज' : 'Bureau Coverage'}
                </span>
              )}
            </h1>
            <p className="text-gray-600 text-base">
              {slug === 'garhwa'
                ? isHindi
                  ? 'गढ़वा समाचार (Garhwa News): सोनपुरवा, मझिआंव, रंका, नगर उंटारी, भवनाथपुर, धुरकी सहित पूरे जिले की निष्पक्ष खबरें व ब्रेकिंग अपडेट्स।'
                  : 'Garhwa News Bureau: Comprehensive daily ground reports, breaking news, politics, and civic updates from across Garhwa District, Jharkhand.'
                : slug === 'daltonganj'
                  ? isHindi
                    ? 'डाल्टनगंज समाचार (Daltonganj News): मेदिनीनगर, शाहपुर, चियांकी, कोयल नदी और आसपास के शहरी व ग्रामीण क्षेत्रों की ताज़ा खबरें।'
                    : 'Daltonganj News Bureau: Daily civic updates, traffic, municipal administration, and local stories from Medininagar and Daltonganj.'
                  : slug === 'palamu'
                    ? isHindi
                      ? 'पलामू समाचार (Palamu News): पाटन, छतरपुर, हुसैनाबाद, हैदरनगर, विश्रामपुर और बेतला सहित पूरे पलामू जिले की विश्वसनीय खबरें।'
                      : 'Palamu News Bureau: Authoritative reporting on governance, rural development, healthcare, and forestry across Palamu District.'
                    : slug === 'ranchi'
                      ? isHindi
                        ? 'राँची समाचार (Ranchi News): झारखंड की राजधानी राँची से प्रशासनिक फैसले, विधानसभा सत्र, स्मार्ट सिटी और राज्यस्तरीय बड़ी सुर्खियाँ।'
                        : 'Ranchi Bureau: Capital city coverage, Jharkhand state administration, legislative assembly developments, and citywide reports.'
                      : slug === 'viral'
                        ? isHindi
                          ? 'सोशल मीडिया और इंटरनेट पर वायरल हो रहे सबसे चर्चित वीडियो, रोचक घटनाएं और ट्रेंडिंग खबरें।'
                          : 'The most talked-about viral videos, trending online topics, and popular news across the web.'
                        : isHindi
                          ? `${category.name} से जुड़े ताजा समाचार, निष्पक्ष विश्लेषण और मुख्य सुर्खियाँ।`
                          : `Latest news, updates, and in-depth analysis on ${category.name.toLowerCase()}.`}
            </p>

            {/* Quick SEO Filter Tags for Regional Cities */}
            {isRegional && (
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-100 text-xs">
                <span className="font-semibold text-gray-700 py-1">Related Keywords:</span>
                {slug === 'garhwa' && (
                  <>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#GarhwaNews</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#GreenlineNewsGarhwa</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#NewsAgencyInGarhwa</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#JharkhandNews</span>
                  </>
                )}
                {slug === 'daltonganj' && (
                  <>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#DaltonganjNews</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#MedininagarNews</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#GreenlineNewsDaltonganj</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#डाल्टनगंजसमाचार</span>
                  </>
                )}
                {slug === 'palamu' && (
                  <>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#PalamuNews</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#पलामूसमाचार</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#PalamuBreakingNews</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#GreenlineNewsPalamu</span>
                  </>
                )}
                {slug === 'ranchi' && (
                  <>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#RanchiNews</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#GreenLineNewsRanchi</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#राँचीसमाचार</span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">#JharkhandCapitalNews</span>
                  </>
                )}
              </div>
            )}
          </div>

          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.id} article={article} lang={lang} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-100">
              <p className="text-lg text-gray-500 font-medium">
                {isHindi
                  ? 'इस श्रेणी में अभी कोई लेख नहीं है। कृपया जल्द ही वापस देखें।'
                  : 'No articles found in this category yet.'}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="flex justify-center">
            <AdPlaceholder width={300} height={250} />
          </div>
          <NewsletterBox mini />
          <div className="flex justify-center">
            <AdPlaceholder width={300} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
}

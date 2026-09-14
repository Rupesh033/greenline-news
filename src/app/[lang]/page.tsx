import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from '@/components/ArticleCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import BrightBooksBanner from '@/components/BrightBooksBanner';
import { getArticles, getVideos, getCategories } from '@/lib/data';
import { getDictionary, ValidLocale } from '@/lib/dictionaries';
import { PlayCircle, MapPin, TrendingUp, Building2, ChevronRight } from 'lucide-react';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = lang as ValidLocale;
  const dict = await getDictionary(validLang);
  const articles = getArticles(validLang);
  const videos = getVideos(validLang);
  const isHindi = validLang === 'hi';

  const featuredArticle = articles.find((a) => a.featured);
  const latestArticles = articles.filter((a) => !a.featured).slice(0, 8);
  const trendingArticles = articles.filter((a) => a.trending).slice(0, 5);

  // Regional City Articles
  const garhwaArticles = articles.filter((a) => a.categoryId === 'c_garhwa');
  const daltonganjArticles = articles.filter((a) => a.categoryId === 'c_daltonganj');
  const palamuArticles = articles.filter((a) => a.categoryId === 'c_palamu');
  const ranchiArticles = articles.filter((a) => a.categoryId === 'c_ranchi');

  // Specific category articles
  const techArticles = articles.filter((a) => a.categoryId === 'c5').slice(0, 4);
  const businessArticles = articles.filter((a) => a.categoryId === 'c4').slice(0, 4);
  const sportsArticles = articles.filter((a) => a.categoryId === 'c6').slice(0, 4);
  const entertainmentArticles = articles.filter((a) => a.categoryId === 'c7').slice(0, 4);
  const environmentArticles = articles.filter((a) => a.categoryId === 'c8').slice(0, 4);
  const crimeArticles = articles.filter((a) => a.categoryId === 'c_crime').slice(0, 4);
  const relationshipArticles = articles.filter((a) => a.categoryId === 'c_relationships').slice(0, 4);

  const renderCategorySection = (title: string, categoryArticles: typeof articles) => {
    if (categoryArticles.length === 0) return null;
    const cat = getCategories(validLang).find((c) => c.id === categoryArticles[0].categoryId);
    const catName = cat ? cat.name : title;
    const catSlug = cat ? cat.slug : '';

    return (
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-end mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold font-serif relative">
              <span className="relative z-10">{catName}</span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-primary/20 -z-10"></span>
              <span className="absolute -bottom-2.5 left-0 w-1/2 h-1 bg-primary"></span>
            </h2>
            {catSlug && (
              <Link
                href={`/${lang}/category/${catSlug}`}
                className="text-sm font-semibold text-primary hover:text-green-700 transition-colors"
              >
                {dict.home.viewAllLatest || 'View All'} &rarr;
              </Link>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} lang={validLang} layout="compact" />
            ))}
          </div>
        </div>
      </section>
    );
  };

  const regionalCities = [
    {
      id: 'garhwa',
      name: isHindi ? 'गढ़वा समाचार' : 'Garhwa News',
      slug: 'garhwa',
      tag: isHindi ? 'मुख्यालय' : 'Headquarters',
      articles: garhwaArticles.slice(0, 2),
    },
    {
      id: 'daltonganj',
      name: isHindi ? 'डाल्टनगंज (मेदिनीनगर)' : 'Daltonganj News',
      slug: 'daltonganj',
      tag: isHindi ? 'नगर निगम' : 'Medininagar',
      articles: daltonganjArticles.slice(0, 2),
    },
    {
      id: 'palamu',
      name: isHindi ? 'पलामू समाचार' : 'Palamu News',
      slug: 'palamu',
      tag: isHindi ? 'प्रमंडल' : 'Division',
      articles: palamuArticles.slice(0, 2),
    },
    {
      id: 'ranchi',
      name: isHindi ? 'राँची समाचार' : 'Ranchi News',
      slug: 'ranchi',
      tag: isHindi ? 'राजधानी' : 'Capital Bureau',
      articles: ranchiArticles.slice(0, 2),
    },
  ];

  return (
    <div className="py-6">
      {/* SEO Keyword & Trending Topic Pills Bar */}
      <div className="container mx-auto px-4 max-w-7xl mb-6">
        <div className="bg-white border border-emerald-100 rounded-xl p-3 shadow-xs flex flex-wrap items-center gap-2 text-xs md:text-sm">
          <span className="font-bold text-emerald-800 flex items-center gap-1.5 shrink-0 pr-2 border-r border-gray-200">
            <TrendingUp size={16} className="text-emerald-600" />
            {isHindi ? 'क्षेत्रीय ट्रेंड्स' : 'Regional Hubs'}:
          </span>
          <Link
            href={`/${lang}/category/garhwa`}
            className="bg-emerald-50 text-emerald-900 font-semibold px-3 py-1 rounded-full hover:bg-emerald-600 hover:text-white transition-colors"
          >
            #GarhwaNews
          </Link>
          <Link
            href={`/${lang}/category/daltonganj`}
            className="bg-emerald-50 text-emerald-900 font-semibold px-3 py-1 rounded-full hover:bg-emerald-600 hover:text-white transition-colors"
          >
            #DaltonganjNews
          </Link>
          <Link
            href={`/${lang}/category/palamu`}
            className="bg-emerald-50 text-emerald-900 font-semibold px-3 py-1 rounded-full hover:bg-emerald-600 hover:text-white transition-colors"
          >
            #PalamuNews
          </Link>
          <Link
            href={`/${lang}/category/ranchi`}
            className="bg-emerald-50 text-emerald-900 font-semibold px-3 py-1 rounded-full hover:bg-emerald-600 hover:text-white transition-colors"
          >
            #RanchiNews
          </Link>
          <Link
            href={`/${lang}/category/viral`}
            className="bg-gray-100 text-gray-800 font-medium px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
          >
            #ViralNews
          </Link>
          <Link
            href={`/${lang}/category/crime`}
            className="bg-rose-50 text-rose-900 font-semibold px-3 py-1 rounded-full hover:bg-rose-600 hover:text-white transition-colors"
          >
            #CrimeInvestigation
          </Link>
          <Link
            href={`/${lang}/category/crime`}
            className="bg-amber-50 text-amber-900 font-semibold px-3 py-1 rounded-full hover:bg-amber-600 hover:text-white transition-colors"
          >
            #SextortionAlert
          </Link>
          <Link
            href={`/${lang}/category/relationships`}
            className="bg-purple-50 text-purple-900 font-semibold px-3 py-1 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
          >
            #RelationshipsAndHealth
          </Link>
          <Link
            href={`/${lang}/search?q=greenline`}
            className="bg-gray-100 text-gray-800 font-medium px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
          >
            #GreenlineNews
          </Link>
          <Link
            href={`/${lang}/search?q=jharkhand`}
            className="bg-gray-100 text-gray-800 font-medium px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
          >
            #JharkhandNews
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 max-w-7xl mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Featured */}
          <div className="lg:col-span-8">
            {featuredArticle && (
              <Link
                href={`/${lang}/article/${featuredArticle.slug}`}
                className="group block relative rounded-xl overflow-hidden h-[400px] md:h-[500px] shadow-lg"
              >
                <Image
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block bg-accent text-gray-900 text-xs font-bold px-3 py-1 uppercase rounded mb-4">
                    {dict.home.latestNews}
                  </span>
                  <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight group-hover:text-green-300 transition-colors">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-gray-200 text-base md:text-lg mb-4 line-clamp-2 max-w-3xl">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-gray-300 text-sm">
                    <span className="font-medium text-white">{featuredArticle.author.name}</span>
                    <span className="mx-2">•</span>
                    <span>
                      {new Date(featuredArticle.date).toLocaleDateString(
                        lang === 'hi' ? 'hi-IN' : 'en-US',
                        { month: 'long', day: 'numeric', year: 'numeric' }
                      )}
                    </span>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Side Articles */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            {latestArticles.slice(0, 3).map((article) => (
              <Link
                href={`/${lang}/article/${article.slug}`}
                key={article.id}
                className="group flex gap-4 bg-white p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="relative w-28 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold font-serif text-sm md:text-base leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h3>
                  <div className="text-xs text-gray-500 flex items-center">
                    <span>
                      {new Date(article.date).toLocaleDateString(
                        lang === 'hi' ? 'hi-IN' : 'en-US',
                        { month: 'short', day: 'numeric' }
                      )}
                    </span>
                    <span className="mx-1.5">•</span>
                    <span>{article.readTime} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED JHARKHAND REGIONAL BUREAU HUB (Garhwa, Daltonganj, Palamu, Ranchi) */}
      <section className="bg-gradient-to-br from-emerald-950 via-gray-900 to-emerald-900 py-14 text-white mb-14">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-emerald-800/60 gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-xs mb-2">
                <MapPin size={16} />
                <span>{isHindi ? 'झारखंड क्षेत्रीय नेटवर्क' : 'Jharkhand Regional Bureaus'}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif">
                {isHindi
                  ? 'गढ़वा • डाल्टनगंज • पलामू • राँची'
                  : 'Garhwa • Daltonganj • Palamu • Ranchi'}
              </h2>
              <p className="text-emerald-200/80 text-sm mt-1 max-w-2xl">
                {isHindi
                  ? 'पलामू प्रमंडल और राजधानी राँची की ज़मीनी रिपोर्टिंग, प्रशासनिक फैसले, अपराध और जनहित के मुद्दे।'
                  : 'Live ground reporting, governance, local administration, and civic developments from across Western Jharkhand and the capital.'}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/${lang}/category/garhwa`}
                className="bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
              >
                {isHindi ? 'गढ़वा' : 'Garhwa'}
              </Link>
              <Link
                href={`/${lang}/category/daltonganj`}
                className="bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
              >
                {isHindi ? 'डाल्टनगंज' : 'Daltonganj'}
              </Link>
              <Link
                href={`/${lang}/category/palamu`}
                className="bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
              >
                {isHindi ? 'पलामू' : 'Palamu'}
              </Link>
              <Link
                href={`/${lang}/category/ranchi`}
                className="bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
              >
                {isHindi ? 'राँची' : 'Ranchi'}
              </Link>
            </div>
          </div>

          {/* 4 City Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalCities.map((city) => (
              <div
                key={city.id}
                className="bg-white/5 rounded-xl border border-emerald-700/30 overflow-hidden flex flex-col justify-between"
              >
                {/* City Header */}
                <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white">{city.name}</h3>
                    <span className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">
                      {city.tag}
                    </span>
                  </div>
                  <Link
                    href={`/${lang}/category/${city.slug}`}
                    className="text-xs text-emerald-300 hover:text-white flex items-center gap-1 font-semibold"
                  >
                    <span>{isHindi ? 'सभी' : 'All'}</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>

                {/* City Articles List */}
                <div className="p-4 space-y-4 flex-1">
                  {city.articles.map((art) => (
                    <Link
                      key={art.id}
                      href={`/${lang}/article/${art.slug}`}
                      className="group block pb-3 border-b border-white/5 last:border-0 last:pb-0"
                    >
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-2">
                        <Image
                          src={art.imageUrl}
                          alt={art.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-serif text-xs md:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                        {art.title}
                      </h4>
                      <p className="text-[11px] text-emerald-200/60 mt-1 line-clamp-1">
                        {art.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* City Footer Link */}
                <div className="p-3 bg-white/5 border-t border-white/10 text-center">
                  <Link
                    href={`/${lang}/category/${city.slug}`}
                    className="text-xs font-bold text-emerald-300 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{isHindi ? `${city.name} की खबरें पढ़ें` : `Explore ${city.name}`}</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bright Books & Stationery Sponsored Feature Banner */}
      <BrightBooksBanner lang={validLang} />

      {/* Latest News & Trending Grid */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-end mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold font-serif relative">
              <span className="relative z-10">{dict.home.latestNews}</span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-primary/20 -z-10"></span>
              <span className="absolute -bottom-2.5 left-0 w-1/2 h-1 bg-primary"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Latest Articles List */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {latestArticles.slice(0, 6).map((article) => (
                  <ArticleCard key={article.id} article={article} lang={lang} />
                ))}
              </div>
            </div>

            {/* Trending Sidebar */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-xs">
                <h3 className="text-xl font-bold font-serif mb-6 relative pb-2 border-b-2 border-gray-200">
                  {dict.home.trendingNow}
                  <span className="absolute -bottom-0.5 left-0 w-12 h-0.5 bg-accent"></span>
                </h3>
                <div className="space-y-6">
                  {trendingArticles.map((article, index) => (
                    <Link
                      href={`/${lang}/article/${article.slug}`}
                      key={article.id}
                      className="flex gap-4 group"
                    >
                      <div className="text-3xl font-black text-gray-200 w-8 group-hover:text-primary transition-colors">
                        0{index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <span className="text-xs text-gray-500 mt-1 block">
                          {article.readTime} read
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar Ad: Bright Books & Stationery */}
              <div className="flex justify-center">
                <AdPlaceholder width={300} height={300} lang={validLang} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Business Section */}
      {renderCategorySection('Technology', techArticles)}
      {renderCategorySection('Business', businessArticles)}

      {/* Video Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-end mb-8 border-b-2 border-gray-800 pb-2">
            <h2 className="text-2xl font-bold font-serif relative">
              <span className="relative z-10">{dict.home.videoGallery}</span>
              <span className="absolute -bottom-2.5 left-0 w-12 h-1 bg-accent"></span>
            </h2>
            <a
              href="https://www.youtube.com/c/GreenLineNews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <span>Watch on YouTube (3.6L+ Subscribers)</span>
              <span>&rarr;</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((video) => (
              <a
                key={video.id}
                href="https://www.youtube.com/c/GreenLineNews"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block"
              >
                <div className="relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="bg-primary/90 text-white rounded-full p-4 transform group-hover:scale-110 transition-transform">
                      <PlayCircle size={36} />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Environment, Sports & Entertainment */}
      {renderCategorySection('Environment', environmentArticles)}
      {renderCategorySection('Sports', sportsArticles)}
      {renderCategorySection('Entertainment', entertainmentArticles)}
      {renderCategorySection(isHindi ? 'क्राइम व विशेष पड़ताल' : 'Crime & Special Investigation', crimeArticles)}
      {renderCategorySection(isHindi ? 'रिलेशनशिप व स्वास्थ्य' : 'Relationships & Health', relationshipArticles)}

      {/* Regional Authority Card */}
      <section className="container mx-auto px-4 max-w-7xl py-10">
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 text-emerald-800 font-bold uppercase tracking-wider text-xs mb-2">
            <Building2 size={16} />
            <span>{isHindi ? 'झारखंड मीडिया नेटवर्क' : 'Jharkhand Media Network'}</span>
          </div>
          <h2 className="text-xl font-bold font-serif text-emerald-950 mb-3">
            {isHindi
              ? 'Greenline News - गढ़वा, डाल्टनगंज, पलामू और राँची का विश्वसनीय न्यूज़ नेटवर्क'
              : 'About Greenline News - Garhwa, Daltonganj, Palamu & Ranchi News Agency'}
          </h2>
          <p className="text-emerald-900/80 text-sm leading-relaxed mb-4">
            {isHindi
              ? 'Greenline News (ग्रीनलाइन न्यूज़) झारखंड का प्रमुख स्वतंत्र डिजिटल मीडिया नेटवर्क है। हम गढ़वा समाचार (Garhwa News), डाल्टनगंज व मेदिनीनगर समाचार (Daltonganj News), पलामू समाचार (Palamu News) और राजधानी राँची की ताज़ा खबरें (Ranchi News) निष्पक्षता और ज़मीनी रिपोर्टिंग के साथ प्रस्तुत करते हैं। 3.6 लाख से अधिक यूट्यूब सब्सक्राइबर्स और 2.8 लाख से अधिक फेसबुक फॉलोअर्स के साथ यह क्षेत्र का सबसे तेजी से बढ़ता डिजिटल समाचार मंच है।'
              : 'Greenline News is the leading independent digital news network across Western Jharkhand and the state capital. Operating active reporting bureaus in Garhwa, Daltonganj (Medininagar), Palamu, and Ranchi, we bring timely, authentic, and unfiltered news to over 6 Lakh digital community followers.'}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-emerald-800 font-semibold pt-2 border-t border-emerald-200/60">
            <span className="text-gray-600 font-normal">{isHindi ? 'मुख्य ब्यूरो:' : 'Primary Bureaus:'}</span>
            <Link href={`/${lang}/category/garhwa`} className="hover:underline">
              {isHindi ? 'गढ़वा ब्यूरो' : 'Garhwa Bureau'}
            </Link>
            <span>•</span>
            <Link href={`/${lang}/category/daltonganj`} className="hover:underline">
              {isHindi ? 'डाल्टनगंज / मेदिनीनगर ब्यूरो' : 'Daltonganj (Medininagar) Bureau'}
            </Link>
            <span>•</span>
            <Link href={`/${lang}/category/palamu`} className="hover:underline">
              {isHindi ? 'पलामू प्रमंडल ब्यूरो' : 'Palamu Divisional Bureau'}
            </Link>
            <span>•</span>
            <Link href={`/${lang}/category/ranchi`} className="hover:underline">
              {isHindi ? 'राँची राजधानी ब्यूरो' : 'Ranchi Capital Bureau'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

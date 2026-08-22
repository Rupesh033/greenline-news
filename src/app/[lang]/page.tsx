import Link from 'next/link'
import Image from 'next/image'
import ArticleCard from '@/components/ArticleCard'
import { getArticles, getVideos, getCategories } from '@/lib/data'
import { getDictionary, ValidLocale } from '@/lib/dictionaries'
import { PlayCircle } from 'lucide-react'

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = lang as ValidLocale;
  const dict = await getDictionary(validLang);
  const articles = getArticles(validLang);
  const videos = getVideos(validLang);
  
  const featuredArticle = articles.find(a => a.featured)
  const latestArticles = articles.filter(a => !a.featured).slice(0, 8)
  const trendingArticles = articles.filter(a => a.trending).slice(0, 5)

  // Get specific category articles
  const techArticles = articles.filter(a => a.categoryId === 'c5').slice(0, 4)
  const businessArticles = articles.filter(a => a.categoryId === 'c4').slice(0, 4)
  const sportsArticles = articles.filter(a => a.categoryId === 'c6').slice(0, 4)
  const entertainmentArticles = articles.filter(a => a.categoryId === 'c7').slice(0, 4)
  const environmentArticles = articles.filter(a => a.categoryId === 'c8').slice(0, 4)

  const renderCategorySection = (title: string, categoryArticles: typeof articles) => {
    if (categoryArticles.length === 0) return null;
    const cat = getCategories(validLang).find(c => c.id === categoryArticles[0].categoryId);
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
              <Link href={`/${lang}/category/${catSlug}`} className="text-sm font-semibold text-primary hover:text-green-700 transition-colors">
                {dict.home.viewAllLatest || "View All"} &rarr;
              </Link>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryArticles.map(article => (
              <ArticleCard key={article.id} article={article} lang={validLang} layout="compact" />
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4 max-w-7xl mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Featured */}
          <div className="lg:col-span-8">
            {featuredArticle && (
              <Link href={`/${lang}/article/${featuredArticle.slug}`} className="group block relative rounded-xl overflow-hidden h-[400px] md:h-[500px] shadow-lg">
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
                  <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight group-hover:text-green-300 transition-colors">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-gray-200 text-base md:text-lg mb-4 line-clamp-2 max-w-3xl">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-gray-300 text-sm">
                    <span className="font-medium text-white">{featuredArticle.author.name}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(featuredArticle.date).toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Side Articles */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            {latestArticles.slice(0, 3).map((article) => (
              <Link href={`/${lang}/article/${article.slug}`} key={article.id} className="group flex gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative w-28 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image 
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif font-bold text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h3>
                  <div className="text-xs text-gray-500">
                    {new Date(article.date).toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Trending Grid */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-end mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold font-serif relative">
              <span className="relative z-10">{dict.home.latestNews}</span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-primary/20 -z-10"></span>
              <span className="absolute -bottom-2.5 left-0 w-1/2 h-1 bg-primary"></span>
            </h2>
            <Link href={`/${lang}/search`} className="text-sm font-semibold text-primary hover:text-green-700 transition-colors">
              {dict.home.viewAllLatest} &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {latestArticles.slice(0, 6).map((article) => (
                  <ArticleCard key={article.id} article={article} lang={lang} />
                ))}
              </div>
            </div>
            
            {/* Trending Sidebar */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold font-serif mb-6 relative pb-2 border-b-2 border-gray-200">
                  {dict.home.trendingNow}
                  <span className="absolute -bottom-0.5 left-0 w-12 h-0.5 bg-accent"></span>
                </h3>
                <div className="space-y-6">
                  {trendingArticles.map((article, index) => (
                    <Link href={`/${lang}/article/${article.slug}`} key={article.id} className="flex gap-4 group">
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
              
              {/* Sidebar Ad */}
              <div className="bg-gray-100 text-gray-400 border border-gray-200 rounded-xl w-full h-[300px] flex items-center justify-center shadow-inner text-sm">
                Advertisement - 300x300
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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map(video => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden mb-4">
                  <Image src={video.thumbnailUrl} alt={video.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="bg-primary/90 text-white rounded-full p-4 transform group-hover:scale-110 transition-transform">
                      <PlayCircle size={36} />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment, Sports & Entertainment */}
      {renderCategorySection('Environment', environmentArticles)}
      {renderCategorySection('Sports', sportsArticles)}
      {renderCategorySection('Entertainment', entertainmentArticles)}
    </div>
  )
}

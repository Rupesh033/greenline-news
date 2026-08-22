import { getCategoryBySlug, getArticlesByCategory } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import NewsletterBox from '@/components/NewsletterBox';
import { notFound } from 'next/navigation';

export default async function CategoryPage({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const { lang, slug } = await params;
  const category = getCategoryBySlug(slug, lang);
  
  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category.id, lang);

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-8 border-b-2 border-gray-200 pb-4">
            <h1 className="text-4xl font-bold font-serif mb-2">{category.name}</h1>
            <p className="text-gray-600">Latest news, updates, and analysis on {category.name.toLowerCase()}.</p>
          </div>
          
          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryArticles.map(article => (
                <ArticleCard key={article.id} article={article} lang={lang} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-100">
              <p className="text-lg text-gray-500 font-medium">No articles found in this category yet.</p>
            </div>
          )}
          
          {/* Pagination (dummy) */}
          {categoryArticles.length > 0 && (
            <div className="mt-12 flex justify-center">
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2 px-8 rounded transition-colors">
                Load More
              </button>
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

'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import { searchArticles, Article } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import { Search } from 'lucide-react';
import { Suspense } from 'react';

function SearchContent() {
  const searchParams = useSearchParams();
  const params = useParams();
  const lang = (params?.lang as string) || 'en';
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Article[]>([]);
  const [hasSearched, setHasSearched] = useState(!!initialQuery);

  useEffect(() => {
    if (initialQuery) {
      setResults(searchArticles(initialQuery, lang));
    }
  }, [initialQuery, lang]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setResults(searchArticles(query, lang));
      setHasSearched(true);
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold font-serif mb-6">Search Greenline News</h1>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for articles, news, or topics..."
            className="w-full pl-6 pr-14 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:border-primary text-lg"
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-green-700 text-white rounded-full p-3 transition-colors flex items-center justify-center"
          >
            <Search size={20} />
          </button>
        </form>

        <div className="flex flex-wrap justify-center items-center gap-2 mt-4 text-xs">
          <span className="text-gray-500 font-medium">Popular:</span>
          {['Garhwa', 'Greenline', 'Viral', 'Jharkhand', 'Politics', 'Sports'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setQuery(tag);
                setResults(searchArticles(tag, lang));
                setHasSearched(true);
              }}
              className="bg-gray-100 hover:bg-emerald-100 hover:text-emerald-800 text-gray-700 font-medium px-3 py-1 rounded-full transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {hasSearched && (
        <div>
          <h2 className="text-xl font-bold mb-8 border-b pb-2">
            {results.length} Result{results.length !== 1 ? 's' : ''} for "{query}"
          </h2>
          
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map(article => (
                <ArticleCard key={article.id} article={article} layout="list" lang={lang} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-12 text-center border border-gray-100 max-w-2xl mx-auto">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500">We couldn't find any articles matching your search. Please try using different keywords.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-20 text-center">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}

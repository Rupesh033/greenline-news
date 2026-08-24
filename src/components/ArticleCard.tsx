import Link from 'next/link';
import Image from 'next/image';
import { Article, getCategoryById } from '@/lib/data';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  layout?: 'grid' | 'list' | 'hero' | 'compact';
  lang: string;
}

export default function ArticleCard({ article, layout = 'grid', lang }: ArticleCardProps) {
  const category = getCategoryById(article.categoryId, lang) || { name: 'News', slug: 'news' };
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  if (layout === 'hero') {
    return (
      <div className="group relative overflow-hidden rounded-xl shadow-md bg-white w-full h-full min-h-[400px] flex flex-col justify-end">
        <Image 
          src={article.imageUrl} 
          alt={article.title} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="relative z-10 p-6 md:p-8">
          <Link href={`/${lang}/category/${category.slug}`}>
            <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-4 hover:bg-green-700 transition-colors">
              {category.name}
            </span>
          </Link>
          <Link href={`/${lang}/article/${article.slug}`}>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3 hover:text-accent transition-colors leading-tight">
              {article.title}
            </h2>
          </Link>
          <p className="text-gray-200 line-clamp-2 mb-4 max-w-2xl text-sm md:text-base">
            {article.excerpt}
          </p>
          <div className="flex items-center text-xs text-gray-300 font-medium space-x-4">
            <div className="flex items-center">
              <img src={article.author.avatarUrl} alt={article.author.name} className="w-6 h-6 rounded-full mr-2 object-cover" />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center">
              <Clock size={12} className="mr-1" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (layout === 'list') {
    return (
      <div className="group flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white rounded-lg hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 p-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-md overflow-hidden flex-shrink-0">
          <Image 
            src={article.imageUrl} 
            alt={article.title} 
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Link href={`/${lang}/category/${category.slug}`}>
            <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm z-10">
              {category.name}
            </span>
          </Link>
        </div>
        <div className="flex flex-col justify-center py-1 flex-1">
          <Link href={`/${lang}/article/${article.slug}`}>
            <h3 className="text-lg md:text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3 hidden sm:block">
            {article.excerpt}
          </p>
          <div className="flex items-center text-xs text-gray-500 mt-auto">
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime} read</span>
          </div>
        </div>
      </div>
    );
  }

  if (layout === 'compact') {
    return (
      <div className="group flex items-start gap-4">
        <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
          <Image 
            src={article.imageUrl} 
            alt={article.title} 
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <Link href={`/${lang}/category/${category.slug}`}>
            <span className="text-primary text-[10px] font-bold uppercase tracking-wider block mb-1">
              {category.name}
            </span>
          </Link>
          <Link href={`/${lang}/article/${article.slug}`}>
            <h4 className="text-sm font-serif font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
              {article.title}
            </h4>
          </Link>
          <span className="text-xs text-gray-500">{formattedDate}</span>
        </div>
      </div>
    );
  }

  // Default Grid Layout
  return (
    <div className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image 
          src={article.imageUrl} 
          alt={article.title} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Link href={`/${lang}/category/${category.slug}`}>
          <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm z-10 hover:bg-green-700 transition-colors">
            {category.name}
          </span>
        </Link>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/${lang}/article/${article.slug}`}>
          <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-50 mt-auto">
          <div className="flex items-center">
            <span className="font-medium text-gray-700 mr-2">{article.author.name}</span>
          </div>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}


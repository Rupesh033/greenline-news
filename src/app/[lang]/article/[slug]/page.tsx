import { getArticleBySlug, getCategoryBySlug, getArticlesByCategory } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Share2, Link as LinkIcon, MessageSquare } from 'lucide-react';
import AdPlaceholder from '@/components/AdPlaceholder';
import NewsletterBox from '@/components/NewsletterBox';
import ArticleCard from '@/components/ArticleCard';

export default async function ArticlePage({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const { lang, slug } = await params;
  const article = getArticleBySlug(slug, lang);
  
  if (!article) {
    notFound();
  }

  const category = getCategoryBySlug(article.categoryId, lang) || { name: 'News', slug: 'news' };
  const relatedArticles = getArticlesByCategory(article.categoryId, lang).filter(a => a.id !== article.id).slice(0, 3);
  
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 max-w-7xl py-8">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}/category/${category.slug}`} className="hover:text-primary">{category.name}</Link>
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
              <p className="text-xl text-gray-600 mb-6 font-serif italic">
                {article.excerpt}
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between border-y border-gray-100 py-4 gap-4">
                <div className="flex items-center">
                  <Image src={article.author.avatarUrl} alt={article.author.name} width={48} height={48} className="rounded-full mr-4 object-cover" />
                  <div>
                    <div className="font-bold text-gray-900">{article.author.name}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{formattedDate}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center"><Clock size={14} className="mr-1" /> {article.readTime} read</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-gray-500 mr-2 flex items-center">
                    <Share2 size={16} className="mr-1" /> Share
                  </span>
                  <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold">
                    FB
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors text-xs font-bold">
                    X
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors text-xs font-bold">
                    IN
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <LinkIcon size={14} />
                  </button>
                </div>
              </div>
            </header>

            <figure className="mb-10">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden">
                <Image src={article.imageUrl} alt={article.title} fill className="object-cover" priority />
              </div>
              <figcaption className="text-sm text-gray-500 mt-3 text-center">Image representation of {article.title.toLowerCase()}</figcaption>
            </figure>

            <div 
              className="prose prose-lg max-w-none mb-12 prose-a:text-primary hover:prose-a:text-green-700 prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12 border-t border-gray-100 pt-8">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium hover:bg-gray-200 cursor-pointer">#{category.name}</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium hover:bg-gray-200 cursor-pointer">#News</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium hover:bg-gray-200 cursor-pointer">#Update</span>
            </div>

            {/* Author Bio Box */}
            <div className="bg-secondary/50 rounded-xl p-8 mb-12 flex flex-col md:flex-row items-center md:items-start gap-6">
              <Image src={article.author.avatarUrl} alt={article.author.name} width={100} height={100} className="rounded-full object-cover shadow-sm" />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold font-serif mb-2">About {article.author.name}</h3>
                <p className="text-gray-600 mb-4">
                  {article.author.name} is a senior correspondent at Greenline News covering {category.name.toLowerCase()} and related global events.
                </p>
                <Link href="#" className="text-primary font-semibold text-sm hover:underline">View all articles by {article.author.name}</Link>
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
                  <button type="button" className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors">
                    Post Comment
                  </button>
                </div>
              </form>

              {/* Comment List */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-gray-500">JD</div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="font-bold text-gray-900 mr-2">John Doe</span>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-gray-700">Excellent reporting on this issue. It's crucial that we stay informed about these developments.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-gray-500">AS</div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="font-bold text-gray-900 mr-2">Alice Smith</span>
                      <span className="text-xs text-gray-500">5 hours ago</span>
                    </div>
                    <p className="text-gray-700">I wonder how this will affect the local communities in the long run. Would love to see a follow-up article.</p>
                  </div>
                </div>
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="flex justify-center">
              <AdPlaceholder width={300} height={250} />
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold font-serif mb-6 relative pb-2 border-b-2 border-gray-100">
                Related Articles
                <span className="absolute -bottom-0.5 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <div className="flex flex-col space-y-6">
                {relatedArticles.map(article => (
                  <ArticleCard key={article.id} article={article} lang={lang} layout="compact" />
                ))}
              </div>
            </div>

            <NewsletterBox mini />
            
            <div className="flex justify-center sticky top-24">
              <AdPlaceholder width={300} height={600} />
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

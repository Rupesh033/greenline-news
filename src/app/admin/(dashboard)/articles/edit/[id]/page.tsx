'use client';
import { useRouter, useParams } from 'next/navigation';
import { useAdminArticles, AdminArticle } from '@/store/adminArticles';
import ArticleForm from '@/components/admin/ArticleForm';
import { useEffect, useState } from 'react';

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const { articles, updateArticle } = useAdminArticles();
  const [article, setArticle] = useState<AdminArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = params.id as string;
    const found = articles.find(a => a.id === id);
    if (found) {
      setArticle(found);
    } else {
      router.push('/admin/articles');
    }
    setLoading(false);
  }, [params.id, articles, router]);

  const handleSave = (articleData: Partial<AdminArticle>, status: 'draft' | 'published') => {
    if (article) {
      updateArticle(article.id, { ...articleData, status });
      router.push('/admin/articles');
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading...</div>;
  if (!article) return null;

  return <ArticleForm initialData={article} onSave={handleSave} />;
}

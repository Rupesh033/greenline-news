'use client';
import { useRouter } from 'next/navigation';
import { useAdminArticles, AdminArticle } from '@/store/adminArticles';
import ArticleForm from '@/components/admin/ArticleForm';

export default function NewArticlePage() {
  const router = useRouter();
  const { addArticle } = useAdminArticles();

  const handleSave = (articleData: Partial<AdminArticle>, status: 'draft' | 'published') => {
    const newArticle = {
      ...articleData,
      id: `a${Date.now()}`,
      views: 0,
    } as AdminArticle;

    addArticle(newArticle);
    router.push('/admin/articles');
  };

  return <ArticleForm onSave={handleSave} />;
}

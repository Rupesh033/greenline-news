import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Article } from '@/lib/data'; // The front-end type

export interface AdminArticle extends Article {
  status: 'published' | 'draft' | 'scheduled';
  tags: string[];
  commentsEnabled: boolean;
  views: number;
}

interface AdminArticleStore {
  articles: AdminArticle[];
  setArticles: (articles: AdminArticle[]) => void;
  addArticle: (article: AdminArticle) => void;
  updateArticle: (id: string, article: Partial<AdminArticle>) => void;
  deleteArticle: (id: string) => void;
  bulkDelete: (ids: string[]) => void;
  bulkUpdateStatus: (ids: string[], status: AdminArticle['status']) => void;
}

const INITIAL_ARTICLES: AdminArticle[] = [
  {
    id: 'a1',
    title: 'Climate Change Impact on Coastal Cities',
    slug: 'climate-change-impact',
    categoryId: 'c8',
    imageUrl: 'https://images.unsplash.com/photo-1569060368645-423ef454558e?w=800&q=80',
    author: { name: 'Super Admin', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
    date: '2026-08-22T10:00:00Z',
    readTime: '5 min',
    featured: true,
    trending: true,
    status: 'published',
    tags: ['climate', 'environment', 'cities'],
    commentsEnabled: true,
    views: 12450,
    excerpt: 'Rising sea levels are threatening major coastal cities around the world.',
    content: '<p>Rising sea levels are threatening major coastal cities...</p>'
  },
  {
    id: 'a2',
    title: 'Tech Giants Announce AI Ethics Board',
    slug: 'tech-giants-ai-ethics',
    categoryId: 'c5',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    author: { name: 'Editor Jane', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    date: '2026-08-21T14:30:00Z',
    readTime: '4 min',
    featured: false,
    trending: true,
    status: 'published',
    tags: ['tech', 'ai', 'ethics'],
    commentsEnabled: true,
    views: 8900,
    excerpt: 'Major technology companies have come together to form an independent board.',
    content: '<p>Major technology companies...</p>'
  },
  {
    id: 'a3',
    title: 'Draft: 2027 Election Predictions',
    slug: '2027-election-predictions',
    categoryId: 'c3',
    imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80',
    author: { name: 'Author John', avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026702d' },
    date: '2026-08-25T10:00:00Z',
    readTime: '6 min',
    featured: false,
    trending: false,
    status: 'draft',
    tags: ['politics', 'elections'],
    commentsEnabled: false,
    views: 0,
    excerpt: 'Early predictions for the upcoming national elections show surprising trends.',
    content: '<p>Early predictions...</p>'
  }
];

export const useAdminArticles = create<AdminArticleStore>()(
  persist(
    (set) => ({
      articles: INITIAL_ARTICLES,
      setArticles: (articles) => set({ articles }),
      addArticle: (article) => set((state) => ({ articles: [article, ...state.articles] })),
      updateArticle: (id, data) => set((state) => ({
        articles: state.articles.map(a => a.id === id ? { ...a, ...data } : a)
      })),
      deleteArticle: (id) => set((state) => ({
        articles: state.articles.filter(a => a.id !== id)
      })),
      bulkDelete: (ids) => set((state) => ({
        articles: state.articles.filter(a => !ids.includes(a.id))
      })),
      bulkUpdateStatus: (ids, status) => set((state) => ({
        articles: state.articles.map(a => ids.includes(a.id) ? { ...a, status } : a)
      }))
    }),
    {
      name: 'greenline-admin-articles',
    }
  )
);

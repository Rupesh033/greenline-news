import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MediaItem {
  id: string;
  url: string;
  name: string;
  date: string;
}

interface AdminMediaStore {
  media: MediaItem[];
  addMedia: (item: MediaItem) => void;
  deleteMedia: (id: string) => void;
}

const INITIAL_MEDIA: MediaItem[] = [
  { id: 'm1', url: 'https://images.unsplash.com/photo-1569060368645-423ef454558e?w=800&q=80', name: 'coastal-city.jpg', date: new Date().toISOString() },
  { id: 'm2', url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80', name: 'ai-ethics.jpg', date: new Date().toISOString() },
  { id: 'm3', url: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80', name: 'election-voting.jpg', date: new Date().toISOString() },
  { id: 'm4', url: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80', name: 'breaking-news.jpg', date: new Date().toISOString() },
];

export const useAdminMedia = create<AdminMediaStore>()(
  persist(
    (set) => ({
      media: INITIAL_MEDIA,
      addMedia: (item) => set((state) => ({ media: [item, ...state.media] })),
      deleteMedia: (id) => set((state) => ({
        media: state.media.filter(m => m.id !== id)
      })),
    }),
    {
      name: 'greenline-admin-media',
    }
  )
);

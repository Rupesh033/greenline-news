import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Role = 'admin' | 'editor' | 'author'

export interface AdminUser {
  id: string
  name: string
  email: string
  role: Role
  avatarUrl: string
}

interface AdminAuthStore {
  user: AdminUser | null
  login: (user: AdminUser) => void
  logout: () => void
}

export const useAdminAuth = create<AdminAuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'greenline-admin-auth',
    }
  )
)

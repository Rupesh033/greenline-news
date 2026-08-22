'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth, AdminUser } from '@/store/adminAuth';
import { Leaf } from 'lucide-react';

const DEMO_USERS: Record<string, AdminUser & { password?: string }> = {
  'admin@greenline.com': { id: 'u1', name: 'Super Admin', email: 'admin@greenline.com', role: 'admin', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d', password: 'admin123' },
  'editor@greenline.com': { id: 'u2', name: 'Editor Jane', email: 'editor@greenline.com', role: 'editor', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', password: 'editor123' },
  'author@greenline.com': { id: 'u3', name: 'Author John', email: 'author@greenline.com', role: 'author', avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026702d', password: 'author123' }
};

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useAdminAuth((state) => state.login);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const user = DEMO_USERS[email];
    if (user && user.password === password) {
      const { password: _, ...userWithoutPassword } = user;
      login(userWithoutPassword);
      router.push('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center text-primary mb-2">
            <Leaf size={32} className="mr-2" />
            <span className="font-bold text-2xl font-serif">Greenline</span>
            <span className="text-gray-900 font-bold text-2xl font-serif ml-1">Admin</span>
          </div>
          <p className="text-gray-500 text-sm">Please sign in to continue</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="admin@greenline.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors mt-2"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-500 font-semibold mb-2 uppercase">Demo Credentials:</p>
          <div className="text-xs text-gray-600 space-y-1">
            <div className="flex justify-between bg-gray-50 p-2 rounded">
              <span>Admin:</span> <span className="font-mono">admin@greenline.com / admin123</span>
            </div>
            <div className="flex justify-between bg-gray-50 p-2 rounded">
              <span>Editor:</span> <span className="font-mono">editor@greenline.com / editor123</span>
            </div>
            <div className="flex justify-between bg-gray-50 p-2 rounded">
              <span>Author:</span> <span className="font-mono">author@greenline.com / author123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

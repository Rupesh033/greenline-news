'use client';
import { useAdminAuth } from '@/store/adminAuth';

export default function MockAdminPage({ title, description }: { title: string, description: string }) {
  const { user } = useAdminAuth();

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
        <button className="bg-primary hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Add New {title.replace(/s$/, '')}
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden p-8 text-center">
        <h3 className="text-xl font-bold text-gray-700 mb-2">Coming Soon</h3>
        <p className="text-gray-500">The {title} management module is under construction.</p>
        <p className="text-gray-400 text-sm mt-4">You are logged in as {user.name} ({user.role})</p>
      </div>
    </div>
  );
}

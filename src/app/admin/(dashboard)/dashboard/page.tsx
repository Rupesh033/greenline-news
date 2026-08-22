'use client';
import { useAdminArticles } from '@/store/adminArticles';
import { useAdminAuth } from '@/store/adminAuth';
import { 
  FileText, 
  TrendingUp, 
  MessageSquare, 
  Layers, 
  Eye, 
  Clock, 
  CheckCircle2, 
  Edit3
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useAdminAuth();
  const { articles } = useAdminArticles();

  if (!user) return null;

  const publishedArticles = articles.filter(a => a.status === 'published');
  const drafts = articles.filter(a => a.status === 'draft');
  const totalViews = publishedArticles.reduce((acc, curr) => acc + (curr.views || 0), 0);

  const stats = [
    { label: 'Total Articles', value: articles.length, icon: FileText, color: 'bg-blue-50 text-blue-600' },
    { label: 'Published', value: publishedArticles.length, icon: CheckCircle2, color: 'bg-green-50 text-green-600' },
    { label: 'Drafts', value: drafts.length, icon: Edit3, color: 'bg-amber-50 text-amber-600' },
    { label: 'Total Views', value: totalViews.toLocaleString(), icon: Eye, color: 'bg-purple-50 text-purple-600' },
    { label: 'Categories', value: 10, icon: Layers, color: 'bg-indigo-50 text-indigo-600' },
    { label: 'Pending Comments', value: 12, icon: MessageSquare, color: 'bg-rose-50 text-rose-600' },
  ];

  const recentArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}</h2>
          <p className="text-gray-500">Here's what's happening with Greenline News today.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/articles/new" className="bg-primary hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
            <Edit3 size={18} className="mr-2" />
            Write Article
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Articles */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-lg">Recent Articles</h3>
            <Link href="/admin/articles" className="text-primary text-sm font-medium hover:underline">View All</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-medium">Title</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Date</th>
                  <th className="p-4 font-medium">Views</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentArticles.map(article => (
                  <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={article.imageUrl} alt="" className="w-10 h-10 rounded object-cover" />
                        <div>
                          <p className="font-medium text-gray-900 line-clamp-1">{article.title}</p>
                          <p className="text-xs text-gray-500">{article.author.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium capitalize ${
                        article.status === 'published' ? 'bg-green-100 text-green-700' : 
                        article.status === 'draft' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {article.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {new Date(article.date).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {article.views?.toLocaleString() || 0}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions & Comments */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-bold text-lg mb-4">Pending Comments</h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-gray-500 text-xs">U{i}</div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">User {i}</p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">This is a great article, thanks for sharing this information...</p>
                    <div className="flex gap-2 mt-2">
                      <button className="text-xs text-green-600 hover:underline">Approve</button>
                      <button className="text-xs text-red-600 hover:underline">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

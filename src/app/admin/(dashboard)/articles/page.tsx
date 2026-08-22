'use client';
import { useState } from 'react';
import { useAdminArticles } from '@/store/adminArticles';
import { useAdminAuth } from '@/store/adminAuth';
import Link from 'next/link';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye,
  Check
} from 'lucide-react';

export default function ArticlesPage() {
  const { articles, deleteArticle, bulkDelete, bulkUpdateStatus } = useAdminArticles();
  const { user } = useAdminAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Filter based on role (author can only see their own)
  const roleFilteredArticles = user?.role === 'author' 
    ? articles.filter(a => a.author.name === user.name) 
    : articles;

  const filteredArticles = roleFilteredArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || article.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredArticles.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredArticles.map(a => a.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleBulkDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedIds.length} articles?`)) {
      bulkDelete(selectedIds);
      setSelectedIds([]);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deleteArticle(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Articles</h2>
          <p className="text-gray-500">Manage your news articles and publications.</p>
        </div>
        <Link href="/admin/articles/new" className="bg-primary hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
          <Plus size={20} className="mr-2" />
          New Article
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full md:w-64 transition-all"
              />
            </div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>

          {selectedIds.length > 0 && (
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium text-green-800 mr-2">{selectedIds.length} selected</span>
              <button 
                onClick={() => bulkUpdateStatus(selectedIds, 'published')}
                className="text-xs bg-white text-green-700 border border-green-200 hover:bg-green-100 px-3 py-1.5 rounded transition-colors"
              >
                Publish
              </button>
              <button 
                onClick={() => bulkUpdateStatus(selectedIds, 'draft')}
                className="text-xs bg-white text-amber-700 border border-amber-200 hover:bg-amber-100 px-3 py-1.5 rounded transition-colors"
              >
                Draft
              </button>
              <button 
                onClick={handleBulkDelete}
                className="text-xs bg-white text-red-600 border border-red-200 hover:bg-red-50 px-3 py-1.5 rounded transition-colors ml-1"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="p-4 w-12">
                  <input 
                    type="checkbox" 
                    checked={filteredArticles.length > 0 && selectedIds.length === filteredArticles.length}
                    onChange={toggleSelectAll}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </th>
                <th className="p-4 font-medium">Article</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredArticles.length > 0 ? filteredArticles.map(article => (
                <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <input 
                      type="checkbox" 
                      checked={selectedIds.includes(article.id)}
                      onChange={() => toggleSelect(article.id)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded object-cover flex-shrink-0 bg-gray-100 overflow-hidden relative">
                        <img src={article.imageUrl} alt="" className="w-full h-full object-cover" />
                        {article.featured && (
                          <div className="absolute bottom-0 left-0 right-0 bg-accent text-gray-900 text-[8px] font-bold text-center uppercase">Featured</div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 line-clamp-1">{article.title}</p>
                        <p className="text-xs text-gray-500">By {article.author.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded capitalize">{article.categoryId.replace('c', 'Category ')}</span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium capitalize ${
                      article.status === 'published' ? 'bg-green-100 text-green-700' : 
                      article.status === 'draft' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {article.status === 'published' && <Check size={12} className="mr-1" />}
                      {article.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {new Date(article.date).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2 text-gray-400">
                      <button className="p-1 hover:text-blue-600 transition-colors" title="View">
                        <Eye size={18} />
                      </button>
                      <Link href={`/admin/articles/edit/${article.id}`} className="p-1 hover:text-green-600 transition-colors" title="Edit">
                        <Edit size={18} />
                      </Link>
                      <button onClick={() => handleDelete(article.id)} className="p-1 hover:text-red-600 transition-colors" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    No articles found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <div>Showing {filteredArticles.length} articles</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

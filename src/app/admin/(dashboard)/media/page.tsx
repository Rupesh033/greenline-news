'use client';
import { useState } from 'react';
import { useAdminMedia } from '@/store/adminMedia';
import { Trash2, Upload, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';

export default function MediaPage() {
  const { media, addMedia, deleteMedia } = useAdminMedia();
  const [newUrl, setNewUrl] = useState('');

  const handleAddUrl = () => {
    if (!newUrl) return;
    const item = {
      id: `m${Date.now()}`,
      url: newUrl,
      name: newUrl.split('/').pop() || 'image.jpg',
      date: new Date().toISOString(),
    };
    addMedia(item);
    setNewUrl('');
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      deleteMedia(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Media Library</h2>
          <p className="text-gray-500">Manage your images and assets.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">Add Image by URL</label>
          <div className="relative">
            <LinkIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="url" 
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full"
            />
          </div>
        </div>
        <button 
          onClick={handleAddUrl}
          className="bg-primary hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
        >
          Add Image
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {media.map((item) => (
          <div key={item.id} className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-square flex items-center justify-center">
            <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
              <div className="text-right">
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div>
                <p className="text-white text-xs truncate" title={item.name}>{item.name}</p>
                <p className="text-gray-300 text-[10px]">{new Date(item.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}

        {media.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-500 border-2 border-dashed border-gray-200 rounded-xl">
            <ImageIcon size={48} className="mx-auto mb-3 text-gray-300" />
            <p>No media found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

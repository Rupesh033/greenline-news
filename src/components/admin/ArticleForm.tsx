'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AdminArticle } from '@/store/adminArticles';
import { useAdminAuth } from '@/store/adminAuth';
import Link from 'next/link';
import { ArrowLeft, Save, Send, Image as ImageIcon, Calendar } from 'lucide-react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import MediaPickerModal from './MediaPickerModal';

interface ArticleFormProps {
  initialData?: AdminArticle;
  onSave: (article: Partial<AdminArticle>, status: 'draft' | 'published') => void;
}

export default function ArticleForm({ initialData, onSave }: ArticleFormProps) {
  const router = useRouter();
  const { user } = useAdminAuth();

  const [title, setTitle] = useState(initialData?.title || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [categoryId, setCategoryId] = useState(initialData?.categoryId || 'c1');
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || '');
  const [tags, setTags] = useState(initialData?.tags?.join(', ') || '');
  const [featured, setFeatured] = useState(initialData?.featured || false);
  const [commentsEnabled, setCommentsEnabled] = useState(initialData?.commentsEnabled ?? true);
  
  // Date state
  const getInitialDate = () => {
    if (initialData?.date) {
      const d = new Date(initialData.date);
      // Format to YYYY-MM-DDThh:mm for datetime-local input
      return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    }
    const d = new Date();
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  };
  const [publishDate, setPublishDate] = useState(getInitialDate());

  // Media Picker state
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [mediaTarget, setMediaTarget] = useState<'featured' | 'editor'>('featured');

  const editor = useEditor({
    extensions: [StarterKit, ImageExtension],
    content: initialData?.content || '<p>Write your article content here...</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-green max-w-none focus:outline-none min-h-[400px]',
      },
    },
  });

  const handleSave = (status: 'draft' | 'published') => {
    if (!title) {
      alert('Title is required');
      return;
    }

    const isoDate = new Date(publishDate).toISOString();
    
    onSave({
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      excerpt,
      content: editor?.getHTML() || '',
      categoryId,
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80',
      author: initialData?.author || { name: user?.name || 'Admin', avatarUrl: user?.avatarUrl || '' },
      date: isoDate,
      featured,
      status,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      commentsEnabled,
    }, status);
  };

  const openMediaPicker = (target: 'featured' | 'editor') => {
    setMediaTarget(target);
    setIsMediaModalOpen(true);
  };

  const handleMediaSelect = (url: string) => {
    if (mediaTarget === 'featured') {
      setImageUrl(url);
    } else if (mediaTarget === 'editor') {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <>
      <MediaPickerModal 
        isOpen={isMediaModalOpen} 
        onClose={() => setIsMediaModalOpen(false)} 
        onSelect={handleMediaSelect} 
      />

      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link href="/admin/articles" className="mr-4 p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-500">
              <ArrowLeft size={20} />
            </Link>
            <h2 className="text-2xl font-bold text-gray-900">
              {initialData ? 'Edit Article' : 'Create New Article'}
            </h2>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => handleSave('draft')}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center"
            >
              <Save size={18} className="mr-2" />
              {initialData?.status === 'draft' ? 'Update Draft' : 'Save Draft'}
            </button>
            <button 
              onClick={() => handleSave('published')}
              className="px-4 py-2 bg-primary border border-primary rounded-lg text-white font-medium hover:bg-green-700 transition-colors flex items-center"
            >
              <Send size={18} className="mr-2" />
              {initialData?.status === 'published' ? 'Update & Publish' : 'Publish'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Editor Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Article Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title here"
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-serif"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Short Excerpt</label>
                <textarea 
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="A brief summary of the article..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                />
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {/* TipTap Toolbar */}
                <div className="bg-gray-50 border-b border-gray-200 p-2 flex flex-wrap gap-1 sticky top-0 z-10">
                  <button onClick={() => editor?.chain().focus().toggleBold().run()} className={`p-2 rounded ${editor?.isActive('bold') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}><span className="font-bold">B</span></button>
                  <button onClick={() => editor?.chain().focus().toggleItalic().run()} className={`p-2 rounded ${editor?.isActive('italic') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}><span className="italic">I</span></button>
                  <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} className={`p-2 rounded font-bold ${editor?.isActive('heading', { level: 2 }) ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>H2</button>
                  <button onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} className={`p-2 rounded font-bold ${editor?.isActive('heading', { level: 3 }) ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>H3</button>
                  <button onClick={() => editor?.chain().focus().toggleBulletList().run()} className={`p-2 rounded font-bold ${editor?.isActive('bulletList') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>• List</button>
                  <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
                  <button 
                    onClick={() => openMediaPicker('editor')} 
                    className="p-2 rounded hover:bg-gray-200 flex items-center text-primary font-medium"
                    title="Insert Image from Gallery"
                  >
                    <ImageIcon size={18} className="mr-1" /> Add Image
                  </button>
                </div>
                <div className="p-4 bg-white cursor-text" onClick={() => editor?.commands.focus()}>
                  <EditorContent editor={editor} />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Publishing</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Calendar size={16} className="mr-1" /> Date & Time
                  </label>
                  <input 
                    type="datetime-local" 
                    value={publishDate}
                    onChange={(e) => setPublishDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">Change to backdate or schedule in the future.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select 
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="c1">National</option>
                    <option value="c2">International</option>
                    <option value="c3">Politics</option>
                    <option value="c4">Business</option>
                    <option value="c5">Technology</option>
                    <option value="c6">Sports</option>
                    <option value="c7">Entertainment</option>
                    <option value="c8">Environment</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                  <input 
                    type="text" 
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="e.g. climate, technology"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2 flex justify-between items-center">
                Featured Image
                <button 
                  onClick={() => openMediaPicker('featured')}
                  className="text-xs text-primary hover:underline font-medium"
                >
                  Gallery
                </button>
              </h3>
              <div className="space-y-4">
                {imageUrl ? (
                  <div className="relative group rounded-lg overflow-hidden border border-gray-200">
                    <img src={imageUrl} alt="Preview" className="w-full h-40 object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button onClick={() => setImageUrl('')} className="text-white bg-red-600 px-3 py-1 rounded text-sm mr-2">Remove</button>
                      <button onClick={() => openMediaPicker('featured')} className="text-white bg-primary px-3 py-1 rounded text-sm">Change</button>
                    </div>
                  </div>
                ) : (
                  <div 
                    onClick={() => openMediaPicker('featured')}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 bg-gray-50 hover:bg-gray-100 hover:border-primary transition-colors cursor-pointer"
                  >
                    <ImageIcon size={32} className="mb-2 text-gray-400" />
                    <p className="text-sm font-medium">Click to select image</p>
                  </div>
                )}
                
                <input 
                  type="text" 
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Or enter image URL manually..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Settings</h3>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">Mark as Featured</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={commentsEnabled}
                    onChange={(e) => setCommentsEnabled(e.target.checked)}
                    className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">Allow Comments</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

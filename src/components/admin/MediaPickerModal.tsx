'use client';
import { useAdminMedia } from '@/store/adminMedia';
import { X, Image as ImageIcon } from 'lucide-react';

interface MediaPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
}

export default function MediaPickerModal({ isOpen, onClose, onSelect }: MediaPickerModalProps) {
  const { media } = useAdminMedia();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <ImageIcon size={20} className="mr-2 text-primary" />
            Media Gallery
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {media.map((item) => (
              <div 
                key={item.id} 
                onClick={() => {
                  onSelect(item.url);
                  onClose();
                }}
                className="group cursor-pointer relative bg-gray-50 rounded-lg border border-gray-200 overflow-hidden aspect-square hover:border-primary transition-colors"
              >
                <img src={item.url} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-xs truncate">{item.name}</p>
                </div>
              </div>
            ))}
            {media.length === 0 && (
              <div className="col-span-full text-center py-12 text-gray-500">
                No media found. Go to the Media Library to upload some.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

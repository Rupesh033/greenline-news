import Link from 'next/link';

export default function Ticker({ breakingNews, dict }: { breakingNews?: string[], dict?: any }) {
  if (!breakingNews || breakingNews.length === 0 || !dict) return null;

  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 overflow-hidden flex items-center">
      <div className="bg-accent text-gray-900 font-bold uppercase text-xs px-4 py-2 z-10 relative whitespace-nowrap h-full flex items-center">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
        </span>
        {dict.home.breaking}
      </div>
      <div className="flex-1 overflow-hidden relative h-[32px]">
        <div className="animate-marquee whitespace-nowrap absolute top-1.5 flex space-x-12 px-4">
          {breakingNews.map((news, index) => (
            <span key={index} className="text-sm font-medium text-gray-800 hover:text-primary transition-colors cursor-pointer">
              {news}
            </span>
          ))}
          {/* Duplicate for seamless looping */}
          {breakingNews.map((news, index) => (
            <span key={`dup-${index}`} className="text-sm font-medium text-gray-800 hover:text-primary transition-colors cursor-pointer">
              {news}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

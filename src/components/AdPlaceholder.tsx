export default function AdPlaceholder({ width, height, className = "" }: { width: number, height: number, className?: string }) {
  return (
    <div 
      className={`bg-gray-100 border border-gray-200 flex flex-col items-center justify-center text-gray-400 rounded overflow-hidden ${className}`}
      style={{ width: '100%', maxWidth: `${width}px`, height: `${height}px` }}
    >
      <span className="text-xs uppercase tracking-wider font-semibold">Advertisement</span>
      <span className="text-sm">{width} x {height}</span>
    </div>
  );
}

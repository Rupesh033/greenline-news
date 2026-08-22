import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold font-serif text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="bg-primary hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
        Return Home
      </Link>
    </div>
  );
}

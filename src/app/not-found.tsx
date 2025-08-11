import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 dark:text-gray-300 mb-6">
          Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mb-8 max-w-md">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
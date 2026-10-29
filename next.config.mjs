/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/:slug*',
        destination: '/hi/article/:slug*',
        permanent: false,
      },
      {
        source: '/article/:slug*',
        destination: '/hi/article/:slug*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

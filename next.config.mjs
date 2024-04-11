/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        // port: '',
        pathname: '/t/p/original/**',
      },
      {
        protocol: 'https',
        hostname: 'gdrive.adi4545aditya.workers.dev',
        // port: '',
        // pathname: '/t/p/original/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        // port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;

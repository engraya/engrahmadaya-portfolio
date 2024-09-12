/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
          },
          {
            protocol: 'https',
            hostname: 'ui.aceternity.com',
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
          },
        ],
      },
};

export default nextConfig;

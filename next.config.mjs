/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.google.com', 'images.google.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.googleusercontent.com',
          }
        ]
      }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com' },
      { hostname: 'avatars.githubusercontent.com' },
    ],
  },

  output: 'standalone',
};

module.exports = nextConfig;

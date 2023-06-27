/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }],
  },

  output: 'standalone',
};

module.exports = nextConfig;

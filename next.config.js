/** @type {import('next').NextConfig} */

//add image domain
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'placekitten.com',
      },
      {
        protocol: 'https',
        hostname: 'brandmark.io',
      },
    ],
  },
};

module.exports = nextConfig;

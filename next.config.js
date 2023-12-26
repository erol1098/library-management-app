/** @type {import('next').NextConfig} */

//add image domain
const nextConfig = {
  images: {
    domains: ['localhost', 'placekitten.com'],
  },
};

module.exports = nextConfig;

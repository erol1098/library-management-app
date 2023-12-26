/** @type {import('next').NextConfig} */

//add image domain
const nextConfig = {
  images: {
    domains: ['localhost', 'placekitten.com', 'brandmark.io'],
  },
};

module.exports = nextConfig;

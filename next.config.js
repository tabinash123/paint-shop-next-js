/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['dt-paintpros.myshopify.com'],
  },
};

module.exports = nextConfig;

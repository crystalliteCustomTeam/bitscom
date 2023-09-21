/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp23.cryscampus.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

rewrites: async () => [
  {
    source: "/public/supersale/index.html",
    destination: "/pages/api/index.js",
  },
  {
    source: "/public/topecommerce/index.html",
    destination: "/pages/api/ecommerce.js",
  },
],

module.exports = nextConfig
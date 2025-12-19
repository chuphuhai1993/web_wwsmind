/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/web_wwsmind',
  assetPrefix: '/web_wwsmind',
  trailingSlash: true,
}

module.exports = nextConfig

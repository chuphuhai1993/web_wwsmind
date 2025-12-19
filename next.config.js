/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/web_wwwsmind',
  assetPrefix: '/web_wwwsmind',
  trailingSlash: true,
}

module.exports = nextConfig

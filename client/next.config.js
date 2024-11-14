/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/token-gating-discord-bot-api',
  assetPrefix: '/token-gating-discord-bot-api/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  postcss: {
    plugins: {
        tailwindcss: {},
      autoprefixer: {},
    },
  },
  images: {
    unoptimized: true,
    domains: [
      'images.ctfassets.net',
      'raw.githubusercontent.com', // For GitHub repository images
      'github.com',
      'images.ctfassets.net',
      'cdn.wizardingworld.com', 
      'res.cloudinary.com',
    ],
  },
  output: 'export', // Modern way to enable static export
  env: {
    // Thirdweb
    NEXT_PUBLIC_THIRDWEB_CLIENT_ID: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || '',
    NEXT_PUBLIC_THIRDWEB_SECRET_KEY: process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY || '',
    // Moralis
    NEXT_PUBLIC_MORALIS_API_KEY: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
    NEXT_PUBLIC_MORALIS_WEBHOOK: process.env.NEXT_PUBLIC_MORALIS_WEBHOOK,
    // NextAuth
    NEXT_PUBLIC_NEXTAUTH_SECRET: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    NEXT_PUBLIC_NEXTAUTH_URL:
      process.env.NEXT_PUBLIC_NODE_ENV === 'production'
        ? 'https://mollybeach.github.io/token-gating-discord-bot-api'
        : process.env.NEXT_PUBLIC_NEXTAUTH_URL,
    NEXT_PUBLIC_NEXTAUTH_NEXT_PUBLIC_DOMAIN:
      process.env.NEXT_PUBLIC_NODE_ENV === 'production'
        ? 'https://mollybeach.github.io/token-gating-discord-bot-api'
        : process.env.NEXT_PUBLIC_NEXTAUTH_NEXT_PUBLIC_DOMAIN,
    NEXT_PUBLIC_DOMAIN:
      process.env.NEXT_PUBLIC_NODE_ENV === 'production'
        ? 'https://mollybeach.github.io/token-gating-discord-bot-api'
        : process.env.NEXT_PUBLIC_DOMAIN,
    // API Endpoints
    NEXT_PUBLIC_USERS_ENDPOINT: process.env.NEXT_PUBLIC_USERS_ENDPOINT,
    NEXT_PUBLIC_TOKENS_ENDPOINT: process.env.NEXT_PUBLIC_TOKENS_ENDPOINT,
    NEXT_PUBLIC_USERS_ENDPOINT_LOCAL: process.env.NEXT_PUBLIC_USERS_ENDPOINT_LOCAL,
    NEXT_PUBLIC_TOKENS_ENDPOINT_LOCAL: process.env.NEXT_PUBLIC_TOKENS_ENDPOINT_LOCAL,
    // Discord
    NEXT_PUBLIC_DISCORD_CLIENT_ID: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
    NEXT_PUBLIC_DISCORD_CLIENT_SECRET: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET,
    NEXT_PUBLIC_DISCORD_BOT_TOKEN: process.env.NEXT_PUBLIC_DISCORD_BOT_TOKEN,
    NEXT_PUBLIC_DISCORD_GUILD_ID: process.env.NEXT_PUBLIC_DISCORD_GUILD_ID,
    NEXT_PUBLIC_DISCORD_USER_ID: process.env.NEXT_PUBLIC_DISCORD_USER_ID,
    // Role IDs
    NEXT_PUBLIC_DISCORD_GRYFFINDOR_ROLE_ID: process.env.NEXT_PUBLIC_DISCORD_GRYFFINDOR_ROLE_ID,
    NEXT_PUBLIC_DISCORD_HUFFLEPUFF_ROLE_ID: process.env.NEXT_PUBLIC_DISCORD_HUFFLEPUFF_ROLE_ID,
    NEXT_PUBLIC_DISCORD_SLYTHERIN_ROLE_ID: process.env.NEXT_PUBLIC_DISCORD_SLYTHERIN_ROLE_ID,
    NEXT_PUBLIC_DISCORD_RAVENCLAW_ROLE_ID: process.env.NEXT_PUBLIC_DISCORD_RAVENCLAW_ROLE_ID,
    // Environment
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    // Contract
    NEXT_PUBLIC_CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  },
  basePath:
    process.env.NEXT_PUBLIC_NODE_ENV === "production"
      ? '/token-gating-discord-bot-api'
      : undefined,
  assetPrefix:
    process.env.NEXT_PUBLIC_NODE_ENV === "production"
      ? '/token-gating-discord-bot-api/'
      : undefined,
};

module.exports = nextConfig;
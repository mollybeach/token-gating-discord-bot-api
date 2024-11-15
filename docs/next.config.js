/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_THIRDWEB_CLIENT_ID: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
    NEXT_PUBLIC_THIRDWEB_SECRET_KEY: process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY
  },
  distDir: 'out',
  output: 'export',
  experimental: {
    forceSwcTransforms: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  experimental: {
    // Enable build cache
    turbotrace: {
      logLevel: "error",
      logDetail: true,
    }
  },
  // Configure build cache directory
  distDir: '.next',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = nextConfig


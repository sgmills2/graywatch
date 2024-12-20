/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove assetPrefix as it might interfere with GitHub Pages
  distDir: 'out',
  eslint: {
    // Ignore ESLint errors during production build
    ignoreDuringBuilds: true,
  },
  // Enable API routes in static export
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}

module.exports = nextConfig 
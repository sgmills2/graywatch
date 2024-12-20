/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // The basePath will be automatically injected by the GitHub Actions workflow
}

module.exports = nextConfig 
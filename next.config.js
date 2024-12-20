/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure no basePath is set as we're using a custom domain
  basePath: '',
  // Disable trailing slashes
  trailingSlash: false,
  // Ensure proper asset prefix for production
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://graywatch.ai' : '',
}

module.exports = nextConfig 
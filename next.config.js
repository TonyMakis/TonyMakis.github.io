/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/TonyMakis.github.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/TonyMakis.github.io' : '',
}

module.exports = nextConfig

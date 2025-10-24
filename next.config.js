/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/TonyMakis.github.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/TonyMakis.github.io' : '',
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.publicPath = process.env.NODE_ENV === 'production' ? '/TonyMakis.github.io/assets/' : '/_next/static/';
    }
    return config;
  },
}

module.exports = nextConfig

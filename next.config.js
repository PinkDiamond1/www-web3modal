// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

const withMDX = require('@next/mdx')(nextConfig)

module.exports = withMDX({
  webpack(config, options) {
    return config
  }
})

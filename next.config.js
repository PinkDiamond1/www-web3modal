// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptomized: true
  }
}

const withMDX = require('@next/mdx')(nextConfig)

module.exports = withMDX({
  webpack(config, options) {
    return config
  }
})

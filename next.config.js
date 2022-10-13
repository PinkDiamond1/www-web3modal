// next.config.js

const withMDX = require('@next/mdx')()

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    allowFutureImage: true,

    unoptimized: true
  },
  webpack(config, options) {
    return config
  }
})

// next.config.js

const withMDX = require('@next/mdx')()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withMDX(
  withBundleAnalyzer({
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
      unoptimized: true
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      })

      return config
    }
  })
)

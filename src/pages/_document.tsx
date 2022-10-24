import { Head, Html, Main, NextScript } from 'next/document'

const description =
  'Web3Modal is an elegantly simple yet powerful library that helps you manage your multi-chain wallet connection flows, all in one place.'
const socialDescription =
  'Your on-ramp to web3 multichain. Web3Modal is a versatile library that makes it super easy to connect users with your Dapp and start interacting with the blockchain.  '

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="WalletConnect" />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="ethereum, cryptocurrency, wallet, mobile, connect, bridge, relay, proxy, standard, protocol, crypto, tokens, dapp"
        />

        <meta name="twitter:title" content="Web3Modal" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="WalletConnect" />
        <meta name="twitter:site" content="@WalletConnect" />
        <meta name="twitter:description" content={socialDescription} />
        <meta name="twitter:image" content="https://walletconnect.com/meta/social-card.jpg" />
        <meta name="twitter:image:alt" content="Connect web3 wallets to dapps." />

        <meta name="og:title" content="Web3Modal" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://web3modal.com" />
        <meta name="og:image" content="https://walletconnect.com/meta/social-card.jpg" />
        <meta name="og:image:alt" content="Connect web3 wallets to dapps." />
        <meta name="og:description" content={socialDescription} />
        <meta name="og:site_name" content="WalletConnect" />
        <meta property="og:locale" content="en_US" />
        <meta name="fb:admins" content="365412154213405" />

        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="WalletConnect" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <meta name="theme-color" content="#141414" />

        <link rel="icon" href="/meta/favicon.ico" />
        <link rel="canonical" href="https://web3modal.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

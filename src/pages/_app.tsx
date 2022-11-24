import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import PlausibleProvider from 'next-plausible'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useSnapshot } from 'valtio'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import Layout from '../components/layout/Layout'
import { ThemeCtrl } from '../controllers/ThemeCtrl'
import '../styles/globals.css'

if (!process.env.NEXT_PUBLIC_PROJECT_ID)
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

const chains = [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum]
const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains }),
  provider
})

export const ethereumClient = new EthereumClient(wagmiClient, chains)

function App({ Component, pageProps }: AppProps) {
  const { accentColor, theme } = useSnapshot(ThemeCtrl.state)

  return (
    <PlausibleProvider domain="web3modal.com">
      <Head>
        <title>Web3Modal</title>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Layout>
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} />
        </WagmiConfig>
        <Web3Modal
          projectId={projectId}
          theme={theme}
          accentColor={accentColor}
          ethereumClient={ethereumClient}
        />
      </Layout>
    </PlausibleProvider>
  )
}

export default App

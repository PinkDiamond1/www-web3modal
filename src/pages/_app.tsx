import { Web3Modal } from '@web3modal/react'
import PlausibleProvider from 'next-plausible'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useSnapshot } from 'valtio'
import Layout from '../components/layout/Layout'
import { ThemeCtrl } from '../controllers/ThemeCtrl'
import '../styles/globals.css'

if (!process.env.NEXT_PUBLIC_PROJECT_ID)
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')

function App({ Component, pageProps }: AppProps) {
  const { accentColor, theme } = useSnapshot(ThemeCtrl.state)

  // Configure web3modal
  const modalConfig = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    theme,
    accentColor,
    ethereum: {
      appName: 'web3Modal',
      autoConnect: true
    }
  }

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
        <Component {...pageProps} />
        <Web3Modal config={modalConfig} />
      </Layout>
    </PlausibleProvider>
  )
}

export default App

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ConfigOptions } from '@web3modal/react'
import { Web3ModalProvider } from '@web3modal/react'
import Layout from '../components/layout/Layout'

// ToDo: Pass Vite through the here ... Like I did with example App.
const config: ConfigOptions = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  theme: 'dark',
  accentColor: 'magenta',
  ethereum: {
    appName: 'web3Modal'
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ModalProvider config={config}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ModalProvider>
  )
}

export default MyApp

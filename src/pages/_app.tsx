import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ConfigOptions } from '@web3modal/react'
import { chains, providers } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import Layout from '../components/layout/Layout'
import { ThemeCtrl } from '../controllers/ThemeCtrl'
import { ExplorerCtrl, ConfigCtrl } from '@web3modal/core'
// import { ThemeCtrl } from '@web3modal/core/dist/_types/src/controllers/statefull/ThemeCtrl'
import { useEffect, useState } from 'react'
import AlphaBanner from '../components/AlphaBanner/Index'
import Header from '../components/Header'

if (!process.env.NEXT_PUBLIC_PROJECT_ID)
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')

function App({ Component, pageProps }: AppProps) {
  // ToDo: State for AlphaBanner

  const [theme, setTheme] = useState('')
  const [accentColor, setAccentColor] = useState('')
  const [closeBanner, setCloseBanner] = useState(false)

  // Configure web3modal
  const modalConfig: ConfigOptions = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    theme: ThemeCtrl.state.theme as ConfigOptions['theme'],
    accentColor: ThemeCtrl.state.accentColor as ConfigOptions['accentColor'],
    ethereum: {
      appName: 'web3Modal',
      autoConnect: true,
      chains: [chains.mainnet],
      providers: [
        providers.walletConnectProvider({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID! })
      ]
    }
  }

  const unsubscribeThemeCtrl = ThemeCtrl.subscribe(() => {
    setTheme(ThemeCtrl.state.theme)
    setAccentColor(ThemeCtrl.state.accentColor)
  })

  useEffect(() => {
    ThemeCtrl.setTheme('light')
    ThemeCtrl.setAccentColor('default')
    ExplorerCtrl.getPreviewWallets()
    // unsubscribeThemeCtrl()
  }, [])

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Web3Modal config={modalConfig} />
    </>
  )
}

export default App

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ConfigOptions } from '@web3modal/react'
import { Web3ModalProvider } from '@web3modal/react'
import Layout from '../components/layout/Layout'
import { ThemeCtrl } from '../controllers/ThemeCtrl'
import { useEffect, useState } from 'react'

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('')
  const [accentColor, setAccentColor] = useState('')

  const config: ConfigOptions = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    theme: ThemeCtrl.state.theme,
    accentColor: ThemeCtrl.state.accentColor,
    ethereum: {
      appName: 'web3Modal'
    }
  }

  const unsubscribe = ThemeCtrl.subscribe(() => {
    setTheme(ThemeCtrl.state.theme)
    setAccentColor(ThemeCtrl.state.accentColor)
  })

  useEffect(() => {
    ThemeCtrl.setTheme('dark')
    ThemeCtrl.setAccentColor('default')
  }, [])

  return (
    <Web3ModalProvider config={config}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ModalProvider>
  )
}

export default App
function useSnapshot(store: any) {
  throw new Error('Function not implemented.')
}

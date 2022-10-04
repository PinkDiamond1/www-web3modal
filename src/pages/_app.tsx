import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ConfigOptions } from '@web3modal/react'
import { Web3ModalProvider } from '@web3modal/react'
import Layout from '../components/layout/Layout'
import { ThemeCtrl } from '../controllers/ThemeCtrl'
import { useEffect, useState } from 'react'
import AlphaBanner from '../components/AlphaBanner/Index'

function App({ Component, pageProps }: AppProps) {
  // ToDo: State for AlphaBanner

  const [theme, setTheme] = useState('')
  const [accentColor, setAccentColor] = useState('')
  // const [closeBanner, setCloseBanner] = useState(false)

  const config: ConfigOptions = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    theme: ThemeCtrl.state.theme as ConfigOptions['theme'],
    accentColor: ThemeCtrl.state.accentColor as ConfigOptions['accentColor'],
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
      {/* {closeBanner ? null : <AlphaBanner setCloseBanner={setCloseBanner} />} */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ModalProvider>
  )
}

export default App

//-------- GET STARTED -------------------------------//
export const INSTALL_INSTRUCTIONS = 'yarn add @web3modal/react @web3modal/ethereum ethers'

export const APP_SETUP = `import { chains, providers } from '@web3modal/ethereum'
import { Web3ModalProvider } from '@web3modal/react'

const NEXT_PUBLIC_PROJECT_ID = { process.env }

const modalConfig = {
  projectId: NEXT_PUBLIC_PROJECT_ID,
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true,
    chains: [chains.mainnet],
    providers: [providers.walletConnectProvider({ projectId: NEXT_PUBLIC_PROJECT_ID })]
  }
}

export default function App({ Component, pageProps }) {
  return (
    <Web3ModalProvider config={modalConfig}>
      <Component {...pageProps} />
    </Web3ModalProvider>
  )
}`

export const GET_ADDRESS = `import { ConnectButton, useAccount } from '@web3modal/react'
export default function HomePage() {
  const { connected, address } = useAccount()

  return connected ? (
    <>
      <h1>{address ? address : 'none'} </h1>
    </>
  ) : (
    <ConnectButton />
  )
}`

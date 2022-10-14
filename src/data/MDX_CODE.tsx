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

//-------- REACT -------------------------------//
export const CREATE_REACT_APP = `npx create-react-app wallectconnect-react-demo
cd walletconnect-react-demo
npm install @web3modal/react @web3modal/ethereum ethers`

export const CREATE_ENV = `npm i dotenv
touch .env`

export const REACT_PROJECT_ID = `REACT_APP_PROJECT_ID='YOUR_PROJECT_ID'`

export const CONSOLE_LOG_REACT_PROJECT_ID = `// index.js
const { REACT_APP_PROJECT_ID } = process.env
console.log('REACT_APP_PROJECT_ID', REACT_APP_PROJECT_ID)`

export const WEB3_MODAL_REACT = `
import { Web3ModalProvider } from "@web3modal/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const { REACT_APP_PROJECT_ID } = process.env

const config = {
  projectId: REACT_APP_PROJECT_ID,
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ModalProvider config={config}>
    <App />
  </Web3ModalProvider>
);
`

export const GET_CONNECTED_REACT = `// App.js

import { ConnectButton, useAccount } from '@web3modal/react';

function App() {
  const { connected, address } = useAccount()

  return connected ? (
    <>
      <h1>{address ? address : 'none'} </h1>
    </>
  ) : (
    <ConnectButton />
  )
}

export default App;`

//-------- TEST -------------------------------//
export const useConnectModal =
`
import { useConnectModal } from '@web3modal/ethereum'

// Usage
const { isOpen, open, close } = useConnectModal()

// Returns
interface Return {
  isOpen: boolean
  open: () => void
  close: () => void
}
`
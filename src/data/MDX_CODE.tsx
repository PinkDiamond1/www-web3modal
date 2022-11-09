//-------- TRY IT OUT -------------------------------//
export const TRY_IT_OUT_CODE = `
import { useConnected, ConnectButton, useConnectModal } from '@web3modal/react'
export default function YourAppContent() {
  const { isOpen, open, close } = useConnectModal()
  const { connected } = useConnected()

  return (
    <>
      <div>{!isConnected ? <ConnectButton /> : accountButton()}</div>
      {/* or */}
      <button onClick={open}>Open Modal</button>
    </>
  )
}
`

//-------- REACT -------------------------------//
export const INSTALL_REACT_DEPENDENCIES = `
npm install @web3modal/react @web3modal/ethereum ethers
`

export const CONFIGURE_REACT = `
import { Web3Modal } from '@web3modal/react'

const config = {
  projectId: '<YOUR_PROJECT_ID>',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal'
  }
}

export default function App() {
  return (
    <>
      <YourAppContent />
      <Web3Modal config={config} />
    </>
  )
}
`

//-------- HOOKS -------------------------------//
export const HOOK_USE_CONNECT_MODAL = `
import { useConnectModal } from '@web3modal/react'

// Usage
const { isOpen, open, close } = useConnectModal()

// Returns
interface Return {
  isOpen: boolean
  open: () => void
  close: () => void
}
`

export const HOOK_USE_ACCOUNT = `
import { useAccount } from '@web3modal/react'

// Usage
const { account, isReady } = useAccount()

// Returns
interface Return {
  account: {
    address: string | ''
    connector?: Connector
    isConnecting?: boolean
    isReconnecting?: boolean
    isConnected?: boolean
    isDisconnected?: boolean
    status?: 'connecting' | 'reconnecting' | 'connected' | 'disconnected'
  }
  isReady: boolean
}
`

export const HOOK_USE_BALANCE = `
import { useBalance } from '@web3modal/react'

// Usage
const { data, error, isLoading, refetch } = useBalance({ addressOrName: 'vitalik.eth' })

// Returns
interface Return {
  data?: {
    decimals: number
    formatted: string
    symbol: string
    value: BigNumber
  }
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  addressOrName: string
  watch?: boolean
  enabled?: boolean
  chainId?: number
  formatUnits?: number | 'wei' | 'kwei' | 'mwei' | 'gwei' | 'szabo' | 'finney' | 'ether'
  token?: string
}
`

export const HOOK_USE_BLOCK_NUMBER = `
import { useBlockNumber } from '@web3modal/react'

// Usage
const { data, error, isLoading, refetch } = useBlockNumber({ watch: true })

// Returns
interface Return {
  data?: number
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  watch?: boolean
  enabled?: boolean
  chainId?: number
}
`

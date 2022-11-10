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

export const INSTALL_CONFIGURE_REACT = `
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

export const INSTALL_WEB3BUTTON = `
import { Web3Button, useConnectModal } from '@web3modal/react'

export default function YourAppContent() {
  const { isOpen, open, close } = useConnectModal()

  return (
    <>
      <Web3Button />
      {/* or */}
      <button onClick={open}>Open Modal</button>
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

export const HOOK_USE_DISCONNECT = `
import { useDisconnect } from '@web3modal/react'

// Usage
const disconnect = useDisconnect()
disconnect()

// Returns
() => void
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

export const HOOK_USE_CONTRACT = `
import { useContract } from '@web3modal/react'
import ensRegistryABI from './yourAbi/ensRegistryABI.json'

// Usage
const { contract, isReady } = useContract({
  address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  abi: ensRegistryABI
})

// Returns
ethers.Contract | undefined

// Options
interface Options {
  contract?: {
    address: string
    abi: ContractInterface
    signerOrProvider?: Provider | Signer
  }
  isReady: boolean
}
`

export const HOOK_USE_CONTRACT_EVENT = `
import { useContractEvent } from '@web3modal/react'
import ensRegistryABI from './yourAbi/ensRegistryABI.json'

// Usage
useContractEvent({
  address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  abi: ensRegistryABI,
  eventName: 'NewOwner',
  listener: (...event) => console.log(event)
})

// Options
interface Options {
  address: string
  abi: ContractInterface
  eventName: string
  listener: (...event: unknown[]) => void
  chainId?: number
  once?: boolean
}
`

export const HOOK_USE_CONTRACT_READ = `
import { useContractRead } from '@web3modal/react'
import wagmigotchiABI from './yourAbi/wagmigotchiABI.json'

// Usage
const { data, error, isLoading, refetch } = useContractRead({
  address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
  abi: wagmigotchiABI,
  functionName: 'getHunger'
})

// Returns
interface Return {
  data?: Result
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  address: string
  abi: ContractInterface
  functionName: string
  args?: any[]
  overrides?: CallOverrides
  chainId?: number
  enabled?: boolean
  watch?: boolean
}
`

export const HOOK_USE_CONTRACT_WRITE = `
import { useContractWrite } from '@web3modal/react'
import wagmigotchiABI from './yourAbi/wagmigotchiABI.json'

// Usage
const { data, error, isLoading, write } = useContractWrite({
  address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
  abi: wagmigotchiABI,
  functionName: 'feed'
})
write()

// Returns
interface Return {
  data?: TransactionResponse
  error?: Error
  isLoading: boolean
  write: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  functionName: string
  chainId?: number | undefined
  args?: any[]
  overrides?: CallOverrides
  signer?: Signer
}
`

export const HOOK_USE_ENS_ADDRESS = `
import { useEnsAddress } from '@web3modal/react'

// Usage
const { data, error, isLoading, refetch } = useEnsAddress({
  name: 'vitalik.eth'
})

// Returns
interface Return {
  data?: string
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  name: string
  chainId?: number
  enabled?: boolean
}
`

export const HOOK_USE_ENS_AVATAR = `
import { useEnsAvatar } from '@web3modal/react'

// Usage
const { data, error, isLoading, refetch } = useEnsAvatar({
  addressOrName: 'vitalik.eth'
})

// Returns
interface Return {
  data?: string
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  addressOrName: string
  chainId?: number
  enabled?: boolean
}
`

export const HOOK_USE_ENS_NAME = `
import { useEnsName } from '@web3modal/react'

// Usage
const { data, error, isLoading, refetch } = useEnsName({
  address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'
})

// Returns
interface Return {
  data?: string
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  address: string
  chainId?: number
  enabled?: boolean
}
`

export const HOOK_USE_ENS_RESOLVER = `
import { useEnsResolver } from '@web3modal/react'

// Usage
const { data, error, isLoading, refetch } = useEnsResolver({
  name: 'vitalik.eth'
})

// Returns
interface Return {
  data?: string
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  name: string
  chainId?: number
  enabled?: boolean
}
`

export const HOOK_USE_FEE_DATA = `
import { useFeeData } from '@web3modal/react'

// Usage
const { data, error, isLoading, refetch } = useFeeData({ formatUnits: 'gwei' })

// Returns
interface Return {
  data?: {
    gasPrice: BigNumber
    maxFeePerGas: BigNumber
    maxPriorityFeePerGas: BigNumber
    formatted: {
      gasPrice: string
      maxFeePerGas: string
      maxPriorityFeePerGas: string
    }
  }
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  formatUnits?: number | 'wei' | 'kwei' | 'mwei' | 'gwei' | 'szabo' | 'finney' | 'ether'
  chainId?: number
  watch?: boolean
  enabled?: boolean
}
`

export const HOOK_USE_NETWORK = `
import { useNetwork } from '@web3modal/react'

// Usage
const { network, isReady } = useNetwork()

// Returns
interface Return {
  network?: {
    chain?: Chain & { unsupported?: boolean }
    chains?: Chain[]
  }
  isReady: boolean
}
`

export const HOOK_USE_PROVIDER = `
import { useProvider } from '@web3modal/react'

// Usage
const { provider, isReady } = useProvider(options)

// Returns
interface Return {
  provider?: ethers.Provider
  isReady: boolean
}

interface Options {
  chainId?: number
}
`

export const HOOK_USE_WEBSOCKET_PROVIDER = `
import { useWebsocketProvider } from '@web3modal/react'

// Usage
const { websocketProvider, isReady } = useWebsocketProvider()

// Returns
interface Return {
  websocketProvider?: ethers.WebSocketProvider
  isReady: boolean
}
`

export const HOOK_USE_SIGNER = `
import { useSigner } from '@web3modal/react'

// Usage
const { data, error, isLoading } = useSigner(options)

// Returns
interface Return {
  data?: ethers.providers.JsonRpcSigner
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

interface Options {
  chainId?: number
}
`

export const HOOK_USE_TOKEN = `
import { useToken } from '@web3modal/react'

// Usage
const { data, error, isLoading, refetch } = useToken({
  address: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72'
})

// Returns
interface Return {
  data?: {
    address: string
    decimals: number
    name: string
    symbol: string
    totalSupply: {
      formatted: string
      value: BigNumber
    }
  }
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  address: string
  chainId?: number
  enabled?: boolean
  formatUnits?: number | 'wei' | 'kwei' | 'mwei' | 'gwei' | 'szabo' | 'finney' | 'ether'
}
`

export const HOOK_USE_TRANSACTION = `
import { useTransaction } from '@web3modal/react'

// Usage
const { data, error, isLoading, refetch } = useTransaction({
  hash: '0xe75fb554e433e03763a1560646ee22dcb74e5274b34c5ad644e7c0f619a7e1d0'
})

// Returns
interface Return {
  data?: TransactionResponse
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  hash: string
  chainId?: number
  enabled?: boolean
}
`

export const HOOK_USE_WAIT_FOR_TRANSACTION = `
import { useWaitForTransaction } from '@web3modal/react'

// Usage
const { data, error, isLoading, refetch } = useWaitForTransaction({
  hash: '0xe75fb554e433e03763a1560646ee22dcb74e5274b34c5ad644e7c0f619a7e1d0'
})

// Returns
interface Return {
  data?: TransactionResponse
  error?: Error
  isLoading: boolean
  refetch: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  confirmations?: number
  hash?: string
  timeout?: number
  chainId?: number
  enabled?: boolean
}
`

export const HOOK_USE_SEND_TRANSACTION = `
import { useSendTransaction } from '@web3modal/react'
import { BigNumber } from 'ethers'

// Usage
const { data, error, isLoading, sendTransaction } = useSendTransaction({
  request: {
    to: 'vitalik.eth',
    value: BigNumber.from('10000000000000000')
  }
})
sendTransaction()

// Returns
interface Return {
  data?: TransactionResponse
  error?: Error
  isLoading: boolean
  sendTransaction: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  request: TransactionRequest & {
    to: string
  }
  chainId?: number
  signer?: Signer
}
`

export const HOOK_USE_SIGN_MESSAGE = `
import { useSignMessage } from '@web3modal/react'

// Usage
const { data, error, isLoading, signMessage } = useSignMessage({
  message: 'WalletConnect web3modal message'
})
signMessage()

// Returns
interface Return {
  data?: string
  error?: Error
  isLoading: boolean
  signMessage: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  message: string | Bytes
}
`

export const HOOK_USE_SIGN_TYPED_DATA = `
import { useSignTypedData } from '@web3modal/react'

// Usage
const { data, error, isLoading, signTypedData } = useSignTypedData({
  domain,
  types,
  value
})
signTypedData()

// Returns
interface Return {
  data?: string
  error?: Error
  isLoading: boolean
  signTypedData: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  domain: {
    name?: string
    version?: string
    chainId?: string | number | bigint
    verifyingContract?: string
    salt?: BytesLike
  }
  types: Record<
    string,
    Array<{
      name: string
      type: string
    }>
  >
  value: Record<string, any>
}
`

export const HOOK_USE_SWITCH_NETWORK = `
import { useSwitchNetwork } from '@web3modal/react'

// Usage
const { data, error, isLoading, switchNetwork } = useSwitchNetwork({
  chainId: 1
})
switchNetwork()

// Returns
interface Return {
  data?: Chain
  error?: Error
  isLoading: boolean
  switchNetwork: (options?: Options) => Promise<Return['data']>
}

// Options
interface Options {
  chainId?: number
}
`

// -- CONFIGURATION ------------------------------------ //
export const CONFIG_PROJECT_ID = `
const config = {
  projectId: 'YOUR_PROJECT_ID'
}
`

export const CONFIG_THEME = `
const config = {
  theme: 'dark' | 'light'
}
`

export const CONFIG_ACCENT_COLOR = `
const config = {
  accentColor: 
    'blackWhite'
    | 'blue' 
    | 'default'
    | 'green'
    | 'magenta' 
    | 'orange'
    | 'teal'
}
`

export const CONFIG_STANDALONE_CHAINS = `
const config = {
  standaloneChains: [
    'eip155:1', 
    'solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ', 
    'cosmos:cosmoshub-4',
    'polkadot:91b171bb158e2d3848fa23a9f1c25182',
    'elrond:1'
  ]
}
`

export const CONFIG_ETH_APP_NAME = `
const ethereum = {
  appName: 'WalletConnect'
}
`

export const CONFIG_ETH_AUTO_CONNECT = `
const ethereum = {
  autoConnect: true
}
`

export const CONFIG_ETH_CHAINS = `
import { chains } from "@web3modal/ethereum"

// Example of custom chain
const customChain = {
  id: 1285,
  name: 'Moonriver',
  network: 'moonriver',
  nativeCurrency: {
    decimals: 18,
    name: 'Moonriver',
    symbol: 'MOVR'
  },
  rpcUrls: {
    default: 'https://rpc.api.moonriver.moonbeam.network'
  },
  blockExplorers: {
    default: { name: 'Moonscan', url: 'https://moonriver.moonscan.io' }
  },
  testnet: false
}

const ethereum = {
  chains: [chains.mainnet, chains.avalanche, customChain]
}
`

export const CONFIG_ETH_PROVIDERS = `
import { providers } from "@web3modal/ethereum"
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'

// Example of custom provider
const customProvider = {
  return jsonRpcProvider({
    rpc: rpcChain => {
      return {
        http: 'https://rpc.your-rpc.com/?chainId=rpcChain.id'
      }
    }
  })
}

const ethereum = {
  providers: [
    providers.walletConnectProvider({ projectId: 'YOUR_PROJECT_ID' }),
    customProvider
  ]
}
`

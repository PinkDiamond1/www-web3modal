//-------- GET STARTED -------------------------------//
export const INSTALL_INSTRUCTIONS = 'yarn add @web3modal/react @web3modal/ethereum ethers'

export const APP_SETUP = `import { Web3Modal } from '@web3modal/react'

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

//-------- MODAL -------------------------------//

export const USE_MODAL_CONNECT = `
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

//-------- DATA HOOKS -------------------------------//
export const USE_ACCOUNT = `import { useAccount } from '@web3modal/react'

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

export const USE_ACCOUNT_EXAMPLE = `import { useAccount } from '@web3modal/react'

export default function UseAccount() {
  const { account, isReady } = useAccount()

  return (
    <section>
      <h1>useAccount</h1>
      <ul>
        <li>
          Ready: <span>{isReady}</span>
        </li>
        <li>
          Connected: <span>{account.isConnected ? 'Yes' : 'No'}</span>
        </li>
        <li>
          Connector: <span>{account.connector?.id}</span>
        </li>
        <li>
          Address: <span>{account.address}</span>
        </li>
      </ul>
    </section>
  )
}
`

export const USE_BALANCE = `import { useBalance } from '@web3modal/react'

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

export const USE_BALANCE_EXAMPLE = `import { useAccount, useBalance } from '@web3modal/react'

export default function UseBalance() {
  const { account } = useAccount()
  const { data, error, isLoading, refetch } = useBalance({
    addressOrName: account.address
  })

  return (
    <section>
      <h1>useBalance</h1>

      <ul>
        <li>
          Balance Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data, null, 2)}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}>Refetch</button>
    </section>
  )
}
`
export const USE_BLOCK_NUMBER = `import { useBlockNumber } from '@web3modal/react'

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

export const USE_BLOCK_NUMBER_EXAMPLE = `import { useBlockNumber } from '@web3modal/react'

export default function UseBlockNumber() {
  const { data, error, isLoading, refetch } = useBlockNumber({ watch: true })

  return (
    <section>
      <h1>useBlockNumber</h1>

      <ul>
        <li>
          BlockNumber: <span>{isLoading ? 'Loading...' : data}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}>Refetch</button>
    </section>
  )
}
`
export const USE_CONTRACT = `import { useContract } from '@web3modal/react'
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
export const USE_CONTRACT_EXAMPLE = `import { useContract } from '@web3modal/react'
import wagmigotchiAbi from '../data/wagmigotchiAbi.json'

export default function UseContract() {
  const { contract } = useContract({
    address: '0xeCB504D39723b0be0e3a9Aa33D646642D1051EE1',
    abi: wagmigotchiAbi
  })

  return (
    <section>
      <h1>useContract</h1>

      <p>
        This example uses
        <a
          href="https://etherscan.io/address/0xecb504d39723b0be0e3a9aa33d646642d1051ee1#code"
          target="_blank"
          rel="noopener noreferer"
        >
          WagmiGotchi Contract
        </a>
        on Ethereum
      </p>

      <ul>
        <li>
          Contract Address: <span>{contract?.address}</span>
        </li>
      </ul>
    </section>
  )
}
`

export const USE_CONTRACT_EVENT = `import { useContractEvent } from '@web3modal/react'
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
export const USE_CONTRACT_EVENT_EXAMPLE = `import { chains } from '@web3modal/ethereum'
import { useContractEvent } from '@web3modal/react'
import { useState } from 'react'
import ensRegistryABI from '../data/ensRegistryABI.json'

export default function UseContractEvent() {
  const [eventData, setEventData] = useState<unknown>(undefined)

  const config = {
    address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    abi: ensRegistryABI,
    eventName: 'NewOwner',
    listener: (...event: unknown[]) => setEventData(event),
    chainId: chains.mainnet.id
  }

  useContractEvent(config)

  return (
    <section>
      <h1>useContractEvent</h1>

      <p>
        This example uses
        <a
          href="https://etherscan.io/address/0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e#code"
          target="_blank"
          rel="noopener noreferer"
        >
          ENS Registry Contract
        </a>
        on Ethereum
      </p>

      <ul>
        <li>
          Event data: <span>{JSON.stringify(eventData)}</span>
        </li>
      </ul>
    </section>
  )
}
`

export const USE_CONTRACT_READ = `import { useContractRead } from '@web3modal/react'
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
}`

export const USE_CONTRACT_READ_EXAMPLE = `import { chains } from '@web3modal/ethereum'
import { useContractRead } from '@web3modal/react'
import wagmigotchiAbi from '../data/wagmigotchiAbi.json'

export default function UseContractRead() {
  const config = {
    address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    abi: wagmigotchiAbi,
    functionName: 'getHunger',
    chainId: chains.mainnet.id
  }
  const { data, error, isLoading, refetch } = useContractRead(config)

  return (
    <section>
      <h1>useContractRead</h1>

      <p>
        This example uses
        <a
          href="https://etherscan.io/address/0xecb504d39723b0be0e3a9aa33d646642d1051ee1#code"
          target="_blank"
          rel="noopener noreferer"
        >
          WagmiGotchi Contract
        </a>
        on Ethereum
      </p>

      <ul>
        <li>
          Contract read config: <span>{JSON.stringify(config)}</span>
        </li>
        <li>
          Returned data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}>Refetch data</button>
    </section>
  )
}`

export const USE_ENS_ADDRESS = `import { useEnsAddress } from '@web3modal/react'

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
}`

export const USE_ENS_ADDRESS_EXAMPLE = `import { useEnsAddress } from '@web3modal/react'

export default function UseEnsAddress() {
  const name = 'vitalik.eth'
  const { data, isLoading, error, refetch } = useEnsAddress({ name })

  return (
    <section>
      <h1>useEnsAddress</h1>
      <ul>
        <li>
          Name: <span>{name}</span>
        </li>
        <li>
          Address: <span>{isLoading ? 'Loading...' : data}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}>Refetch Address</button>
    </section>
  )
}`

export const USE_ENS_AVATAR = `import { useEnsAvatar } from '@web3modal/react'

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
}`

export const USE_ENS_AVATAR_EXAMPLE = `import { useEnsAvatar } from '@web3modal/react'

export default function UseEnsAvatar() {
  const name = 'vitalik.eth'
  const { data, isLoading, error, refetch } = useEnsAvatar({ addressOrName: name })

  return (
    <section>
      <h1>useEnsAvatar</h1>
      <ul>
        <li>
          Name: <span>{name}</span>
        </li>
        <li>
          Avatar: <span>{isLoading ? 'Loading...' : data}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}>Refetch Address</button>
    </section>
  )
}`

export const USE_ENS_NAME = `import { useEnsName } from '@web3modal/react'

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
}`

export const USE_ENS_NAME_EXAMPLE = `import { useEnsName } from '@web3modal/react'

export default function UseEnsName() {
  const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
  const { data, isLoading, error, refetch } = useEnsName({ address })

  return (
    <section>
      <h1>useEnsName</h1>
      <ul>
        <li>
          Address: <span>{address}</span>
        </li>
        <li>
          Name: <span>{isLoading ? 'Loading...' : data}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}>Refetch Name</button>
    </section>
  )
}`

export const USE_ENS_RESOLVER = `import { useEnsResolver } from '@web3modal/react'

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
}`

export const USE_ENS_RESOLVER_EXAMPLE = `import { useEnsResolver } from '@web3modal/react'

export default function UseEnsName() {
  const name = 'vitalik.eth'
  const { data, isLoading, error, refetch } = useEnsResolver({ name })

  return (
    <section>
      <h1>useEnsResolver</h1>
      <ul>
        <li>
          Name: <span>{name}</span>
        </li>
        <li>
          {/* eslint-disable-next-line no-nested-ternary */}
          Resolver Ready: <span>{isLoading ? 'Loading...' : data?.address ? 'Yes' : 'No'}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}>Refetch Name</button>
    </section>
  )
}`

export const USE_FEE_DATA = `import { useFeeData } from '@web3modal/react'

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
}`

export const USE_FEE_DATA_EXAMPLE = `import { useFeeData } from '@web3modal/react'

export default function UseFeeData() {
  const { data, error, isLoading, refetch } = useFeeData({ watch: true })

  return (
    <section>
      <h1>useFeeData</h1>

      <ul>
        <li>
          FeeData: <span>{isLoading ? 'Loading...' : JSON.stringify(data, null, 2)}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}>Refetch</button>
    </section>
  )
}`

export const USE_NETWORK = `import { useNetwork } from '@web3modal/react'

// Usage
const { network, isReady } = useNetwork()

// Returns
interface Return {
  network?: {
    chain?: Chain & { unsupported?: boolean }
    chains?: Chain[]
  }
  isReady: boolean
}`

export const USE_NETWORK_EXAMPLE = `import { useNetwork } from '@web3modal/react'

export default function UseNetwork() {
  const { network } = useNetwork()

  return (
    <section>
      <h1>useNetwork</h1>

      <ul>
        <li>
          Chain ID: <span>{network?.chain?.id}</span>
        </li>
        <li>
          Selected Chain: <span>{network?.chain?.name}</span>
        </li>
        <li>
          Configured Chains: <span>{network?.chains.map(c => c.name).join(', ')}</span>
        </li>
      </ul>
    </section>
  )
}`

export const USE_PROVIDER = `import { useProvider } from '@web3modal/react'

// Usage
const { provider, isReady } = useProvider(options)

// Returns
interface Return {
  provider?: ethers.Provider
  isReady: boolean
}

interface Options {
  chainId?: number
}`

export const USE_PROVIDER_EXAMPLE = `import { useProvider, useWebsocketProvider } from '@web3modal/react'

export default function UseProvider() {
  const { provider } = useProvider()
  const { websocketProvider } = useWebsocketProvider()

  return (
    <section>
      <h1>useProvider</h1>

      <ul>
        <li>
          Provider Ready: <span>{provider ? 'Yes' : 'No'}</span>
        </li>
        <li>
          WebsocketProvider Ready: <span>{websocketProvider ? 'Yes' : 'No'}</span>
        </li>
      </ul>
    </section>
  )
}`

export const USE_SIGNER = `import { useSigner } from '@web3modal/react'

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
}`

export const USE_SIGNER_EXAMPLE = `import { useSigner } from '@web3modal/react'

export default function UseSigner() {
  const { data, error, isLoading, refetch } = useSigner()

  return (
    <section>
      <h1>useSigner</h1>

      <ul>
        <li>
          {/* eslint-disable */}
          Signer Ready: <span>{isLoading ? 'Loading...' : data?._isSigner ? 'Yes' : 'No'}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}>Refetch</button>
    </section>
  )
}`

export const USE_TOKEN = `import { useToken } from '@web3modal/react'

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
}`

export const USE_TOKEN_EXAMPLE = `import { useToken } from '@web3modal/react'

export default function UseToken() {
  const address = '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72'
  const { data, isLoading, error, refetch } = useToken({ address })

  return (
    <section>
      <h1>useToken</h1>
      <ul>
        <li>
          Address $ENS: <span>{address}</span>
        </li>
        <li>
          Token Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}>Refetch Token</button>
    </section>
  )
}`

export const USE_WAIT_FOR_TRANSACTION = `import { useWaitForTransaction } from '@web3modal/react'

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
}`

export const USE_TRANSACTION = `import { useTransaction } from '@web3modal/react'

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
}`

export const USE_TRANSACTION_EXAMPLE = `import { useTransaction } from '@web3modal/react'

export default function UseTransaction() {
  const hash = '0xe75fb554e433e03763a1560646ee22dcb74e5274b34c5ad644e7c0f619a7e1d0'
  const { data, isLoading, error, refetch } = useTransaction({ hash })

  return (
    <section>
      <h1>useTransaction</h1>
      <ul>
        <li>
          TX hash: <span>{hash}</span>
        </li>
        <li>
          Transaction Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}>Refetch Transaction</button>
    </section>
  )
}`

export const USE_WEB_SOCKET_PROVIDER = `import { useWebsocketProvider } from '@web3modal/react'

// Usage
const { websocketProvider, isReady } = useWebsocketProvider()

// Returns
interface Return {
  websocketProvider?: ethers.WebSocketProvider
  isReady: boolean
}`

export const USE_WEB_SOCKET_PROVIDER_EXAMPLE = `import { useProvider, useWebsocketProvider } from '@web3modal/react'

export default function UseProvider() {
  const { provider } = useProvider()
  const { websocketProvider } = useWebsocketProvider()

  return (
    <section>
      <h1>useProvider</h1>

      <ul>
        <li>
          Provider Ready: <span>{provider ? 'Yes' : 'No'}</span>
        </li>
        <li>
          WebsocketProvider Ready: <span>{websocketProvider ? 'Yes' : 'No'}</span>
        </li>
      </ul>
    </section>
  )
}`

// export const USE_XXX_EXAMPLE = ``

//-------- ACTION HOOKS -------------------------------//
export const USE_DISCONNECT_HOOK = `import { useDisconnect } from '@web3modal/ethereum'

// Usage
const disconnect = useDisconnect()
disconnect()

// Returns
() => void
`

export const USE_CONTRACT_WRITE = `import { useContractWrite } from '@web3modal/ethereum'
import wagmigotchiABI from './yourAbi/wagmigotchiABI.json'

// Usage
const { data, error, isLoading, write } = useContractWrite({
  addressOrName: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
  contractInterface: wagmigotchiABI,
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
  args?: any
  overrides?: CallOverrides
  signer?: Signer
}
`

export const USE_CONTRACT_WRITE_EXAMPLE = `import { chains } from '@web3modal/ethereum'
import { useContractWrite, useWaitForTransaction } from '@web3modal/react'
import wagmigotchiABI from '../data/wagmigotchiAbi.json'

export default function UseContractWrite() {
  const config = {
    addressOrName: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    contractInterface: wagmigotchiABI,
    functionName: 'feed',
    chainId: chains.mainnet.id
  }

  const { data, error, isLoading, write } = useContractWrite(config)
  const { receipt, isWaiting } = useWaitForTransaction({ hash: data?.hash })

  return (
    <section>
      <h1>useContractWrite</h1>

      <p>
        This example uses
        <a
          href="https://etherscan.io/address/0xecb504d39723b0be0e3a9aa33d646642d1051ee1#code"
          target="_blank"
          rel="noopener noreferer"
        >
          WagmiGotchi Contract
        </a>
        on Ethereum
      </p>

      <ul>
        <li>
          Contract write Config: <span>{JSON.stringify(config)}</span>
        </li>
        <li>
          Write Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span>
        </li>
        <li>
          Receipt Data: <span>{isWaiting ? 'Waiting...' : JSON.stringify(receipt)}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => write()}>Write to contract</button>
    </section>
  )
}
`

export const USE_SEND_TRANSACTION = `import { useSendTransaction } from '@web3modal/ethereum'
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

export const USE_SEND_TRANSACTION_EXAMPLE = `import { chains } from '@web3modal/ethereum'
import { useSendTransaction, useWaitForTransaction } from '@web3modal/react'
import { BigNumber } from 'ethers'

const { id: chainId } = chains.avalancheFuji

export default function UseSendTransaction() {
  const transaction = {
    request: {
      to: '0x000000000000000000000000000000000000dead',
      value: BigNumber.from('10000000000000000')
    },
    chainId
  }

  const { data, error, isLoading, sendTransaction } = useSendTransaction(transaction)
  const { receipt, isWaiting } = useWaitForTransaction({ hash: data?.hash })

  return (
    <section>
      <h1>useSendTransaction / useWaitForTransaction</h1>
      <p>
        Note: This example uses avalance fuji testnet, you will need some testnet avax from the
        faucet
        <a href="https://faucet.avax.network/" target="_blank" rel="noopener noreferer">
          https://faucet.avax.network/
        </a>
      </p>
      <ul>
        <li>
          Request: <span>{JSON.stringify(transaction)}</span>
        </li>
        <li>
          Send Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span>
        </li>
        <li>
          Receipt Data: <span>{isWaiting ? 'Waiting...' : JSON.stringify(receipt)}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => sendTransaction()}>Send Transaction</button>
    </section>
  )
}
`

export const USE_SIGN_MESSAGE = `import { useSignMessage } from '@web3modal/ethereum'

// Usage
const { data, error, isLoading, signMessage } = useSendTransaction({
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

export const USE_SIGN_MESSAGE_EXAMPLE = `import { useSignMessage } from '@web3modal/react'

export default function UseSignMessage() {
  const message = 'Hello Web3Modal'
  const { data, error, isLoading, signMessage } = useSignMessage({ message })

  return (
    <section>
      <h1>useSignMessage</h1>

      <ul>
        <li>
          Message: <span>{message}</span>
        </li>
        <li>
          Signature: <span>{isLoading ? 'Loading...' : data}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => signMessage()}>Sign Message</button>
    </section>
  )
}
`

export const USE_SEND_TYPED_DATA = `import { useSignMessage } from '@web3modal/ethereum'

// Usage
const { data, error, isLoading, signMessage } = useSendTransaction({
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

export const USE_SIGN_TYPED_DATA = `import { useSignTypedData } from '@web3modal/ethereum'

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

export const USE_SIGN_TYPED_DATA_EXAMPLE = `import { useSignTypedData } from '@web3modal/react'

const domain = {
  name: 'Ether Mail',
  version: '1',
  chainId: 1,
  verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
}

const types = {
  Person: [
    { name: 'name', type: 'string' },
    { name: 'wallet', type: 'address' }
  ],
  Mail: [
    { name: 'from', type: 'Person' },
    { name: 'to', type: 'Person' },
    { name: 'contents', type: 'string' }
  ]
}

const value = {
  from: {
    name: 'Cow',
    wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826'
  },
  to: {
    name: 'Bob',
    wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB'
  },
  contents: 'Hello, Bob!'
}

export default function UseSignTypedData() {
  const { data, error, isLoading, signTypedData } = useSignTypedData({ types, value, domain })

  return (
    <section>
      <h1>useSignTypedData</h1>

      <ul>
        <li>
          Typed data: <span>See example sourc code for typed data</span>
        </li>
        <li>
          Signature: <span>{isLoading ? 'Loading...' : data}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>
      <button onClick={async () => signTypedData()}>Sign Typed Data</button>
    </section>
  )
}
`

export const USE_SWITCH_NETWORK = `import { useSwitchNetwork } from '@web3modal/ethereum'

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

export const USE_SWITCH_NETWORK_EXAMPLE = `import { useNetwork, useSwitchNetwork } from '@web3modal/react'

export default function UseSwitchNetwork() {
  const { chains, chain } = useNetwork()
  const { error, isLoading, switchNetwork } = useSwitchNetwork()

  return (
    <section>
      <h1>useSwitchNetwork</h1>

      <ul>
        <li>
          Selected Chain: <span>{isLoading ? 'Loading...' : chain?.name}</span>
        </li>
        <li>
          Error: <span>{error ? error.message : 'No Error'}</span>
        </li>
      </ul>

      <ul>
        {chains?.map(c => (
          <li key={c.id}>
            <button onClick={async () => switchNetwork({ chainId: c.id })}>
              Switch to {c.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
`

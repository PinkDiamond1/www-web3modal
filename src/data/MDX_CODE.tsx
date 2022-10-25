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
    <>
      <App />
      <Web3Modal config={config} />
    </>
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
export const CREATE_REACT_APP = `npx create-react-app wallectconnect-react-demo
cd walletconnect-react-demo
yarn add @web3modal/react @web3modal/ethereum ethers`

export const CREATE_ENV = `yarn add dot
env touch .env`

export const REACT_PROJECT_ID = `// .env
REACT_APP_PROJECT_ID='YOUR_PROJECT_ID'`

export const CONSOLE_LOG_REACT_PROJECT_ID = `const { REACT_APP_PROJECT_ID } = process.env
console.log('REACT_APP_PROJECT_ID', REACT_APP_PROJECT_ID)`

export const WEB3_MODAL_REACT = `import ReactDOM from "react-dom/client";
import App from "./App";

const config = {
  projectId: YOUR_PROJECT_ID
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Web3Modal config={config} />
  </>

);`

export const GET_CONNECTED_REACT = `import { ConnectButton, useAccount } from '@web3modal/react';

function App() {
  const { connected, address } = useAccount()

  return connected ? <h1>{address ? address : 'none'} </h1> : <ConnectButton />

}

export default App;
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

export const USE_SEND_MESSAGE = `import { useSignMessage } from '@web3modal/ethereum'

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

export const USE_SEND_MESSAGE_EXAMPLE = `import { useSignMessage } from '@web3modal/react'

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

export const USE_SEND_TYPE_DATA = `import { useSignTypedData } from '@web3modal/ethereum'

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

export const USE_SEND_TYPE_DATA_EXAMPLE = `import { useSignTypedData } from '@web3modal/react'

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

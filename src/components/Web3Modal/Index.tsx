import { W3mSpinner } from '@web3modal/ui/dist/_types/src/components/w3m-spinner'

/**
 * Component
 */
export function Web3Spinner(props: JSX.IntrinsicElements['w3m-spinner']) {
  return <w3m-spinner {...props} />
}

/**
 * Types
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-spinner': Partial<W3mSpinner>
    }
  }
}

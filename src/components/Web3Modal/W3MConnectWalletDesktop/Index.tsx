import { W3mModalBackcard } from '@web3modal/ui/dist/_types/src/components/w3m-modal-backcard'
import { W3mDesktopWalletSelection } from '@web3modal/ui/dist/_types/src/partials/w3m-desktop-wallet-selection'
import { W3mMobileWalletSelection } from '@web3modal/ui/dist/_types/src/partials/w3m-mobile-wallet-selection'
import { W3mConnectWalletView } from '@web3modal/ui/dist/_types/src/views/w3m-connect-wallet-view'
import s from './styles.module.css'

export function W3mConnectWalletDesktop() {
  return (
    <div
      style={{
        width: 410,
        padding: '1em',
        borderRadius: 44
      }}
    >
      <div className={s.w3mModalContainer}>
        <w3m-modal-backcard></w3m-modal-backcard>
        <div className={s.w3mModalCards}>
          <w3m-connect-wallet-view />
        </div>
      </div>
    </div>
  )
}

/**
 * Types
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-connect-wallet-view': Partial<W3mConnectWalletView>
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-desktop-wallet-selection': Partial<W3mDesktopWalletSelection>
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-mobile-wallet-selection': Partial<W3mMobileWalletSelection>
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-modal-backcard': Partial<W3mModalBackcard>
    }
  }
}

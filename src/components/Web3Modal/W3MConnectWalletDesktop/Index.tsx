import { W3mConnectWalletView } from '@web3modal/ui/dist/_types/src/views/w3m-connect-wallet-view'
import { W3mDesktopWalletSelection } from '@web3modal/ui/dist/_types/src/partials/w3m-desktop-wallet-selection'
import { W3mMobileWalletSelection } from '@web3modal/ui/dist/_types/src/partials/w3m-mobile-wallet-selection'
import { W3mModalBackcard } from '@web3modal/ui/dist/_types/src/components/w3m-modal-backcard'
import React from 'react'
import Text from '../../Text/Index'
import s from './styles.module.css'
import { relative } from 'path'

/**
 * Component
    * Backdrop
    * Container
    * Mobile Wallet Section: LISTINGS. (Needs Listing State)
    * Desktop Wallet Section
    * View All:  LISTINGS.
    * Gateway Section
    * Get a Wallet / Learn More (Needs Theme State)
//  */

export function W3mConnectWalletDesktop() {
  //   props: JSX.IntrinsicElements['w3m-connect-wallet-view'],
  //   props2: JSX.IntrinsicElements['w3m-desktop-wallet-selection'],
  //   props3: JSX.IntrinsicElements['w3m-mobile-wallet-selection']
  return (
    <div
      style={{
        width: 400,
        position: 'relative',
        top: '0px',
        // backgroundColor: '#F1F3F3',
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

      {/* <div className={s.w3mModalContainer}>
        <w3m-modal-backcard></w3m-modal-backcard>
        <div className={s.w3mModalCards}>
          <w3m-mobile-wallet-selection />
        </div>
      </div> */}
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
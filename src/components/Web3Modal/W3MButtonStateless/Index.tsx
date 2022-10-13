import { W3mButton } from '@web3modal/ui/dist/_types/src/components/w3m-button'
import React, { useEffect } from 'react'
import s from './styles.module.css'
import { ThemeCtrl } from '../../../controllers/ThemeCtrl'
import Text from '../../Text/Index'
import useConditionalValue from '../../../hooks/useConditionalValue'

/**
 *  LIT Element React
 */

// export function W3MButtonStateless(props: JSX.IntrinsicElements['w3m-button']) {
//   return <w3m-button {...props}></w3m-button>
// }

/**
 * React Component JS
 * Best way to extend ThemeCtrl
 */

export default function W3MButtonStateless() {
  const currentColorState = ThemeCtrl.state.accentColor
  // const buttonColorCheck = (color: string) => {
  //   if (color === 'default') {
  //     return 'blue' as const
  //   }
  //   if (color === 'blue') {
  //     return 'blueNew' as const
  //   }
  //   return color
  // }

  //ToDo: Check if much scope..?
  const backgroundColor = useConditionalValue(
    [s.defaultState, s.magentaState],
    [currentColorState === 'default', currentColorState === 'magenta']
  )

  return (
    <div style={{ margin: 16 }}>
      <button className={`${s.button} ${backgroundColor}`}>
        <Text variant="text3" color="white">
          Connect Wallet
        </Text>
      </button>
    </div>
  )
}

/**
 * Types
 */
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'w3m-button': Partial<W3mButton>
//     }
//   }
// }

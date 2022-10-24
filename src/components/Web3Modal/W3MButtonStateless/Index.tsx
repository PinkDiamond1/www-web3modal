import { W3mButton } from '@web3modal/ui/dist/_types/src/components/w3m-button'
import React, { useEffect } from 'react'
import s from './styles.module.css'
import { ThemeCtrl } from '../../../controllers/ThemeCtrl'
import Text from '../../Text/Index'
import useConditionalValue from '../../../hooks/useConditionalValue'

interface Props {
  text: string
  onClick?: () => void
}

export default function W3MButtonStateless({ text, onClick }: Props) {
  const currentColorState = ThemeCtrl.state.accentColor

  //ToDo: Check if much scope..?
  const backgroundColor = useConditionalValue(
    [s.defaultState, s.magentaState],
    [currentColorState === 'default', currentColorState === 'magenta']
  )

  return (
    <div className={s.buttonContainer}>
      <button className={`${s.button} ${backgroundColor}`} onClick={onClick}>
        <Text variant="text3" color="white">
          {text}
        </Text>
      </button>
    </div>
  )
}

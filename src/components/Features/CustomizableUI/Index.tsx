import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import { ConnectButton, useConnectModal } from '@web3modal/react'
// import { useEffect, useState } from "react";
import { Web3Spinner } from '../../Web3Modal/Index'
import W3MButtonStateless from '../../Web3Modal/W3MButtonStateless/Index'
import ThemePicker from '../../ThemePicker'
import { W3mConnectWalletDesktop } from '../../Web3Modal/W3MConnectWalletDesktop/Index'
// import s from "../styles.module.css";
import checkeredImage from '../../../../public/CheckerPattern.png'
import { W3mConnectWalletMobile } from '../../Web3Modal/W3MConnectWalletMobile/Index'
import { useEffect, useState } from 'react'
import { ThemeCtrl } from '../../../controllers/ThemeCtrl'
import ColorPickerDesktop from '../../ColorPickerDesktop'

const CustomizableUI = () => {
  const { isOpen, open, close } = useConnectModal()
  const [currentAccentColor, setCurrentAccentColor] = useState('default')

  useEffect(() => {
    // console.log('ThemeCtrl', ThemeCtrl.state.accentColor)
  }, [currentAccentColor])

  const { title, image, text } = FEATURE_CARDS[0]
  //ToDo: Move CheckeredUI  / Use FEATURED_CARDS DATA
  // Import WebComponent only

  return (
    <Card color="dark" padding="none" rounded="lg">
      <div style={{ padding: '2em' }}>
        <Text variant="heading5" color="grey">
          <Text as="span" color="white" variant="heading5">
            {title}
          </Text>
          {text}
        </Text>
      </div>
      <div style={{ display: 'flex' }}></div>
      {/* backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%', */}
      <div
        style={{
          height: 746,
          background: 'linear-gradient(97.02deg, #272A2A 0%, #141414 100%)'
        }}
      >
        <div
          style={{
            backgroundImage: `url(${checkeredImage.src})`,
            height: '100%',
            borderRadius: 44,
            marginTop: '3em'
          }}
        >
          <W3MButtonStateless />
          <W3mConnectWalletDesktop />
          <W3mConnectWalletMobile />

          {/* <ThemePicker
            currentAccentColor={currentAccentColor}
            setCurrentAccentColor={setCurrentAccentColor}
          /> */}
          <ThemePicker />

          {/* <W3mConnectWalletMobile /> */}
        </div>
      </div>
    </Card>
  )
}

export default CustomizableUI

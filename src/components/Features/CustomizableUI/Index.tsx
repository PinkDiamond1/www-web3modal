import Card from '../../Card'
import Text from '../../Text/Index'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import { useConnectModal } from '@web3modal/react'
// import { useEffect, useState } from "react";
import W3MButtonStateless from '../../Web3Modal/W3MButtonStateless/Index'
import ThemePicker from '../../ThemeColorPickerMobile'
import { W3mConnectWalletDesktop } from '../../Web3Modal/W3MConnectWalletDesktop/Index'
// import s from "../styles.module.css";
import checkeredImage from '../../../../public/CheckerPattern.png'
import { W3mConnectWalletMobile } from '../../Web3Modal/W3MConnectWalletMobile/Index'
import { useEffect, useState } from 'react'
import { isMobile } from '../../../utils/Index'
import { ThemeCtrl } from '../../../controllers/ThemeCtrl'

const CustomizableUI = () => {
  const { isOpen, open, close } = useConnectModal()
  const [currentAccentColor, setCurrentAccentColor] = useState('default')

  useEffect(() => {
    setCurrentAccentColor(ThemeCtrl.state.accentColor)
    console.log('ThemeCtrl', ThemeCtrl.state.accentColor)
  }, [currentAccentColor])

  const changeTheme = (theme: string) => {
    // setCurrentAccentColor(theme)
    ThemeCtrl.setTheme(theme)
  }

  const changeAccentColor = (color: string) => {
    // setCurrentAccentColor(theme)
    // setCurrentAccentColor(color)
    ThemeCtrl.setAccentColor(color)
    // console.log('ClientCtrl 1', ConfigCtrl.state.accentColor)
    // Client.setAccentColor(color)
  }
  // const unsubscribeThemeCtrl = ThemeCtrl.subscribe(() => {
  //   setTheme(ThemeCtrl.state.theme)
  //   setAccentColor(ThemeCtrl.state.accentColor)
  // })

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
          <W3MButtonStateless text="Connect Wallet" />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80%'
            }}
          >
            {/* <w3m-modal /> */}
            <W3mConnectWalletDesktop />
            {/* {<W3mConnectWalletMobile />} */}
          </div>
          <ThemePicker
            currentAccentColor={currentAccentColor}
            setCurrentAccentColor={setCurrentAccentColor}
          />
          {/* <ThemePicker /> */}
          {/* <W3mConnectWalletMobile /> */}
        </div>
      </div>
    </Card>
  )
}

export default CustomizableUI

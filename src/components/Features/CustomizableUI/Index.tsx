import { useEffect, useState } from 'react'
import checkeredImage from '../../../../public/CheckerPattern.png'
import { ThemeCtrl } from '../../../controllers/ThemeCtrl'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import Card from '../../Card'
import Text from '../../Text/Index'
import ThemePicker from '../../ThemeColorPickerMobile'
import W3MButtonStateless from '../../Web3Modal/W3MButtonStateless/Index'
import { W3mConnectWalletDesktop } from '../../Web3Modal/W3MConnectWalletDesktop/Index'

const CustomizableUI = () => {
  const [currentAccentColor, setCurrentAccentColor] = useState('default')

  useEffect(() => {
    setCurrentAccentColor(ThemeCtrl.state.accentColor)
  }, [currentAccentColor])

  const changeTheme = (theme: typeof ThemeCtrl.state.theme) => {
    ThemeCtrl.setTheme(theme)
  }

  const changeAccentColor = (color: typeof ThemeCtrl.state.accentColor) => {
    ThemeCtrl.setAccentColor(color)
  }

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

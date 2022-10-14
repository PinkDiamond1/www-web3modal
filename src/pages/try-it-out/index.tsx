import type { NextPage } from 'next'
import Text from '../../components/Text/Index'
import NextImage from 'next/future/image'
import s from '../../styles/TryItOut.module.css'
import { AccountButton, ConnectButton, useAccount } from '@web3modal/react'
import Button from '../../components/Button/Index'
import ColorPickerDesktop from '../../components/ColorPickerDesktop/index'
import FooterRouter from '../../components/FooterRouter'
import { isMobile } from '../../utils/Index'
import checkeredImage from '../../../public/CheckerPattern.png'

const TryItOut: NextPage = () => {
  const { isConnected } = useAccount()

  // ToDo: Calculate ConnectButton position based on Size.
  const checkeredSVG = (
    <div className={s.checkeredContent}>
      <div
        className={s.checkeredContentBG}
        style={{ backgroundImage: `url(${checkeredImage.src})` }}
      >
        <div>{!isConnected ? <ConnectButton /> : <AccountButton />}</div>
      </div>
    </div>
  )

  const headerContent = (
    <div className={s.headerContent}>
      <Text variant="heading4" color="white">
        Try It Out
      </Text>
      <Button color="grey" variant="outline">
        Copy Code
      </Button>
    </div>
  )

  const mainContent = (
    <div className={s.mainContent}>
      {headerContent}
      {checkeredSVG}

      <FooterRouter
        previousRoute="/"
        previousRouteName="Introduction"
        nextRoute="/get-started"
        nextRouteName="Get Started"
        padding="md"
      />
      <div className={s.mobileColorPickerRow}>
        <button onClick={() => console.log('Color Picker Clicked')} className={s.mobileColorPicker}>
          <NextImage alt="lightIcon" src={'../icons/LightIcon.svg'} height={32} width={32} />
        </button>
      </div>
    </div>
  )

  return (
    <main className={s.main}>
      {mainContent}
      {isMobile() ? null : <ColorPickerDesktop />}
    </main>
  )
}

export default TryItOut

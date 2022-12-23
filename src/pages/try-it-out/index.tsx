import { Web3Button } from '@web3modal/react'
import type { NextPage } from 'next'
import checkeredImage from '../../../public/CheckerPattern.png'
import FooterRouter from '../../components/FooterRouter'
import MobileTryItOut from '../../components/MobileTryItOut'
import Text from '../../components/Text/Index'
import ColorPickerDesktop from '../../components/ThemeColorPickerDesktop/index'
import s from '../../styles/TryItOut.module.css'

const TryItOut: NextPage = () => {
  let isMobileDimension

  const checkeredSVG = (
    <div className={s.checkeredContent}>
      <div
        className={s.checkeredContentBG}
        style={{ backgroundImage: `url(${checkeredImage.src})` }}
      >
        <div>
          <Web3Button balance="show" />
        </div>
      </div>
    </div>
  )

  const headerContent = (
    <div className={s.headerContent}>
      <Text variant={isMobileDimension ? 'heading5' : 'heading4'} color="white">
        Try It Out
      </Text>
    </div>
  )

  const mainContent = (
    <div className={s.mainContent}>
      {headerContent}
      {checkeredSVG}

      <FooterRouter
        previousRoute="/"
        previousRouteName="Introduction"
        nextRoute="https://docs.walletconnect.com/2.0/introduction/web3modal/about"
        nextRouteName="Docs"
        padding="md"
      />
      <MobileTryItOut />
    </div>
  )

  return (
    <main className={s.main}>
      {mainContent}
      <ColorPickerDesktop />
    </main>
  )
}

export default TryItOut

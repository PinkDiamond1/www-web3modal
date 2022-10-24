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
import { useEffect, useState } from 'react'
import MobileTryItOut from '../../components/MobileTryItOut'

const TryItOut: NextPage = () => {
  const [copied, setCopied] = useState(false)
  const { isConnected } = useAccount()
  let isMobileDimension

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    isMobileDimension = isMobile()
  }, [])

  // Add the React Code for the State...
  const copyCode = () => {
    navigator.clipboard.writeText('....')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

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
      <Text variant={isMobileDimension ? 'heading5' : 'heading4'} color="white">
        Try It Out
      </Text>
      <Button
        color="grey"
        variant="outline"
        onClick={copyCode}
        iconLeft={
          copied ? (
            <NextImage src={'/icons/Tick.svg'} alt={'codeSnippet'} width={14} height={14} />
          ) : (
            <div style={{ margin: 0, padding: 0 }} />
          )
        }
      >
        {copied ? 'Copied' : 'Copy Code'}
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

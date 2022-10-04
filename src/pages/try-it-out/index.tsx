import type { NextPage } from 'next'
import Head from 'next/head'
import Text from '../../components/Text/Index'
import Image from 'next/image'
import s from '../../styles/TryItOut.module.css'
import { ConnectButton, AccountButton, useAccount } from '@web3modal/react'
import Button from '../../components/Button/Index'
import ColorPickerDesktop from '../../components/ColorPickerDesktop/Index'
import FooterRouter from '../../components/FooterRouter'

const TryItOut: NextPage = () => {
  const { connected } = useAccount()

  // Calculate ConnectButton posotion based on Size.
  const checkeredSVG = (
    <div>
      <Image
        src="/CheckeredRectangle.svg"
        alt="TryBackground"
        layout="responsive"
        width={680}
        height={510}
        // style={{ borderRadius: 44 }}
      />
      <div style={{ position: 'relative', top: -325, left: 320 }}>
        {!connected ? <ConnectButton /> : <AccountButton />}
      </div>
    </div>
  )

  const headerContent = (
    <div
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 3rem 0 3rem'
      }}
    >
      <Text variant="heading4" color="white">
        Try It Out
      </Text>
      <Button color="grey" variant="outline">
        Copy Code
      </Button>
    </div>
  )

  const LeftColumn = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2em',
        width: '75%'
      }}
    >
      {headerContent}
      {checkeredSVG}
      {/* <FooterRouter /> */}
    </div>
  )

  return (
    <main className={s.main}>
      {LeftColumn}
      <ColorPickerDesktop />
    </main>
  )
}

export default TryItOut

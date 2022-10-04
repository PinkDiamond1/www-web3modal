import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import s from '../styles/Home.module.css'
import { ConnectButton } from '@web3modal/react'
import Button from '../components/Button/Index'
import Text from '../components/Text/Index'
import Card from '../components/Card'
import MultiChain from '../components/Features/MultiChain'
import Interface from '../components/Features/Interface/Index'
import CustomizableUI from '../components/Features/CustomizableUI/Index'
import Wallets from '../components/Features/Wallets'
import FEATURE_CARDS from '../data/FEATURE_CARDS'
import RichFeatures from '../components/Features/RichFeatures/Index'
import TermsConditions from '../components/Features/TermsConditions/Index'
import Frameworks from '../components/Features/Frameworks/Index'
import RPC from '../components/Features/RPC/Index'
import V2Ready from '../components/Features/V2Ready/Index'
import Community from '../components/Community/Index'
import Video from '../components/Video/Index'
import { useEffect } from 'react'
import { ThemeCtrl } from '../controllers/ThemeCtrl'
import { subscribe } from 'valtio'

const Home: NextPage = () => {
  useEffect(() => {
    unsubscribe()
  }, [])

  // Subscribe to all state changes
  const unsubscribe = subscribe(ThemeCtrl.state, () =>
    console.log('state has changed to', ThemeCtrl.state)
  )
  // Unsubscribe by calling the result
  unsubscribe()

  const textContent = (
    <div style={{ padding: '2em' }}>
      <Text variant="heading4" color="white">
        Web3Modal is an elegantly simple yet powerful library that helps you manage your multi-chain
        wallet connection flows, all in one place.
        <Text as="span" color="grey" variant="heading4">
          {''} Designed with both developers and end users in mind, it is easy to integrate and
          customize, bringing to life a sleek and unique experience.
        </Text>
      </Text>
      <div style={{ display: 'flex', paddingTop: '2em' }}>
        <Button
          variant="fill"
          color="blue"
          // iconRight={
          //   <Image
          //     src="/Chevron.svg"
          //     width={20}
          //     height={20}
          //     alt="arrow right"
          //   />
          // }
          style={{ marginRight: 10 }}
        >
          GET STARTED
        </Button>
        <Button variant="fill" color="grey">
          TRY IT OUT NOW
        </Button>
      </div>
    </div>
  )
  return (
    <div className={s.container}>
      <Head>
        <title>Web3Modal</title>
        <meta name="description" content="Web3Modal Documentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <Video />
        <div style={{ padding: '0 2em 0 2em' }}>
          {textContent}

          {/* <CustomizableUI /> */}

          <div className={s.cardRow}>
            <Interface />
            <MultiChain />
          </div>

          <div className={s.cardRow}>
            <Wallets />
            <RichFeatures />
          </div>

          <div className={s.cardRow}>
            <TermsConditions />
            <Frameworks />
          </div>

          <div className={s.cardRow}>
            <RPC />
            <V2Ready />
          </div>

          <Community />
        </div>
      </main>
    </div>
  )
}

export default Home

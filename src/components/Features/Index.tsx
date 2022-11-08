import MultiChain from './MultiChain/index'
import Interface from '../../components/Features/Interface/Index'
import Wallets from '../../components/Features/Wallets'
import RichFeatures from '../../components/Features/RichFeatures/Index'
import TermsConditions from '../../components/Features/TermsConditions/Index'
import Frameworks from '../../components/Features/Frameworks/Index'
import RPC from '../../components/Features/RPC/Index'
import V2Ready from '../../components/Features/V2Ready/Index'

import s from '../../styles/Home.module.css'
import { isMobile } from '../../utils/Index'
import { useEffect, useState } from 'react'

const FeatureCards = () => {
  const mobileDevice = isMobile()

  return (
    <>
      <div className={s.cardRow}>
        {mobileDevice ? (
          <>
            <MultiChain />
            <Interface />
          </>
        ) : (
          <>
            <Interface />
            <MultiChain />
          </>
        )}
      </div>

      <div className={s.cardRow}>
        <Wallets />
        <RichFeatures />
      </div>

      <div className={s.cardRow}>
        {mobileDevice ? (
          <>
            <Frameworks />
            <TermsConditions />
          </>
        ) : (
          <>
            <TermsConditions />
            <Frameworks />
          </>
        )}
      </div>

      <div className={s.cardRow}>
        <RPC />
        <V2Ready />
      </div>
    </>
  )
}

export default FeatureCards

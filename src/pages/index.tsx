import type { NextPage } from 'next'
import Head from 'next/head'
import s from '../styles/Home.module.css'

import Community from '../components/Community/Index'
import FooterRouter from '../components/FooterRouter'
import IntroText from '../components/IntroText/Index'
import FeatureCards from '../components/Features/Index'
import Video from '../components/Video/Index'
import AlphaBanner from '../components/AlphaBanner/Index'
// import CustomizableUI from '../components/Features/CustomizableUI/Index'
// import { isMobile } from '../utils/Index'

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <main className={s.main}>
        {/* <Video /> */}
        <div className={s.mainContent}>
          <IntroText />
          {/* <CustomizableUI /> */}
          <FeatureCards />
          <Community />
          <div className={s.mobileFooter}>
            <FooterRouter nextRoute="/try-it-out" nextRouteName="Try It Out" padding="lg" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Community from '../components/Community/Index'
import FeatureCards from '../components/Features/Index'
import FooterRouter from '../components/FooterRouter'
import IntroText from '../components/IntroText/Index'
import Video from '../components/Video/Index'
import s from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <main className={s.main}>
        <Video />
        <div className={s.mainContent}>
          <IntroText />
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

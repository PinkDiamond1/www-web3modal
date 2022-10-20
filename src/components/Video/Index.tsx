import { isMobile } from '../../utils/Index'
import s from './styles.module.css'

const Video = () => (
  <div className={s.videoWrapper}>
    <video
      muted
      autoPlay
      loop
      width={isMobile() ? window.innerWidth : 1000}
      height={isMobile() ? window.innerWidth : 562}
    >
      <source src="/web3modal.mp4" type="video/mp4" />
    </video>
  </div>
)

export default Video

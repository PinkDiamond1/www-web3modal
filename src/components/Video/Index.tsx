import { isMobile } from '../../utils/Index'
import s from './styles.module.css'

const Video = () => (
  <div className={s.videoWrapper}>
    <video
      muted
      autoPlay
      loop
      // controls
      width={isMobile() ? 500 : 1000}
      height={isMobile() ? 500 : 600}
      // style={{ borderRadius: isMobile() ? 0 : 44 }}
    >
      <source src="/web3modal.mp4" type="video/mp4" />
    </video>
  </div>
)

export default Video

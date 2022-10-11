import s from './styles.module.css'

const Video = () => (
  <div className={s.videoWrapper}>
    <video
      muted
      autoPlay
      // controls
      width={1000}
      height={602}
      style={{ borderRadius: 44 }}
    >
      <source src="/web3modal.mp4" type="video/mp4" />
    </video>
  </div>
)

export default Video

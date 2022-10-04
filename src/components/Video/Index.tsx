import s from './styles.module.css'

const Video = () => (
  <div className={s.videoWrapper}>
    <video
      muted
      autoPlay
      // controls
      width={1000}
      height={562}
      style={{ borderRadius: 44, paddingBottom: '2em' }}
    >
      <source src="/web3modal.mp4" type="video/mp4" />
    </video>
  </div>
)

export default Video

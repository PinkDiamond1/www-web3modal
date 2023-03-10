import s from './styles.module.css'

export default function Video() {
  return (
    <div className={s.videoWrapper}>
      <video playsInline muted autoPlay loop>
        <source src="/modalPreview.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

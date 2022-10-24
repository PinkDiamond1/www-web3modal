import { useEffect, useState } from 'react'
import { isMobile } from '../../utils/Index'
import s from './styles.module.css'

export default function Video() {
  const [width, setWidth] = useState(0) // default width, detect on server.
  let WINDOW_WIDTH
  let WINDOW_HEIGHT
  // const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)

      // detect window screen width function
    }
    // window.addEventListener('resize', handleResize)
    // return () => window.removeEventListener('resize', handleResize)
  }, [width])

  return (
    <div className={s.videoWrapper}>
      <video
        muted
        autoPlay
        loop
        width={isMobile() ? width : 1000}
        height={isMobile() ? width : 562}
      >
        <source src="/web3modal.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

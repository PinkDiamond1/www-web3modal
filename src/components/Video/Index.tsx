import { useEffect, useState } from 'react'
import { isMobile } from '../../utils/Index'
import s from './styles.module.css'

export default function Video() {
  const [width, setWidth] = useState(0) // default width, detect on server.
  // let WINDOW_WIDTH
  // let WINDOW_HEIGHT
  // const handleResize = () => setWidth(window.innerWidth)

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setWidth(window.innerWidth)
  //     console.log('width', width)
  //     if (width > 1000 && width < 1500) {
  //       setWidth(1200)
  //     }
  //     if (width > 1000 && width < 1500) {
  //       setWidth(1200)
  //     }
  //     // detect window screen width function
  //   }
  //   // window.addEventListener('resize', handleResize)
  //   // return () => window.removeEventListener('resize', handleResize)
  // }, [width])

  return (
    <div className={s.videoWrapper}>
      <video
        muted
        autoPlay
        loop
        //ToDo: figure out...
        width={isMobile() ? window.innerWidth : 1000}
        height={isMobile() ? window.innerWidth : 562}
      >
        <source src="/web3modal.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

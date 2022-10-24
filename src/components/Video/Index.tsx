import { useEffect, useState } from 'react'
import { isMobile } from '../../utils/Index'
import s from './styles.module.css'

export default function Video() {
  const mobile = isMobile()

  return (
    <div className={s.videoWrapper}>
      <video
        muted
        autoPlay
        loop
        //ToDo: figure out...
        width={mobile ? 500 : '100%'}
        height={mobile ? 600 : 562}
      >
        <source src="/web3modal.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { isMobile } from '../../utils/Index'
import s from './styles.module.css'

export default function Video() {
  return (
    <div className={s.videoWrapper}>
      <video
        muted
        autoPlay
        loop
        //ToDo: figure out...
        width={isMobile() ? window.innerWidth : '100%'}
        height={isMobile() ? window.innerHeight : 562}
      >
        <source src="/web3modal.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

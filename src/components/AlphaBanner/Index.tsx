import { useRouter } from 'next/router'
import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react'
import Button from '../Button/Index'
import Text from '../Text/Index'
import s from './styles.module.css'

const AlphaBanner = ({}) => {
  const [closeBanner, setCloseBanner] = useState(false)

  if (closeBanner) {
    return null
  }

  return (
    <div className={s.bannerContainer}>
      <Text variant="text3" color="white">
        🚧
        <span style={{ marginLeft: 10 }} /> ALPHA RELEASE <span style={{ marginRight: 10 }} /> 🚧
      </Text>
      <p
        style={{ position: 'absolute', right: 10, top: -10, cursor: 'pointer' }}
        onClick={() => {
          setCloseBanner(true)
        }}
      >
        X
      </p>
    </div>
  )
}

export default AlphaBanner

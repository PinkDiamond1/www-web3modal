import { useEffect, useState } from 'react'
import Text from '../Text/Index'
import s from './styles.module.css'

const AlphaBanner = ({}) => {
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE')
    if (data !== null) setShowBanner(JSON.parse(data))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner))
  }, [showBanner])

  return (
    <div>
      {showBanner && (
        <div className={s.bannerContainer}>
          <Text variant="text3" color="blue">
            🚧
            <span style={{ marginLeft: 10 }} /> Web3Modal is in{' '}
            <span style={{ color: '#99CBFF' }}>public alpha </span> and constantly being improved{' '}
            <span style={{ marginRight: 10 }} /> 🚧
          </Text>
          <p
            style={{ position: 'absolute', right: 10, top: -10, cursor: 'pointer' }}
            onClick={() => {
              setShowBanner(false)
            }}
          >
            X
          </p>
        </div>
      )}
    </div>
  )
}

export default AlphaBanner

import { Dispatch, ReactElement, SetStateAction } from 'react'
import Button from '../Button/Index'
import Text from '../Text/Index'

interface Props {
  setCloseBanner: Dispatch<SetStateAction<boolean>>
}

const AlphaBanner = (props: Props) => {
  const { setCloseBanner } = props

  return (
    <div
      style={{
        height: 30,
        background: '#19324D',
        width: '100vw',
        border: '1px solid #0F4B8A',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text variant="text3" color="white">
        🚧
        <span style={{ marginLeft: 10 }} /> ALPHA RELEASE <span style={{ marginRight: 10 }} /> 🚧
      </Text>
      {/* <Button variant="fill" color="blueNew" onClick={() => { setCloseBanner(false) }} /> */}
    </div>
  )
}

export default AlphaBanner

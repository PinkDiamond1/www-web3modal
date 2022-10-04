import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import Button from '../../Button/Index'

const Interface = () => {
  const { title, image, text } = FEATURE_CARDS[3]

  return (
    <Card color="dark" padding="none" rounded="md" width="md">
      <div style={{ padding: '2rem', border: "1px solid red" }}>
        <Text variant="heading4" color="white">
          {title}
        </Text>
      </div>
      <Image src={image} alt={title} layout="responsive" width={300} height={274} />
      <div style={{ padding: 24 }}>
        <Text color="grey" variant="heading5">
          {text}
        </Text>
        {/* <div style={{ margin: 12 }}>
          <Button variant="fill" color="grey">
            POWERED BY WALLETCONNECT
          </Button>
        </div> */}
      </div>
    </Card>
  )
}

export default Interface

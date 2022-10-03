import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import Button from '../../Button/Index'

const Interface = () => {
  const { title, image, text } = FEATURE_CARDS[3]

  return (
    <Card color="dark" padding="none" rounded="lg" width="md">
      <div style={{ padding: '2rem' }}>
        <Text variant="heading5" color="white">
          {title}
        </Text>
      </div>
      <Image src={image} alt={title} layout="responsive" width={300} height={274} />
      <div style={{ padding: 30 }}>
        <Text color="grey" variant="heading5">
          {text}
        </Text>
        <div style={{ margin: 12 }}>
          <Button variant="fill" color="grey">
            POWERED BY WALLETCONNECT
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default Interface

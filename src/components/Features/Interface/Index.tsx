import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'

const Interface = () => {
  const { title, image, text } = FEATURE_CARDS[1]

  return (
    <Card color="dark" padding="none" rounded="lg" width="lg">
      <div style={{ padding: '2rem' }}>
        <Text variant="heading5" color="grey">
          <Text as="span" color="white" variant="heading5">
            {title}
          </Text>
          {text}
        </Text>
      </div>
      <Image src={image} layout="responsive" alt={title} width={440} height={262} />
    </Card>
  )
}

export default Interface

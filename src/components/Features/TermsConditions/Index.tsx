import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'

const TermsConditions = () => {
  const { title, image, text } = FEATURE_CARDS[5]

  return (
    <Card color="dark" padding="none" rounded="md" width="lg">
      <div style={{ padding: '3rem' }}>
        <Text variant="heading5" color="grey">
          <Text as="span" color="white" variant="heading5">
            {title}
          </Text>
          {text}
        </Text>
      </div>
      <Image
        src={image}
        alt={title}
        layout="responsive"
        width={472}
        height={290}
        style={{ borderRadius: '0 0 54px 54px', position: 'relative' }}
      />
    </Card>
  )
}

export default TermsConditions

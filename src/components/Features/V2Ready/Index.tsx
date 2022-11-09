import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import Card from '../../Card'
import Text from '../../Text/Index'
import s from './styles.module.css'

const V2Ready = () => {
  const { title, image, text } = FEATURE_CARDS[8]

  return (
    <Card color="dark" padding="none" rounded="md" width="lg">
      <div className={s.textContainer}>
        <Text variant="heading5" color="grey">
          <Text as="span" color="white" variant="heading5">
            {title}
          </Text>
          {text}
        </Text>
      </div>
      <Image
        priority={true}
        src={image}
        alt={title}
        width="0"
        height="0"
        className={s.imageContainer}
      />
    </Card>
  )
}

export default V2Ready

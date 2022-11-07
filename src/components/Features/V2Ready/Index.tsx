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
      <div className={s.imageContainer}>
        <Image priority={true} src={image} alt={title} width={350} height={220} />
      </div>
    </Card>
  )
}

export default V2Ready

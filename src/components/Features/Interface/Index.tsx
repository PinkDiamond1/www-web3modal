import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import s from './styles.module.css'

const Interface = () => {
  const { title, image, text } = FEATURE_CARDS[1]

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
      <div className={s.purpleCard}>
        <div className={s.interfaceCard}>
          <Image src={image} alt={title} layout="responsive" width={392} height={263} />
        </div>
      </div>
    </Card>
  )
}

export default Interface

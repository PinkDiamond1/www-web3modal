import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import s from './styles.module.css'

const Frameworks = () => {
  const { title, image, text } = FEATURE_CARDS[6]

  return (
    <Card color="dark" padding="none" rounded="md" width="md">
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
        className={s.imageWrapper}
      />
    </Card>
  )
}

export default Frameworks

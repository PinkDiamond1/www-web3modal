import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import s from './styles.module.css'
import { isMobile } from '../../../utils/Index'

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
      <div className={s.imageWrapper}>
        <Image
          priority={true}
          src={image}
          alt={title}
          width={isMobile() ? 350 : 350}
          height={isMobile() ? 300 : 325}
        />
      </div>
    </Card>
  )
}

export default Frameworks

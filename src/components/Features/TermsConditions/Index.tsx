import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import s from './styles.module.css'
import { isMobile } from '../../../utils/Index'

const TermsConditions = () => {
  const { title, image, text } = FEATURE_CARDS[5]

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
      <div className={s.greenCard}>
        <div className={s.interfaceCard}>
          <Image
            src={image}
            alt={title}
            width={isMobile() ? 430 : 392}
            height={isMobile() ? 300 : 280}
          />
        </div>
      </div>
    </Card>
  )
}

export default TermsConditions

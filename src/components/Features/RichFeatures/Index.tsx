import NextImage from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import { isMobile } from '../../../utils/Index'
import Card from '../../Card'
import Text from '../../Text/Index'
import s from './styles.module.css'

const RichFeatures = () => {
  const { title, image, text } = FEATURE_CARDS[4]

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

      <div className={s.pinkCard}>
        <div className={s.accountButtonCard}>
          <NextImage src="/icons/AccountButton.png" alt={title} width={259} height={40} />
        </div>
        <div className={s.interfaceCard}>
          <NextImage
            priority={true}
            src={image}
            alt={title}
            width={isMobile() ? 320 : 390}
            height={285}
          />
        </div>
      </div>
    </Card>
  )
}

export default RichFeatures

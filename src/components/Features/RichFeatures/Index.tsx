import Card from '../../Card'
import Text from '../../Text/Index'
import NextImage from 'next/future/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import s from './styles.module.css'
import { isMobile } from '../../../utils/Index'

const RichFeatures = () => {
  const { title, image, text } = FEATURE_CARDS[4]

  const checkMobileImageWidth = () => {
    if (window.innerWidth < 400 && window.innerWidth > 300) {
      return 420
    }
    if (window.innerWidth < 500 && window.innerWidth > 400) {
      return 440
    }
    return 392
  }

  const checkMobileImageHeight = () => {
    if (window.innerWidth < 400 && window.innerWidth > 300) {
      return 300
    }
    if (window.innerWidth < 500 && window.innerWidth > 400) {
      return 300
    }
    return 290
  }

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
            // width={isMobile() ? 390 : 390}
            // height={isMobile() ? 285 : 285}
            width={390}
            height={285}
          />
        </div>
      </div>
    </Card>
  )
}

export default RichFeatures

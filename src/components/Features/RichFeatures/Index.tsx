import NextImage from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
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
        <NextImage
          src="/icons/AccountButton.png"
          alt={title}
          width="0"
          height="0"
          className={s.accountButtonImage}
        />
        <NextImage
          priority={true}
          src={image}
          alt={title}
          width="0"
          height="0"
          className={s.interfaceImage}
        />
      </div>
    </Card>
  )
}

export default RichFeatures

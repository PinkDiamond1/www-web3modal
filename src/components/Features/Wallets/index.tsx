import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import Card from '../../Card'
import Text from '../../Text/Index'
import s from './styles.module.css'

const Interface = () => {
  const { title, image, text } = FEATURE_CARDS[3]

  return (
    <Card color="dark" padding="none" rounded="md" width="md">
      <div className={s.walletTextContainer}>
        <Text variant="heading4" color="white" className={s.noHeadingMargin}>
          {title}
        </Text>
      </div>
      <Image src={image} alt={title} width="0" height="0" className={s.walletImage} />
      <div className={s.bottomTextButtonContainer}>
        <Text color="grey" variant="heading5">
          {text}
        </Text>
        <Image
          src={'/icons/WalletConnectCloud.png'}
          priority={true}
          alt={title}
          className={s.poweredByWCImage}
          width="0"
          height="0"
        />
      </div>
    </Card>
  )
}

export default Interface

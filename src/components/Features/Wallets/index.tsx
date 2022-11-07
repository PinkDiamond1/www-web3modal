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
      <Image src={image} alt={title} width={300} height={250} />
      <div className={s.bottomTextButtonContainer}>
        <Text color="grey" variant="heading5">
          {text}
        </Text>
        <div className={s.poweredByWC}>
          <Image
            src={'/icons/WalletConnectCloud.png'}
            priority={true}
            alt={title}
            width={240}
            height={40}
          />
        </div>
      </div>
    </Card>
  )
}

export default Interface

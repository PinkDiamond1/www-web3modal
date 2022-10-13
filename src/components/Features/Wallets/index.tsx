import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import Button from '../../Button/Index'
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
      <Image src={image} alt={title} layout="responsive" width={300} height={250} />
      <div className={s.bottomTextButtonContainer}>
        <Text color="grey" variant="heading5">
          {text}
        </Text>
        <div className={s.poweredByWC}>
          {/* <Image src={"/icons/WalletConnectCloud.png"} layout="responsive" alt={title} width={228} height={40} /> */}
          <Image
            src={'/icons/WalletConnectCloud.png'}
            layout="responsive"
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

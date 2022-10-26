import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import s from './styles.module.css'
import { isMobile } from '../../../utils/Index'

const RPC = () => {
  const { title, image, text } = FEATURE_CARDS[7]

  return (
    <Card color="dark" padding="none" rounded="md" width="md">
      <div className={s.rpcContainer}>
        <Text variant="heading5" color="grey">
          <Text as="span" color="white" variant="heading5">
            {title}
          </Text>
          {text}
        </Text>
      </div>
      <div className={s.imageContainer}>
        <Image
          priority={true}
          src={image}
          alt={title}
          layout="responsive"
          width={isMobile() ? 200 : 250}
          height={isMobile() ? 150 : 200}
        />
      </div>
    </Card>
  )
}

export default RPC

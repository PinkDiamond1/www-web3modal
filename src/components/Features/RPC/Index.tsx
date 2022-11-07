import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import { isMobile } from '../../../utils/Index'
import Card from '../../Card'
import Text from '../../Text/Index'
import s from './styles.module.css'

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
      <Image
        priority={true}
        src={image}
        alt={title}
        width="0"
        height="0"
        className={s.imageContainer}
        // width={isMobile() ? 200 : 250}
        // height={isMobile() ? 150 : 200}
      />
    </Card>
  )
}

export default RPC

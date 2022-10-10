import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import s from './styles.module.css'

const TermsConditions = () => {
  const { title, image, text } = FEATURE_CARDS[5]

  return (
    <Card color="dark" padding="none" rounded="md" width="lg">
      <div style={{ padding: '2rem' }}>
        <Text variant="heading5" color="grey">
          <Text as="span" color="white" variant="heading5">
            {title}
          </Text>
          {text}
        </Text>
      </div>
      <div className={s.greenCard}>
        <div className={s.interfaceCard}>
          <Image src={image} alt={title} width={392} height={270} />
        </div>
      </div>
    </Card>
  )
}

export default TermsConditions

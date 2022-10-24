import Card from '../Card'
import Text from '../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../data/FEATURE_CARDS'
import { SOCIAL_ICON_COMMUNITY } from '../../data/SOCIAL_ICON'
import SocialIconCommunity from '../SocialLinksCommunity/Index'
import s from './styles.module.css'

export default function Community() {
  const { title, image, text } = FEATURE_CARDS[9]

  return (
    <div className={s.marginContainer}>
      <Card color="dark" padding="none" rounded="md">
        <div className={s.textContainer}>
          <Text variant="heading4" color="white">
            {title}
          </Text>
          <div style={{ marginTop: 10 }}>
            <Text variant="text2" color="grey">
              {text}
            </Text>
          </div>

          <div className={s.buttonContainer}>
            {SOCIAL_ICON_COMMUNITY.map(data => (
              <SocialIconCommunity
                image={data.image}
                fill={data.fill}
                color={data.color}
                uri={data.uri}
                title={data.title}
                description={data.description}
                key={data.title}
              />
            ))}
          </div>
        </div>
        <div style={{ borderRadius: 44, overflow: 'hidden', position: 'relative', top: 10 }}>
          <Image layout="responsive" src={image} alt={title} width={800} height={220} />
        </div>
      </Card>
    </div>
  )
}

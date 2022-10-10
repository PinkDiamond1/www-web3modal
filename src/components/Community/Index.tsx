import Card from '../Card'
import Text from '../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../data/FEATURE_CARDS'
import Button from '../Button/Index'
import { SOCIAL_ICON, SOCIAL_ICON_COMMUNITY } from '../../data/SOCIAL_ICON'
import SocialIconCommunity from '../SocialLinksCommunity/Index'

export default function Community() {
  const { title, image, text } = FEATURE_CARDS[9]

  return (
    <div style={{ marginTop: "7rem" }}>
      <Card color="dark" padding="none" rounded="lg">
        <div style={{ padding: '2rem' }}>
          <Text variant="heading4" color="white">
            {title}
          </Text>
          <Text variant="text2" color="grey">
            {text}
          </Text>
          <div style={{ display: 'flex', padding: '1rem 0 1rem 0' }}>
            {SOCIAL_ICON_COMMUNITY.map((data) => (
              <SocialIconCommunity image={data.image} fill={data.fill} color={data.color} uri={data.uri} title={data.title} description={data.description} />
            ))}
          </div>
        </div>
        <Image src={image} alt={title} width={800} height={220} style={{ borderRadius: 54 }} />
      </Card>
    </div>

  )
}

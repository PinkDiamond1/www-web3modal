import Button from '../Button/Index'
import Image from 'next/image'
import useConditionalValue from '../../hooks/useConditionalValue'
import s from './styles.module.css'
import { IProps as TextProps } from '../Text/Index'

interface SocialIconCommunityProps {
  title: string
  image: string
  color: string
  description: string
  uri: string
  fill: string
  sidebarIcon?: boolean
}

export default function SocialIconCommunity({
  description,
  color,
  fill,
  image,
  title,
  uri,
  sidebarIcon
}: SocialIconCommunityProps) {
  const svgFillCheck = useConditionalValue(
    [s.fillBlack, s.fillWhite],
    [fill === 'blackWhite' && sidebarIcon === false, fill !== 'blackWhite']
  )

  return (
    <div className={s.mobileMargin}>
      <a href={uri} target="_blank" key={title} rel="noreferrer">
        <Button
          variant="fill"
          color={color as TextProps['color']}
          iconLeft={
            <Image className={svgFillCheck} src={image} width={22} height={17} alt={title} />
          }
        >
          {description}
        </Button>
      </a>
    </div>
  )
}

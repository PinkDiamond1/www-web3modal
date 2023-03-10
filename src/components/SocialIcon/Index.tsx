import Image from 'next/image'
import s from './styles.module.css'

interface SocialIconProps {
  title: string
  image: string
  uri: string
}

export default function SocialIcon({ image, title, uri }: SocialIconProps) {
  return (
    <a href={uri} target="_blank" key={title} rel="noreferrer">
      <div className={s.socialCircle}>
        <Image
          priority={true}
          alt={title}
          src={image}
          width={24}
          height={24}
          className={title === 'Github' ? s.fillWhite : s.fillNone}
        />
      </div>
    </a>
  )
}

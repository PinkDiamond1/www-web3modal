
import s from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { SOCIAL_ICON } from '../../data/SOCIAL_ICON'

interface SocialIconProps {
    title: string
    image: string
    uri: string
}

export default function SocialIcon({ image, title, uri }: SocialIconProps) {

    return (
        <a href={uri} target="_blank" key={title}>
            <div className={s.socialCircle}>
                <Image src={image} layout='responsive' width={24} height={24} />
            </div>
        </a>

    )
}

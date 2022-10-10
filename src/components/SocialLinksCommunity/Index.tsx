
import Button from '../Button/Index'
import Image from 'next/image'
import useConditionalValue from '../../hooks/useConditionalValue'
import s from './styles.module.css'

interface SocialIconCommunityProps {
    title: string
    image: string
    color: string
    description: string
    uri: string
    fill: string
}

export default function SocialIconCommunity({ description, color, fill, image, title, uri }: SocialIconCommunityProps) {


    const svgFillCheck = useConditionalValue(
        [s.fillBlack, s.fillWhite],
        [
            (fill === 'blackWhite'),
            (fill !== 'blackWhite'),
        ]
    )

    return (
        //ToDo fix color string IColor.props
        <a href={uri} target="_blank" key={title}>
            <Button variant="fill" color={color} style={{ marginRight: 10 }} iconLeft={
                <Image
                    className={s.fillBlack}
                    src={image}
                    width={22}
                    height={17}
                    alt={title}
                />} >
                {description}
            </Button>
        </a>

    )
}

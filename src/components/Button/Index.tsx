import useConditionalValue from '../../hooks/useConditionalValue'
import { ButtonHTMLAttributes } from 'react'
import s from './styles.module.css'
import Text, { IProps as TextProps } from '../../components/Text/Index'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'fill' | 'ghost' | 'outline'
  color:
    | 'blue'
    | 'cyan'
    | 'grey'
    | 'green'
    | 'magenta'
    | 'orange'
    | 'purple'
    | 'teal'
    | 'white'
    | 'blackWhite'
    | 'black'
    | 'blueNew'
    | 'pink'
  className?: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  textVariant?: string
  accentButton?: boolean
  // loading?: boolean;
}

export default function Button({
  color,
  children,
  className,
  iconLeft,
  iconRight,
  variant,
  textVariant,
  accentButton,
  ...props
}: IProps) {
  const textColor = useConditionalValue<TextProps['color']>(
    ['black', 'white', 'blue', 'cyan'],
    [
      (color === 'grey' && variant === 'fill') || (color === 'blackWhite' && variant === 'fill'),
      (color === 'blue' && variant === 'fill') ||
        (color === 'cyan' && variant === 'fill') ||
        (color === 'grey' && variant === 'outline') ||
        (color === 'grey' && variant === 'ghost'),
      (color === 'blue' && variant === 'outline') || (color === 'blue' && variant === 'ghost'),
      color === 'cyan'
    ]
  )

  const variantClass = useConditionalValue(
    [
      s.fillGrey,
      s.fillBlue,
      s.fillGreen,
      s.fillMagenta,
      s.fillOrange,
      s.fillPurple,
      s.fillTeal,
      s.fillWhite,
      s.fillBlueNew,
      s.fillCyan,
      s.outlineGrey,
      s.outlineBlue,
      s.ghost
    ],
    [
      color === 'grey' && variant === 'fill',
      color === 'blue' && variant === 'fill',
      color === 'green' && variant === 'fill',
      color === 'magenta' && variant === 'fill',
      color === 'orange' && variant === 'fill',
      color === 'purple' && variant === 'fill',
      color === 'teal' && variant === 'fill',
      color === 'blackWhite' && variant === 'fill',
      color === 'blueNew' && variant === 'fill',
      color === 'cyan' && variant === 'fill',
      color === 'grey' && variant === 'outline',
      color === 'blue' && variant === 'outline',
      variant === 'ghost'
    ]
  )

  const buttonType = accentButton ? s.accentButton : s.button

  const textIconLeftClass = iconLeft ? s.textIconLeft : undefined
  const textIconRightClass = iconRight ? s.textIconRight : undefined

  return (
    <button {...props} className={`${buttonType} ${variantClass} ${className ?? ''}`}>
      {iconLeft}
      <Text
        as="span"
        variant="anchor2"
        // variant={textVariant ?? "anchor2"}
        color={textColor}
        className={textIconLeftClass ?? textIconRightClass}
      >
        {children}
      </Text>
      {iconRight}
    </button>
  )
}

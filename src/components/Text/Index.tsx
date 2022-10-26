import useConditionalValue from '../../hooks/useConditionalValue'
import { createElement, ReactHTML, ReactNode } from 'react'
import s from './styles.module.css'

const mappings: Record<IProps['variant'], keyof ReactHTML> = {
  anchor1: 'a',
  anchor2: 'a',
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6',
  numeric3: 'span',
  numeric4: 'span',
  numeric5: 'span',
  text1: 'p',
  text2: 'p',
  text3: 'p',
  text4: 'p'
}

export interface IProps {
  variant:
    | 'anchor1'
    | 'anchor2'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'numeric3'
    | 'numeric4'
    | 'numeric5'
    | 'text1'
    | 'text2'
    | 'text3'
    | 'text4'
  children: ReactNode | number | string
  color:
    | 'black'
    | 'blue'
    | 'cyan'
    | 'green'
    | 'grey'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white'
    | 'magenta'
    | 'teal'
    | 'blackWhite'
    | 'blueNew'
  as?: 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
  href?: string
  target?: '_blank'
  rel?: 'noopener noreferrer'
  id?: string
  textTransform?: 'uppercase' | 'capitalize'
}

export default function Text({
  variant,
  children,
  as,
  color,
  className,
  href,
  id,
  target,
  textTransform,
  rel
}: IProps) {
  const baseClass = useConditionalValue(
    [s.anchor, s.heading, s.numeric, s.text],
    [
      variant.includes('anchor'),
      variant.includes('heading'),
      variant.includes('numeric'),
      variant.includes('text')
    ]
  )

  const colorClass = useConditionalValue(
    [
      s.colorWhite,
      s.colorBlack,
      s.colorBlue,
      s.colorGrey,
      s.colorGreen,
      s.colorOrange,
      s.colorCyan,
      s.colorPink,
      s.colorPurple
    ],
    [
      color === 'white',
      color === 'black',
      color === 'blue',
      color === 'grey',
      color === 'green',
      color === 'orange',
      color === 'cyan',
      color === 'pink',
      color === 'purple'
    ]
  )

  const variantClass = s[variant] ?? ''

  const capitalizedClass = useConditionalValue(
    [s.lowerCase, s.upperCase],
    [textTransform === 'capitalize', textTransform === 'uppercase']
  )

  // eslint-disable-next-line react/no-children-prop
  return createElement(as ?? mappings[variant], {
    children,
    href,
    target,
    rel,
    className: `${baseClass} ${variantClass} ${colorClass} ${className ?? ''} ${capitalizedClass}`,
    id
  })
}

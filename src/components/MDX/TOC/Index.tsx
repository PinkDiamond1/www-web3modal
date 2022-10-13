import { ReactNode } from 'react'
import Text from '../../Text/Index'
import s from './styles.module.css'

interface Props {
  children?: ReactNode
}

export default function MDXToCSection({ children, ...props }: Props) {
  return (
    <div className={s.container}>
      <Text variant="heading6" color="white">
        On this Page
      </Text>
      {children}
    </div>
  )
}

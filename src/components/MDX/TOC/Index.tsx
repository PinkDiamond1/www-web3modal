import { ReactNode } from 'react'
import Text from '../../Text/Index'
import s from './styles.module.css'

interface Props {
  children?: ReactNode
}

export default function MDXToCSection({ children, ...props }: Props) {
  return (
    <div style={{ width: '25%', background: '#171717', padding: '3em 0 0 1em' }}>
      <Text variant="heading6" color="white">
        On this Page
      </Text>
      {children}
    </div>
  )
}

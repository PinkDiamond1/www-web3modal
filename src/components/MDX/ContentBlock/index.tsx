import { ReactNode } from 'react'
import s from './styles.module.css'

interface Props {
  children?: ReactNode
}

export default function MDXContentBlock({ children, ...props }: Props) {
  return <div className={s.container}>{children}</div>
}

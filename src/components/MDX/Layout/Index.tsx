import { ReactNode } from 'react'
import s from './styles.module.css'

interface Props {
  children?: ReactNode
}

export default function MDXLayout({ children }: Props) {
  return <div className={s.container}>{children}</div>
}

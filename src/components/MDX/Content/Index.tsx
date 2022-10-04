import { ReactNode } from 'react'
import s from './styles.module.css'

interface Props {
  children?: ReactNode
}

export default function MDXContentSection({ children, ...props }: Props) {

  return (
    <div style={{width: "75%", padding: "3em 3em 0 3em"}}>
      {children}
    </div>
  )
}

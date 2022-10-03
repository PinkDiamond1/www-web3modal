import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Button from '../Button/Index'
import s from './styles.module.css'

interface Props {
  children?: ReactNode
}

export default function FooterRouter({ children, ...props }: Props) {
  const router = useRouter()

  return (
    <div className={s.container}>
      <Button variant="fill" color="blue">
        Left
      </Button>
      <Button variant="fill" color="blue">
        Right
      </Button>
    </div>
  )
}

import { ButtonHTMLAttributes } from 'react'
import Text from '../Text/Index'
import s from './styles.module.css'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'fill' | 'ghost' | 'outline'
  color?: 'blue' | 'cyan' | 'grey'
  className?: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  loading?: boolean
}

export default function Tag({ children }: IProps) {
  return (
    <div className={s.tag}>
      <Text variant="text3" color="grey">
        {children}
      </Text>
    </div>
  )
}

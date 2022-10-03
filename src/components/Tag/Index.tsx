import useConditionalValue from "../../hooks/useConditionalValue"
import { ButtonHTMLAttributes } from "react"
import s from "./styles.module.css"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "fill" | "ghost" | "outline"
  color?: "blue" | "cyan" | "grey"
  className?: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  loading?: boolean
}

export default function Tag({ children, ...props }: IProps) {
  return <div className={s.tag}>{children}</div>
}

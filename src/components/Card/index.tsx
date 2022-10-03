import useConditionalValue from "../../hooks/useConditionalValue";
import { HTMLAttributes, ReactNode } from "react";
import s from "./styles.module.css";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
  color: "dark" | "gradient" | "transparent";
  rounded: "lg" | "md";
  padding: "lg" | "md" | "none";
  width?: "lg" | "md";
  className?: string;
}

export default function Card({
  children,
  className,
  color,
  padding,
  rounded,
  width,
  ...props
}: IProps) {
  // FullWidth // ThreeCol // TwoCol
  // Padding Normal on Desktop
  // Breakpoint noPadding.

  const colorClass = useConditionalValue(
    [s.dark, s.gradient, s.transparent],
    [color === "dark", color === "gradient", color === "transparent"],
  );
  const roundedClass = useConditionalValue(
    [s.roundedLg, s.roundedMd],
    [rounded === "lg", rounded === "md"],
  );
  const paddingClass = useConditionalValue(
    [s.paddingLg, s.paddingMd, s.paddingNone],
    [padding === "lg", padding === "md", padding === "none"],
  );
  const widthClass = useConditionalValue(
    [s.threeColumn, s.twoColumn],
    [width === "lg", width === "md"],
  );

  return (
    <div
      className={`${s.card} ${colorClass} ${roundedClass} ${paddingClass} ${className} ${widthClass}`}
      {...props}
    >
      {children}
    </div>
  );
}

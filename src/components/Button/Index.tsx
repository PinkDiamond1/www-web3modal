import useConditionalValue from "../../hooks/useConditionalValue";
import { ButtonHTMLAttributes } from "react";
import s from "./styles.module.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "fill" | "ghost" | "outline";
  color: "blue" | "cyan" | "grey";
  className?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  loading?: boolean;
}

export default function Button({ children, ...props }: IProps) {
  // const textColor = useConditionalValue<TextProps["color"]>(
  //   ["black", "white", "blue", "cyan"],
  //   [
  //     color === "grey" && variant === "fill",
  //     (color === "blue" && variant === "fill") ||
  //       (color === "grey" && variant === "outline") ||
  //       (color === "grey" && variant === "ghost"),
  //     (color === "blue" && variant === "outline") ||
  //       (color === "blue" && variant === "ghost"),
  //     color === "cyan",
  //   ],
  // );
  // const variantClass = useConditionalValue(
  //   [s.fillGrey, s.fillBlue, s.outlineGrey, s.outlineBlue, s.ghost],
  //   [
  //     color === "grey" && variant === "fill",
  //     color === "blue" && variant === "fill",
  //     color === "grey" && variant === "outline",
  //     color === "blue" && variant === "outline",
  //     variant === "ghost",
  //   ],
  // );
  // const textIconLeftClass = iconLeft ? s.textIconLeft : undefined;
  // const textIconRightClass = iconRight ? s.textIconRight : undefined;

  return (
    <button>
      <p>{children}</p>
    </button>
  );
}

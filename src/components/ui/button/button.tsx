import React, { forwardRef } from "react";
import cn from "classnames";
import { text } from "stream/consumers";
import LoaderIcon from "../../icon/loader";

type VariantNames = "contained" | "outlined" | "text";

type ShapeNames = "none" | "rounded" | "pill" | "circle";

type ColorNames = "primary" | "white" | "gray" | "success" | "danger";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  color?: ColorNames;
  shape?: ShapeNames;
  isFullWidth?: boolean;
  variant?: VariantNames;
  children: React.ReactNode;
}

const shapes = (shape: ShapeNames) => {
  switch (shape) {
    case "rounded":
      return "rounded";
    case "pill":
      return "rounded-xl";
    case "circle":
      return "rounded-full";
    default:
      return "rounded-none";
  }
};

const containedColor = (color: string) => {
  switch (color) {
    case "primary":
      return "bg-yellow text-white hover:bg-dark-yellow";
    case "gray":
      return "bg-gray text-white hover:bg-dark-gray";
    case "danger":
      return "bg-red text-white hover:bg-dark-red";
    case "success":
      return "bg-green text-white hover:bg-dark-green";
    default:
      return "bg-white text-blue hover:bg-slate-100";
  }
};

const outlinedColor = (color: string) => {
  switch (color) {
    case "primary":
      return "bg-white text-yellow border-2 border-yellow hover:border-dark-yellow hover:text-dark-yellow";
    case "gray":
      return "bg-white text-gray border-2 border-gray hover:border-dark-gray hover:text-dark-gray";
    case "danger":
      return "bg-white text-red border-2 border-red hover:border-dark-red hover:text-dark-gray";
    case "success":
      return "bg-white text-green border-2 border-green hover:border-dark-green hover:text-dark-green";
    default:
      return "bg-white border-2 border-blue";
  }
};

const textColor = (color: ColorNames) => {
  switch (color) {
    case "primary":
      return "text-yellow hover:text-dark-yellow";
    case "gray":
      return "text-gray hover:text-dark-gray";
    case "danger":
      return "text-red hover:text-dark-red";
    case "success":
      return "text-green hover:text-dark-green";
    default:
      return "text-blue hover:text-dark-blue";
  }
};

const variants = (variant: VariantNames, color: ColorNames) => {
  if (variant === "contained") {
    return containedColor(color);
  } else if (variant === "outlined") {
    return outlinedColor(color);
  } else {
    return textColor(color);
  }
};

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      isLoading = false,
      disabled = false,
      isFullWidth = false,
      color = "primary",
      shape = "rounded",
      variant = "contained",
      className,
      children,
      ...buttonProps
    },
    ref: React.Ref<HTMLButtonElement | null>
  ) => {
    return (
      <button
        className={cn(
          "text-base font-semibold tracking-wide p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
          shapes(shape),
          variants(variant, color),
          isFullWidth && "w-full",
          className
        )}
        disabled={disabled}
        {...buttonProps}
      >
        {isLoading ? <LoaderIcon className="animate-spin" /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;

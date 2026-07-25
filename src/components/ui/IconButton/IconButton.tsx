import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
}

function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  rounded = true,
  disabled,
  className,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        // Base styles
        "inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",

        // Shape
        rounded ? "rounded-full" : "rounded-xl",

        // Sizes
        {
          "h-9 w-9": size === "sm",
          "h-11 w-11": size === "md",
          "h-14 w-14": size === "lg",
        },

        // Variants
        {
          "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]":
            variant === "primary",

          "bg-[var(--color-secondary)] text-white hover:opacity-90":
            variant === "secondary",

          "bg-transparent text-[var(--color-text-primary)] hover:bg-gray-100":
            variant === "ghost",

          "bg-red-500 text-white hover:bg-red-600":
            variant === "danger",
        },

        // Disabled
        disabled && "cursor-not-allowed opacity-60",

        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
}

export default IconButton;
import clsx from "clsx";

import type { ButtonProps } from "./button.types";

const variantStyles = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]",

  secondary:
    "bg-[var(--color-secondary)] text-white hover:opacity-90",

  outline:
    "border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",

  ghost:
    "bg-transparent text-[var(--color-primary)] hover:bg-green-50",

  danger:
    "bg-red-500 text-white hover:bg-red-600",
};

const sizeStyles = {
  sm: "px-3 py-2 text-sm",

  md: "px-5 py-3 text-base",

  lg: "px-7 py-4 text-lg",
};

function Button({
  children,

  variant = "primary",

  size = "md",

  fullWidth = false,

  loading = false,

  disabled = false,

  leftIcon,

  rightIcon,

  className,

  type = "button",

  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",

        variantStyles[variant],

        sizeStyles[size],

        fullWidth && "w-full",

        className
      )}
      {...props}
    >
      {loading ? (
        "Loading..."
      ) : (
        <>
          {leftIcon}

          {children}

          {rightIcon}
        </>
      )}
    </button>
  );
}

export default Button;
import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: | "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";

  size?: "sm" | "md" | "lg";

  rounded?: boolean;

  icon?: ReactNode;

  children: ReactNode;
}

function Badge({ children, variant = "primary", size = "md", rounded = true, icon, className, ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        // Base styles
        "inline-flex items-center justify-center gap-1 font-medium",

        // Shape
        rounded ? "rounded-full" : "rounded-lg",

        // Sizes
        {
          "px-2 py-1 text-xs": size === "sm",
          "px-3 py-1.5 text-sm": size === "md",
          "px-4 py-2 text-base": size === "lg",
        },

        // Variants
        {
          "bg-[var(--color-primary)] text-white":
            variant === "primary",

          "bg-[var(--color-secondary)] text-white":
            variant === "secondary",

          "bg-green-100 text-green-700":
            variant === "success",

          "bg-yellow-100 text-yellow-700":
            variant === "warning",

          "bg-red-100 text-red-700":
            variant === "danger",

          "bg-gray-100 text-gray-700":
            variant === "neutral",
        },

        className
      )}
      {...props}
  >
      {icon}

      {children}
    </span>
  );
}

export default Badge;
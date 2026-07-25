import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  padding?: "none" | "sm" | "md" | "lg";

  shadow?: "none" | "sm" | "md" | "lg";

  bordered?: boolean;

  hover?: boolean;

  rounded?: "sm" | "md" | "lg" | "xl";
}

function Card({
  children,
  padding = "md",
  shadow = "sm",
  bordered = true,
  hover = false,
  rounded = "xl",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        // Base
        "bg-white transition-all duration-300",

        // Padding
        {
          "p-0": padding === "none",
          "p-4": padding === "sm",
          "p-6": padding === "md",
          "p-8": padding === "lg",
        },

        // Border radius
        {
          "rounded-md": rounded === "sm",
          "rounded-lg": rounded === "md",
          "rounded-xl": rounded === "lg",
          "rounded-2xl": rounded === "xl",
        },

        // Border
        bordered && "border border-[var(--color-border)]",

        // Shadows
        {
          "shadow-none": shadow === "none",
          "shadow-sm": shadow === "sm",
          "shadow-md": shadow === "md",
          "shadow-lg": shadow === "lg",
        },

        // Hover
        hover &&
          "hover:-translate-y-1 hover:shadow-lg",

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
import clsx from "clsx";
import type { HTMLAttributes, ReactNode, ElementType, } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "left" | "center" | "right";
  weight?: "medium" | "semibold" | "bold";
  children: ReactNode;
}

const headingTags: Record<1 | 2 | 3 | 4 | 5 | 6, ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

function Heading({
  level = 2,
  size = "lg",
  align = "left",
  weight = "bold",
  children,
  className,
  ...props
}: HeadingProps) {
  const Tag = headingTags[level];

  return (
    <Tag
      className={clsx(
        "leading-tight text-[var(--color-text-primary)]",

        {
          "text-xl": size === "sm",
          "text-2xl": size === "md",
          "text-3xl": size === "lg",
          "text-4xl": size === "xl",
          "text-5xl": size === "2xl",
        },

        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },

        {
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
          "font-bold": weight === "bold",
        },

        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Heading;
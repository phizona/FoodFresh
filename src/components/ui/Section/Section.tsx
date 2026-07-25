import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

import Container from "../Container/Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  background?: "transparent" | "white" | "gray" | "primary";

  spacing?: "sm" | "md" | "lg";

  container?: boolean;
}

function Section({
  children,
  background = "transparent",
  spacing = "lg",
  container = true,
  className,
  ...props
}: SectionProps) {
  const content = container ? (
    <Container>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      className={clsx(
        // Vertical spacing
        {
          "py-12": spacing === "sm",
          "py-16": spacing === "md",
          "py-24": spacing === "lg",
        },

        // Background
        {
          "bg-transparent":
            background === "transparent",

          "bg-white":
            background === "white",

          "bg-gray-50":
            background === "gray",

          "bg-[var(--color-primary)] text-white":
            background === "primary",
        },

        className
      )}
      {...props}
    >
      {content}
    </section>
  );
}

export default Section;
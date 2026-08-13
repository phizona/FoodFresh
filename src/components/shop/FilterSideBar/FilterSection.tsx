import type { ReactNode } from "react";

interface FilterSectionProps {
  title: string;
  children: ReactNode;
}

function FilterSection({
  title,
  children,
}: FilterSectionProps) {
  return (
    <section className="border-b border-[var(--color-border)] pb-6">
      <h3 className="mb-4 text-lg font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>

      {children}
    </section>
  );
}

export default FilterSection;
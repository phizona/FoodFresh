import type { ElementType } from "react";

interface FeatureCardProps {
  icon: ElementType;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description,
}: FeatureCardProps) {
  return (
    <article className="group rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-8 text-center shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-light)] transition-transform duration-300 group-hover:scale-110 ">
          <Icon size={30} className="text-[var(--color-primary)]" />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-[var(--color-text-primary)]">
          {title}
      </h3>

      <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
          {description}
      </p>
    </article>
  );
}

export default FeatureCard;
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
}

function TestimonialCard({
  name,
  role,
  image,
  rating,
  review,
}: TestimonialCardProps) {
  return (
    <article
      className="rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
      <div className="mb-6 flex">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={18} fill="currentColor" className="text-yellow-500"/>
        ))}
      </div>

      <p className="leading-7 text-[var(--color-text-secondary)]">
        "{review}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        <img src={image} alt={name} className="h-14 w-14 rounded-full object-cover" />

        <div>
          <h4 className="font-semibold text-[var(--color-text-primary)]">
            {name}
          </h4>

          <p className="text-sm text-[var(--color-text-secondary)]">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
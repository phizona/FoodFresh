import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  image: string;
  productCount: number;
  slug: string;
}

function CategoryCard({
  name,
  image,
  productCount,
  slug,
}: CategoryCardProps) {
  return (
    <Link
      to={`/categories/${slug}`}
      className="
        group
        overflow-hidden
        rounded-[var(--radius-2xl)]
        border
        border-[var(--color-border)]
        bg-white
        shadow-[var(--shadow-sm)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[var(--shadow-lg)]
      "
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
          {name}
        </h3>

        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          {productCount} Products
        </p>

        <div
          className="
            mt-5
            flex
            items-center
            gap-2
            font-medium
            text-[var(--color-primary)]
          "
        >
          Explore

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
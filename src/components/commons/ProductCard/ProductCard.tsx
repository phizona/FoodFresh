import { Heart, ShoppingCart, Star } from "lucide-react";
import Badge from "../../ui/Badge/Badge";
import Button from "../../ui/Button/Button";
import IconButton from "../../ui/IconButton/IconButton";

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
  badge?: string;
}

function ProductCard({
  name,
  image,
  price,
  rating,
  badge,
}: ProductCardProps) {
  return (
    <article
      className="group overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)]  bg-white shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]">
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"/>

        {badge && (
          <div className="absolute left-4 top-4">
            <Badge>{badge}</Badge>
          </div>
        )}

        <div className="absolute right-4 top-4">
          <IconButton icon={<Heart size={18} />} aria-label="Add to wishlist"/>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
          {name}
        </h3>

        <div className="mt-3 flex items-center gap-2">
          <Star size={16} fill="currentColor" className="text-yellow-500"/>

          <span className="text-sm text-[var(--color-text-secondary)]">
             {rating}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-[var(--color-primary)]">
              £{price.toFixed(2)}
          </span>
        </div>

        <Button className="mt-6 w-full">
          <ShoppingCart size={18} />
          Add to Cart
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
import { SearchX } from "lucide-react";
import Button from "../../ui/Button/Button";

interface EmptyProductsProps {
  onClearFilters?: () => void;
}

function EmptyProducts({
  onClearFilters,
}: EmptyProductsProps) {
  return (
    <div className="flex min-h-[450px] flex-col items-center justify-center rounded-[var(--radius-2xl)] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary-light)]">
        <SearchX size={40} className="text-[var(--color-primary)]"/>
      </div>

      <h2 className="mt-8 text-2xl font-bold text-[var(--color-text-primary)]">
        No products found
      </h2>

      <p className="mt-3 max-w-md text-[var(--color-text-secondary)]">
        We couldn't find any products matching your current search or
        selected filters. Try adjusting your filters or searching for
        something else.
      </p>

      <Button className="mt-8" onClick={onClearFilters}>
        Clear Filters
      </Button>
    </div>
  );
}

export default EmptyProducts;
interface ProductCountProps {
  total: number;
}

function ProductCount({ total }: ProductCountProps) {
  return (
    <p className="text-sm text-[var(--color-text-secondary)]">
      Showing{" "}
      <span className="font-semibold text-[var(--color-text-primary)]">
        {total}
      </span>{" "}
      products
    </p>
  );
}

export default ProductCount;
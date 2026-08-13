interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

function SortSelect({
  value,
  onChange,
}: SortSelectProps) {
  return (
    <div className="flex w-full items-center gap-2 sm:w-auto">
       <label htmlFor="sort-products" className="text-sm text-[var(--color-text-secondary)]">
          Sort:
       </label>
       <select id="sort-products" value={value} onChange={(e) => onChange(e.target.value)}
          className="min-w-0 flex-1 sm:flex-none sm:w-auto rounded-[var(--radius-lg)] border border-[var(--color-border)]
         bg-white px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-primary)] ">
           <option value="newest">Newest</option>
           <option value="price-low">Price: Low to High</option>
           <option value="price-high">Price: High to Low</option>
           <option value="rating">Highest Rated</option>
           <option value="name">Alphabetical</option>
       </select>
   </div>
  );
}

export default SortSelect;
const categories = ["Fruits", "Vegetables", "Dairy", "Bakery",];

function CategoryFilter() {
  return (
    <div className="space-y-3">
      {categories.map((category) => (
        <label key={category} className="flex cursor-pointer items-center gap-3">
          <input type="checkbox" className="h-4 w-4 accent-[var(--color-primary)]"/>
          <span className="text-sm text-[var(--color-text-primary)]">
             {category}
          </span>
        </label>
      ))}
    </div>
  );
}

export default CategoryFilter;
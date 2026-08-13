import FilterSection from "./FilterSection";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import ClearFilters from "./ClearFilters";

function FilterSidebar() {
  return (
    <aside className="flex flex-col gap-8 rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-sm)]">
      <h2 className="text-xl font-bold">
        Filters
      </h2>

      <FilterSection title="Categories">
         <CategoryFilter />
      </FilterSection>

      <FilterSection title="Price">
         <PriceFilter />
      </FilterSection>

      <FilterSection title="Rating">
         <RatingFilter />
      </FilterSection>

      <FilterSection title="Availability">
        <AvailabilityFilter />
      </FilterSection>

      <ClearFilters />
    </aside>
  );
}

export default FilterSidebar;
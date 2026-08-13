import { useState } from "react";
import Container from "../../ui/Container/Container";
import ProductCount from "./ProductCount";
import SearchProducts from "./SearchProducts";
import SortSelect from "./SortSelect";
import FilterButton from "../FilterSideBar/FilterButton";

interface ShopToolbarProps {
  onOpenFilters: () => void;
}

function ShopToolbar({ onOpenFilters }: ShopToolbarProps) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  return (
    <section className="border-b border-[var(--color-border)] py-8">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex w-full items-center gap-3">
            <FilterButton onClick={onOpenFilters} />

            <SearchProducts value={search} onChange={setSearch}/>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
            <ProductCount total={24} />

            <SortSelect value={sort} onChange={setSort}/>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default ShopToolbar;
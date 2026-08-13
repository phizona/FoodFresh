import { useState } from "react";
import Container from "../../components/ui/Container/Container";
import ShopHero from "../../components/shop/ShopHero/ShopHero";
import ShopToolbar from "../../components/shop/ShopToolBar/ShopToolBar";
import FilterSidebar from "../../components/shop/FilterSideBar/FilterSideBar";
import ProductGrid from "../../components/shop/ProductGrid/ProductGrid";
import Pagination from "../../components/shop/Pagination/Pagination";
import MobileFilterDrawer from "../../components/shop/FilterSideBar/MobileFilterDrawer";

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const totalPages = 5;


  return (
    <>
      <ShopHero />

      <ShopToolbar onOpenFilters={() => setIsFilterOpen(true)}/>

      <MobileFilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}/>

      <section className="py-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div className="hidden lg:block">
              <FilterSidebar />
            </div>
            <div>
              <ProductGrid />

              <p className="mb-6 text-center text-sm text-[var(--color-text-secondary)]">
                Page {currentPage} of {totalPages}
              </p>
              
              <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage}/>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Shop;
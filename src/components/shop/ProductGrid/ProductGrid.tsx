import ProductCard from "../../commons/ProductCard/ProductCard";
import EmptyProducts from "./EmptyProducts";
import { products } from "../../../data/products";

function ProductGrid() {
if (products.length === 0) {
  return (
    <EmptyProducts onClearFilters={() => { console.log("Clear filters");}}/>
  );
}
return (
  <section className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
    {products.map((product) => (
      <ProductCard key={product.id} {...product}/>
    ))}
    </section>
  );
}

export default ProductGrid;
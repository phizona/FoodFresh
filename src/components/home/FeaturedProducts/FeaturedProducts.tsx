import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";
import { featuredProducts } from "./featuredProductsData";
import ProductCard from "../../commons/ProductCard/ProductCard";

function FeaturedProducts() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <Heading level={2}>
            Featured Products
          </Heading>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
           Discover some of our customers' favourite fresh groceries,
           carefully selected to bring quality and value to your table.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;

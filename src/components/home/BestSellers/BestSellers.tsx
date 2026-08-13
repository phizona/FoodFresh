import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";
import Button from "../../ui/Button/Button";
import ProductCard from "../../commons/ProductCard/ProductCard";
import { bestSellers } from "./bestSellersData";

function BestSellers() {
  return (
    <section className="py-20 bg-[var(--color-surface)]">
      <Container>
        <div className="text-center">
          <Heading level={2}>
            Best Sellers
          </Heading>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            Loved by thousands of customers, these are our
            most popular grocery picks.
          </p>
        </div>

        <div className=" mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} {...product} /> ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/shop">
            <Button>
              Shop Best Sellers
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default BestSellers;
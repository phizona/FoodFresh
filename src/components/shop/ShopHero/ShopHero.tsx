import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";
import Breadcrumb from "./BreadCrumb";

function ShopHero() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-16">
      <Container>
        <Breadcrumb currentPage="Shop" />

        <div className="mt-6 max-w-3xl">
          <Heading level={1}>
              Fresh Groceries Delivered to Your Door
          </Heading>

          <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)]">
            Browse our carefully selected range of fresh produce,
            pantry essentials, dairy, bakery products, and more.
            Quality groceries delivered with convenience you can trust.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ShopHero;
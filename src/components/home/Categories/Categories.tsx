import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";

import CategoryCard from "../../commons/CategoryCard/CategoryCard";

import { categories } from "./categoriesData";

function Categories() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <Heading level={2}>
            Shop by Category
          </Heading>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            Browse our carefully selected collection of fresh groceries,
            pantry essentials, dairy, bakery items and more.
          </p>
        </div>

        <div
          className="
            mt-14
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              {...category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Categories;
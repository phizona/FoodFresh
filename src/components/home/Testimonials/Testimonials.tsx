import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialData";

function Testimonials() {
  return (
    <section className="bg-[var(--color-surface)] py-20">
      <Container>
        <div className="text-center">
          <Heading level={2}>
            What Our Customers Say
          </Heading>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            Thousands of happy customers trust FoodFresh for
            fresh groceries delivered to their doorstep.
          </p>
        </div>

        <div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
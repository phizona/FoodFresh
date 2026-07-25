import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";
import FeatureCard from "../../commons/FeatureCard/FeatureCard";
import { features } from "./featuresData";

function Features() {
  return (
    <section className="bg-[var(--color-surface)] py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Why Choose FoodFresh
          </p>

          <Heading level={2} className="mt-4">
              Discover why we are your ultimate online
              fresh food and grocery destination
          </Heading>

          <p className="mt-6 leading-8 text-[var(--color-text-secondary)]">
              We work directly with trusted farmers and suppliers to
              bring you premium-quality groceries with fast delivery,
              secure payments and excellent customer support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => ( <FeatureCard key={feature.id} {...feature}/> ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
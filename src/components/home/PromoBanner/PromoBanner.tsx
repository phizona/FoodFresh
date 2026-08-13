import Container from "../../ui/Container/Container";
import PromoCard from "./PromoCard";
import { promotions } from "./PromoData";

function PromoBanner() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          {promotions.map((promotion) => (
            <PromoCard key={promotion.id} {...promotion} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PromoBanner;
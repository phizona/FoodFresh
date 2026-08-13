import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";
import NewsletterForm from "./NewsLetterForm";

function NewsletterCTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-[var(--radius-3xl)] bg-[var(--color-primary)] px-8 py-16 text-center text-white shadow-[var(--shadow-lg)] lg:px-20">
          <Heading level={2} className="text-white">
              Stay Fresh with FoodFresh 
         </Heading>

         <p className="mx-auto mt-5 max-w-2xl text-white/90">
              Get exclusive discounts, seasonal offers,
              healthy recipes and fresh arrivals delivered
              straight to your inbox.
           </p>

           <NewsletterForm />

           {/* Trust Points */}
           <div className="mt-8 flex flex-col items-center gap-3 text-sm text-white/90 sm:flex-row sm:justify-center sm:gap-8">
              <span>✓ Exclusive weekly discounts</span>
              <span>✓ Fresh seasonal recipes</span>
              <span>✓ Early access to special offers</span>
          </div> 
          

           <p className="mt-6 text-sm text-white/70">
              We respect your privacy. Unsubscribe at any time.
           </p>
       </div>
      </Container>
    </section>
  );
}

export default NewsletterCTA;
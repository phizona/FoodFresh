import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button/Button";

function HeroContent() {
  return (
    <div className="max-w-xl">
      {/* Badge */}
      <div className="mb-6 inline-flex items-center rounded-full bg-[var(--color-primary-light)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
        Fresh Produce Delivered Daily
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold leading-tight text-[var(--color-text-primary)] lg:text-6xl">
        Fresh Groceries
        <span className="block text-[var(--color-primary)]">
          Delivered
        </span>
        To Your Doorstep
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-[var(--color-text-secondary)]">
        Shop farm-fresh fruits, vegetables, dairy, bakery and everyday
        essentials delivered fast with quality you can trust.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button>
          Shop Now
        </Button>

        <Button variant="outline">
          Register Now
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
}

export default HeroContent;
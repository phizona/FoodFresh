import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

function FooterNewsletter() {
  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold text-[var(--color-text-primary)]">
        Subscribe to our Newsletter
      </h3>

      <p className="mb-5 text-[var(--color-text-secondary)]">
        Get updates on fresh arrivals and exclusive offers.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Input type="email" placeholder="Enter your email"/>

        <Button>
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default FooterNewsletter;
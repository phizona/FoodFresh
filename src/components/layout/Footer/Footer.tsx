import {Mail, MapPin, Phone,} from "lucide-react";
import Container from "../../ui/Container/Container";
import FooterLinks from "./FooterLinks";
import FooterNewsLetter from "./FooterNewsLetter";
import SocialLinks from "./SocialLinks";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  { label: "Vegetables", href: "/categories/vegetables" },
  { label: "Fruits", href: "/categories/fruits" },
  { label: "Dairy", href: "/categories/dairy" },
  { label: "Bakery", href: "/categories/bakery" },
];

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-gray-50">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
              FoodFresh
            </h2>

            <p className="mb-6 text-[var(--color-text-secondary)]">
              Fresh groceries delivered to your doorstep every day.
            </p>

            <SocialLinks />
          </div>

          <FooterLinks title="Quick Links" links={quickLinks}/>

          <FooterLinks title="Categories" links={categories}/>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-[var(--color-text-primary)]">
              Contact
            </h3>

            <div className="space-y-4 text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                Portharcourt, Nigeria
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} />
                +234 XXX XXX XXXX
              </div>

              <div className="flex items-center gap-2">
                <Mail size={18} />
                hello@foodfresh.com
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-10">
          <FooterNewsLetter />
        </div>

        <div className="mt-10 border-t border-[var(--color-border)] pt-8 text-center text-sm text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()} FoodFresh. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
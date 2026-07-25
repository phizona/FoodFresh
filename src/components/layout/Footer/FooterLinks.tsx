import { Link } from "react-router-dom";

interface FooterLinksProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
              <Link to={link.href} className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]">
                  {link.label}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
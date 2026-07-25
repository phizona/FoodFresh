import { NavLink } from "react-router-dom";
import clsx from "clsx";

const links = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Categories", path: "/categories" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((link) => (
        <NavLink key={link.path} to={link.path} className={({ isActive }) =>
         clsx(
            "font-medium transition-colors duration-200 hover:text-[var(--color-primary)]",
            isActive
            ? "text-[var(--color-primary)]"
            : "text-[var(--color-text-primary)]"
            )
          }>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavLinks;
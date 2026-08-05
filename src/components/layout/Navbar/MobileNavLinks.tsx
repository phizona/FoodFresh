import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface MobileNavLinksProps {
  onNavigate: () => void;
}

const links = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Categories", path: "/categories" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function MobileNavLinks({ onNavigate }: MobileNavLinksProps) {
  return (
    <nav className="flex flex-col">
      {links.map((link) => (
        <NavLink key={link.path} to={link.path} onClick={onNavigate}
          className={({ isActive }) =>
          clsx("rounded-lg px-4 py-3 text-lg font-medium transition-colors",
          isActive ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-text-primary)] hover:bg-gray-100")}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default MobileNavLinks;
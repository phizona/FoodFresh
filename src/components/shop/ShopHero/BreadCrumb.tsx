import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  currentPage: string;
}

function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      <Link  to="/" className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]">
        Home
      </Link>

      <ChevronRight size={16} className="text-[var(--color-text-secondary)]"/>

      <span className="font-medium text-[var(--color-primary)]">
        {currentPage}
      </span>
    </nav>
  );
}

export default Breadcrumb;
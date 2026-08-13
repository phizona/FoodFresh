import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "../../ui/Button/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-3"
    >
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft size={18} />
        Previous
      </Button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                transition-colors
                ${
                  currentPage === page
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]"
                }
              `}
            >
              {page}
            </button>
          );
        })}
      </div>

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
        <ChevronRight size={18} />
      </Button>
    </nav>
  );
}

export default Pagination;
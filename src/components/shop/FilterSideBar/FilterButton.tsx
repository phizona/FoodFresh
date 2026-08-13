import { SlidersHorizontal } from "lucide-react";
import Button from "../../ui/Button/Button";

interface FilterButtonProps {
  onClick: () => void;
}

function FilterButton({
  onClick,
}: FilterButtonProps) {
  return (
    <Button variant="outline" onClick={onClick} className="lg:hidden">
      <SlidersHorizontal size={18} />
        Filters
    </Button>
  );
}

export default FilterButton;
import { Search } from "lucide-react";
import Input from "../../ui/Input/Input";

interface SearchProductsProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchProducts({
  value,
  onChange,
}: SearchProductsProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />

      <Input type="search" placeholder="Search products..." value={value} onChange={(e) => onChange(e.target.value)} className="pl-11"/>
    </div>
  );
}

export default SearchProducts;
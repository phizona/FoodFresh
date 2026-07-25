import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link  to="/" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-white">
        F
      </div>

      <span className="text-2xl font-bold text-[var(--color-text-primary)]">
        FoodFresh
      </span>
    </Link>
  );
}

export default Logo;
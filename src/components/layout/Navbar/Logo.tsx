import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link  to="/" className="flex items-center gap-2">
      <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-whitesm:h-10 sm:w-10 sm:text-lg">
        F
     </div>
      <span className="text-2xl font-bold text-[var(--color-text-primary)]">
        FoodFresh
      </span>
    </Link>
  );
}

export default Logo;
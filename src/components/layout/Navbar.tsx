import { ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-orange-600">
          FoodFresh
        </h1>

        <ShoppingCart className="h-6 w-6 text-orange-600" />
      </div>
    </header>
  );
}

export default Navbar;
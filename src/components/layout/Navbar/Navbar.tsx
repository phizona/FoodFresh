import { useState } from "react";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import IconButton from "../../ui/IconButton/IconButton";
import Badge from "../../ui/Badge/Badge";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
   <>
     <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <NavLinks />

        {/* <div className="flex items-center gap-3">
          <IconButton icon={<Search size={20} />} aria-label="Search"/>

          <IconButton icon={<Heart size={20} />} aria-label="Wishlist"/>

          <div className="relative">
            <IconButton icon={<ShoppingCart size={20} />} aria-label="Shopping Cart"/>

            <Badge className="absolute -right-2 -top-2 min-h-5 min-w-5 justify-center p-0" size="sm">
              2
            </Badge>
          </div>

          <div className="hidden lg:block">
            <Button size="sm">
              Sign In
            </Button>
          </div>

          <div className="lg:hidden">
            <IconButton icon={<Menu size={20} />} aria-label="Open menu" onClick={() => setIsMenuOpen(true)}/>
          </div>
        </div> */}
        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <IconButton icon={<Search size={20} />} aria-label="Search" />
          <IconButton icon={<Heart size={20} />} aria-label="Wishlist" />

          <div className="relative">
           <IconButton icon={<ShoppingCart size={20} />} aria-label="Shopping Cart"/>
           <Badge className="absolute -right-2 -top-2 min-h-5 min-w-5 justify-center p-0" size="sm">
              2
           </Badge>
          </div>

          <Button size="sm">
            Sign In
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="relative">
            <IconButton icon={<ShoppingCart size={20} />} aria-label="Shopping Cart"/>

            <Badge className="absolute -right-2 -top-2 min-h-5 min-w-5 justify-center p-0" size="sm">
              2
           </Badge>
          </div>

          <IconButton icon={<Menu size={20} />} aria-label="Open menu" onClick={() => setIsMenuOpen(true)}/>
       </div>
      </Container>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
   </>
  
  );
}

export default Navbar;
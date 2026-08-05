import {Heart, Search, ShoppingCart, X } from "lucide-react";
import { useEffect } from "react";
import Button from "../../ui/Button/Button";
import IconButton from "../../ui/IconButton/IconButton";
import MobileNavLinks from "./MobileNavLinks";
import UseBodyScrollLock from "./UseBodyScrollLock";

interface MobileMenuProps {isOpen: boolean; onClose: () => void;}

function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  UseBodyScrollLock(isOpen);

  // Close the menu when the Escape key is pressed
  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
      isOpen  ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0" }`} />

      {/* Slide Panel */}
      <aside className={`fixed right-0 top-0 z-50 flex h-screen w-80 max-w-full flex-col bg-white shadow-2xl transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"}`} >

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-5">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
            Menu
          </h2>

          <IconButton icon={<X size={20} />} aria-label="Close Menu" onClick={onClose} />
        </div>

       <div className="flex flex-1 flex-col overflow-y-auto px-6 py-6">

          {/* Navigation */}
          <MobileNavLinks onNavigate={onClose} />

          {/* Divider */}
          <div className="my-8 border-t border-[var(--color-border)]" />

          {/* Quick Actions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-gray-100" >
                <Search size={20} />
                Search
              </button>

              <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-gray-100" >
                <Heart size={20} />
               Wishlist
              </button>
               
              <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-gray-100" >
                <ShoppingCart size={20} />
               Cart
              </button>
            </div>
          </div>
         {/* Spacer */}
         <div className="flex-1" />
            {/* CTA */}
            <Button className="mt-8 w-full" >
              Sign In
            </Button>

            {/* Contact */}
            <div className="mt-8 border-t border-[var(--color-border)] pt-6">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Need help?
              </p>

              <p className="mt-1 font-medium text-[var(--color-text-primary)]">
                hello@foodfresh.com
              </p>
            </div>
         </div>
       </aside>
     </>
    );
    }

export default MobileMenu;
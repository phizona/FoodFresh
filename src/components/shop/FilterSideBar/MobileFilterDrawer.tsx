import { X } from "lucide-react";
import FilterSidebar from "./FilterSideBar";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileFilterDrawer({
  isOpen,
  onClose,
}: MobileFilterDrawerProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={onClose}/>
      )}

      <aside className={`fixed left-0 top-0 z-50 h-screen w-80 max-w-[90vw] overflow-y-auto bg-white shadow-2xl transition-transform duration-300 lg:hidden
          ${  isOpen ? "translate-x-0" : "-translate-x-full" }`}>
          <div className="flex items-center justify-between border-b p-5">
               <h2 className="text-xl font-semibold">
                  Filters
               </h2>

              <button onClick={onClose} className="rounded-lg p-2 hover:bg-gray-100">
                   <X size={22} />
              </button>
           </div>

           <div className="p-5">
              <FilterSidebar />
           </div>
        </aside>
    </>
  );
}

export default MobileFilterDrawer;
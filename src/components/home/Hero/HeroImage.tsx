import { Star, Tag } from "lucide-react";
import { heroGroceries } from "../../../assets";

function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Main Image */}
      <div className="overflow-hidden rounded-[var(--radius-3xl)] shadow-[var(--shadow-xl)]">
         <img src={heroGroceries} alt="Fresh groceries" className="h-full w-full object-cover" />
      </div>

      {/* Discount Card */}
      <div className="absolute -left-6 top-10 hidden rounded-2xl bg-white p-5 shadow-[var(--shadow-lg)] md:block">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-[var(--color-primary-light)] p-3">
              <Tag size={22} className="text-[var(--color-primary)]" />
          </div>

          <div>
               <p className="text-sm text-[var(--color-text-secondary)]">
                  Today's Offer
               </p>

               <p className="text-xl font-bold text-[var(--color-primary)]">
                  20% OFF
              </p>
          </div>
        </div>
      </div>

      {/* Rating Card */}
      <div className="absolute -bottom-6 right-6 hidden rounded-2xl bg-white p-5 shadow-[var(--shadow-lg)] md:block">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-yellow-100 p-3">
             <Star size={22} fill="currentColor" className="text-yellow-500"/>
          </div>

          <div>
               <p className="text-sm text-[var(--color-text-secondary)]">
                  Customer Rating
              </p>

               <p className="font-bold text-[var(--color-text-primary)]">
                  4.9 / 5
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
import { Star } from "lucide-react";

const ratings = [5, 4, 3];

function RatingFilter() {
  return (
    <div className="space-y-3">
      {ratings.map((rating) => (
        <label key={rating} className="flex cursor-pointer items-center gap-2">
          <input type="radio" name="rating"/>

          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, index) => (
              <Star key={index} size={15} fill="currentColor" className="text-yellow-500"/>
            ))}

            <span className="ml-2 text-sm">
              & Up
            </span>
          </div>
        </label>
      ))}
    </div>
  );
}

export default RatingFilter;
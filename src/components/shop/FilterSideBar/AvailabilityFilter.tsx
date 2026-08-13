function AvailabilityFilter() {
  return (
    <div className="space-y-3">
      <label className="flex items-center gap-3">
        <input type="checkbox" />
        <span>In Stock</span>
      </label>

      <label className="flex items-center gap-3">
         <input type="checkbox" />
         <span>On Sale</span>
      </label>
    </div>
  );
}

export default AvailabilityFilter;
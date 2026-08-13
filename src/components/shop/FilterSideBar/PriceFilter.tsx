function PriceFilter() {
  return (
    <div>
      <input type="range" min="0" max="100" defaultValue="100" className="w-full accent-[var(--color-primary)]"/>

      <div className="mt-3 flex justify-between text-sm text-[var(--color-text-secondary)]">
          <span>£0</span>
          <span>£100</span>
      </div>
    </div>
  );
}

export default PriceFilter;
import { CheckCircle2, Truck, ShieldCheck,} from "lucide-react";

const stats = [
  {
    icon: Truck,
    label: "Free Delivery",
  },
  {
    icon: CheckCircle2,
    label: "100% Fresh",
  },
  {
    icon: ShieldCheck,
    label: "Secure Checkout",
  },
];

function HeroStats() {
  return (
    <div className="mt-10 flex flex-wrap gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="flex items-center gap-2" >
            <Icon size={20} className="text-[var(--color-primary)]"  />

            <span className="font-medium text-[var(--color-text-primary)]">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default HeroStats;
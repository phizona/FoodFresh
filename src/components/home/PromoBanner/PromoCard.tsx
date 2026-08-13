import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";

interface PromoCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
}

function PromoCard({
  title,
  description,
  image,
  buttonText,
  link,
}: PromoCardProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-[var(--radius-3xl)]  min-h-[320px]">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative flex h-full flex-col justify-center p-10 text-white">
        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-4 max-w-sm leading-7">
          {description}
        </p>

        <div className="mt-8">
          <Link to={link}>
            <Button>
              {buttonText}
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PromoCard;
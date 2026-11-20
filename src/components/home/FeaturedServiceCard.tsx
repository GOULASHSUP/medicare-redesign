import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

interface FeaturedServiceCardProps {
  title: string;
  description: string;
  image?: string;
  href: string;
}

export default function FeaturedServiceCard({
  title,
  description,
  image,
  href,
}: FeaturedServiceCardProps) {
  return (
    <Link
      to={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {/* Service Image */}
      <div className="aspect-16/10 overflow-hidden bg-primary-light">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm font-medium text-primary/50">
              Medicare
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>

        {/* Navigation Link */}
        <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
          <span className="text-sm font-semibold text-primary">Részletek</span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
            <ArrowUpRight size={19} strokeWidth={1.8} />
          </span>
        </div>
      </div>
    </Link>
  );
}

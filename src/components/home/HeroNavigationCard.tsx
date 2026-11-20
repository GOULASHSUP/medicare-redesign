import { Link } from "react-router";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface HeroNavigationCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function HeroNavigationCard({
  title,
  description,
  href,
  icon: Icon,
}: HeroNavigationCardProps) {
  return (
    <Link
      to={href}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-linear-to-br from-white to-primary-light/40 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:min-h-44 sm:justify-between sm:p-6"
    >
      {/* Icon, Title and Arrow */}
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
          <Icon size={22} strokeWidth={1.7} />
        </div>

        {/* Title */}
        <h3 className="min-w-0 flex-1 text-lg font-semibold text-zinc-900 sm:text-xl">
          {title}
        </h3>

        {/* Mobile Arrow */}
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white sm:hidden">
          <ArrowUpRight size={19} strokeWidth={1.8} />
        </span>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4">
        {description}
      </p>

      {/* Tablet and Desktop Arrow */}
      <div className="mt-4 hidden justify-end sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
          <ArrowUpRight size={19} strokeWidth={1.8} />
        </span>
      </div>
    </Link>
  );
}

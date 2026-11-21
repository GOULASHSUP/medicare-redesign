import { Link } from "react-router";
import { ArrowRight, BadgePercent } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PromoBannerProps {
  title: string;
  description?: string;
  buttonLabel: string;
  href: string;
  icon?: LucideIcon;
}

export default function PromoBanner({
  title,
  description,
  buttonLabel,
  href,
  icon: Icon = BadgePercent,
}: PromoBannerProps) {
  return (
    <aside className="rounded-2xl border border-primary/10 bg-primary-light p-5 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
        {/* Icon and Content */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
          {/* Icon */}
          <div className="flex shrink-0 items-center justify-center text-primary">
            <Icon size={32} strokeWidth={1.6} aria-hidden="true" />
          </div>

          {/* Text */}
          <div className="lg:max-w-2xl">
            <h2 className="text-base font-medium leading-snug text-zinc-900 sm:text-lg">
              {title}
            </h2>

            {description && (
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to={href}
          className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:self-auto"
        >
          {buttonLabel}
          <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}

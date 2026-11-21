import { Link } from "react-router";
import { ArrowRight, Phone } from "lucide-react";
import Breadcrumbs, { type BreadcrumbItem } from "./Breadcrumbs";

interface PageHeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}

interface PageHeroProps {
  title: string;
  highlightedText?: string;
  description: string;
  image: string;
  breadcrumbs: BreadcrumbItem[];
  actions?: PageHeroAction[];
}

export default function PageHero({
  title,
  highlightedText,
  description,
  image,
  breadcrumbs,
  actions = [],
}: PageHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#f0f6fc]"
      aria-labelledby="page-hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />

        {/* White-blue Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#f0f6fc] via-[#f0f6fc]/95 to-[#f0f6fc]/35" />
      </div>

      {/* Hero Content */}
      <div className="mx-auto flex min-h-130 max-w-7xl items-center px-6 py-16 lg:px-8 lg:py-20">
        <div className="w-full lg:max-w-[55%]">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Heading */}
          <h1
            id="page-hero-heading"
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem]"
          >
            {title}{" "}
            {highlightedText && (
              <span className="text-primary">{highlightedText}</span>
            )}
          </h1>

          {/* Description */}
          <p className="mt-6 text-base leading-relaxed text-zinc-700 sm:text-lg">
            {description}
          </p>

          {/* Actions */}
          {actions.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {actions.map((action) => {
                const isPrimary = action.variant !== "secondary";

                const className = isPrimary
                  ? "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  : "inline-flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-white/90 px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-white";

                const content = (
                  <>
                    {isPrimary ? (
                      <>
                        {action.label}
                        <ArrowRight size={18} strokeWidth={1.8} />
                      </>
                    ) : (
                      <>
                        <Phone size={18} strokeWidth={1.8} />
                        {action.label}
                      </>
                    )}
                  </>
                );

                return action.external ? (
                  <a key={action.href} href={action.href} className={className}>
                    {content}
                  </a>
                ) : (
                  <Link
                    key={action.href}
                    to={action.href}
                    className={className}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { surgeries } from "../../data/surgeries";

export default function SurgicalSpecialties() {
  return (
    <section
      className="bg-white pt-8 pb-16 sm:pt-10 sm:pb-20"
      aria-labelledby="surgeries-list-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 max-w-2xl">
          <h2
            id="surgeries-list-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Műtéti szakterületeink
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Ismerje meg műtéti szolgáltatásainkat, és válassza ki az Ön számára
            megfelelő szakterületet.
          </p>
        </div>

        {/* Surgery Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {surgeries.map((surgery) => {
            const Icon = surgery.icon;

            return (
              <Link
                key={surgery.href}
                to={surgery.href}
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-zinc-900 transition-colors group-hover:text-primary">
                  {surgery.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                  {surgery.description}
                </p>

                {/* Card Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                  <span className="text-sm font-semibold text-primary">
                    Részletek
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

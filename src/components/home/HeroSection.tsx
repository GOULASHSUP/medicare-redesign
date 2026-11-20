import {
  HeartPulse,
  Stethoscope,
  UsersRound,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

import HeroNavigationCard from "./HeroNavigationCard";

const heroNavigation = [
  {
    title: "Műtétek",
    description: "Ismerje meg széles körű műtéti szolgáltatásainkat.",
    href: "/",
    icon: HeartPulse,
  },
  {
    title: "Vizsgálatok",
    description: "Szakrendelések és diagnosztikai vizsgálatok.",
    href: "/",
    icon: Stethoscope,
  },
  {
    title: "Orvosaink",
    description: "Találja meg az Önnek megfelelő szakorvost.",
    href: "/",
    icon: UsersRound,
  },
  {
    title: "Áraink",
    description: "Tekintse meg szolgáltatásaink árait.",
    href: "/",
    icon: ClipboardList,
  },
];

export default function HeroSection() {
  return (
    <section
      className="bg-linear-to-br from-white via-[#f0f6fc] to-white"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:min-h-140 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Hero Text */}
        <div className="w-full lg:max-w-xl">
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem]"
          >
            Széles körű egészségügyi ellátás az{" "}
            <span className="relative inline-block whitespace-nowrap text-primary">
              egész családnak
              <svg
                className="absolute -bottom-2 left-0 w-full text-primary"
                viewBox="0 0 300 14"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9 Q150 1 297 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-600 sm:max-w-none sm:text-lg lg:max-w-lg">
            A Medicare közel 40 szakterületen nyújt magas színvonalú
            egészségügyi ellátást, a szakrendelésektől és diagnosztikai
            vizsgálatoktól egészen a műtéti beavatkozásokig.
          </p>

          {/* Primary Action */}
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Online időpontfoglalás
            <ArrowRight size={18} strokeWidth={1.8} />
          </a>
        </div>

        {/* Hero Navigation Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
          {heroNavigation.map((item) => (
            <HeroNavigationCard
              key={item.title}
              title={item.title}
              description={item.description}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

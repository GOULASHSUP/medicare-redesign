import { Link } from "react-router";
import {
  ArrowRight,
  BedDouble,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import hospitalImage from "../../assets/images/hospital/varo.jpg";

const benefits = [
  {
    icon: BedDouble,
    title: "Modern, légkondicionált szobák",
    description:
      "Kényelmes környezet a kórházi tartózkodás és a felépülés idejére.",
  },
  {
    icon: HeartHandshake,
    title: "Személyre szabott ápolás",
    description:
      "Egyéni odafigyelés és ápolói támogatás a kórházi tartózkodás során.",
  },
  {
    icon: ShieldCheck,
    title: "Biztonságos, nyugodt környezet",
    description:
      "A páciensek kényelmét és biztonságát szem előtt tartó ellátás.",
  },
];

export default function HospitalStaySection() {
  return (
    <section
      className="section-spacing bg-[#f8fafc]"
      aria-labelledby="hospital-stay-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Content */}
        <div>
          <h2
            id="hospital-stay-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Tartózkodás a <span className="text-primary">kórházban</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            A Medicare Magánkórházban a korszerű egészségügyi ellátás mellett
            pácienseink kényelmére is kiemelt figyelmet fordítunk.
            Légkondicionált szobáink és személyre szabott ápolási
            szolgáltatásaink a nyugodt kórházi tartózkodást támogatják.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-zinc-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            to="/mutetek/tartozkodas-a-korhazban"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Tudjon meg többet
            <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>

        {/* Hospital Image */}
        <div className="order-first overflow-hidden rounded-2xl bg-primary-light lg:order-last">
          <img
            src={hospitalImage}
            alt="A Medicare Magánkórház belső tere"
            loading="lazy"
            className="aspect-5/4 w-full object-cover object-center sm:aspect-5/4"
          />
        </div>
      </div>
    </section>
  );
}

import {
  Activity,
  HeartPulse,
  Microscope,
  Stethoscope,
  TestTubeDiagonal,
  Video,
} from "lucide-react";
import ServiceSearch from "./ServiceSearch";

const backgroundIcons = [
  {
    Icon: HeartPulse,
    className: "top-[12%] left-[5%] h-16 w-16 -rotate-12 lg:h-24 lg:w-24",
  },
  {
    Icon: Microscope,
    className: "top-[18%] right-[8%] h-14 w-14 rotate-12 lg:h-20 lg:w-20",
  },
  {
    Icon: Stethoscope,
    className: "bottom-[15%] left-[10%] h-16 w-16 rotate-12 lg:h-22 lg:w-22",
  },
  {
    Icon: Activity,
    className: "right-[6%] bottom-[12%] h-16 w-16 -rotate-12 lg:h-24 lg:w-24",
  },
  {
    Icon: TestTubeDiagonal,
    className: "top-[45%] left-[2%] hidden h-14 w-14 -rotate-20 lg:block",
  },
  {
    Icon: Video,
    className: "top-[48%] right-[3%] hidden h-14 w-14 rotate-15 lg:block",
  },
];

export default function ServiceSearchSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-linear-to-b from-primary-light/50 via-primary-light/30 to-white pt-20 pb-10 lg:pt-28 lg:pb-12"
      aria-labelledby="service-search-heading"
    >
      {/* Decorative Background Icons */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-primary opacity-[0.07]"
        aria-hidden="true"
      >
        {backgroundIcons.map(({ Icon, className }, index) => (
          <Icon
            key={index}
            strokeWidth={1}
            className={`absolute ${className}`}
          />
        ))}
      </div>

      {/* Section Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2
            id="service-search-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Miben <span className="text-primary">segíthetünk?</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Keresse meg az Ön számára megfelelő vizsgálatot, szakorvost vagy
            egészségügyi szolgáltatást. Kattintson a keresőmezőre, és írja be,
            mit keres – mi segítünk megtalálni a kapcsolódó szolgáltatásokat.
          </p>
        </div>

        {/* Interactive Search */}
        <div className="mx-auto w-full max-w-3xl">
          <ServiceSearch />
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { oncologyDoctors } from "../../../data/oncologyDoctors";

export default function OncologyDoctorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeDoctor = oncologyDoctors[activeIndex];

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? oncologyDoctors.length - 1 : current - 1,
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === oncologyDoctors.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section
      className="bg-white py-16 sm:py-20"
      aria-labelledby="oncology-doctors-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl">
          <h2
            id="oncology-doctors-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Ismerje meg{" "}
            <span className="text-primary">daganatsebészeinket</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Daganatsebészeti csapatunk tapasztalt szakorvosai korszerű sebészeti
            eljárásokkal és személyre szabott odafigyeléssel gondoskodnak
            pácienseink ellátásáról.
          </p>
        </div>

        {/* Doctor Card */}
        <div
          key={activeDoctor.id}
          className="grid animate-fade-in overflow-hidden rounded-2xl border border-zinc-200 bg-[#f8fafc] lg:grid-cols-[2fr_3fr]"
        >
          {/* Doctor Image */}
          <div className="bg-primary-light">
            <img
              src={activeDoctor.image}
              alt={activeDoctor.imageAlt}
              className="aspect-4/3 h-full w-full object-cover object-top lg:aspect-auto"
              loading="lazy"
            />
          </div>

          {/* Doctor Information */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <span className="text-xs font-bold tracking-[0.18em] text-primary uppercase">
              Szakorvosunk
            </span>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              {activeDoctor.name}
            </h3>

            <p className="mt-2 text-sm font-semibold text-primary sm:text-base">
              {activeDoctor.position}
            </p>

            <div className="mt-6 space-y-4">
              {activeDoctor.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-zinc-600 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="mt-8 flex items-center gap-5 border-t border-zinc-200 pt-6">
          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {oncologyDoctors.map((doctor, index) => (
              <button
                key={doctor.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${doctor.name} megjelenítése`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-zinc-300 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <span className="text-xs font-medium text-zinc-500">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(oncologyDoctors.length).padStart(2, "0")}
          </span>

          {/* Navigation Buttons */}
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Előző orvos"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowLeft size={18} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Következő orvos"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowRight size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

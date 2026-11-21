import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { hospitalShowcaseSlides } from "../../data/hospitalShowcase";

export default function HospitalShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = hospitalShowcaseSlides[activeIndex];

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? hospitalShowcaseSlides.length - 1 : current - 1,
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === hospitalShowcaseSlides.length - 1 ? 0 : current + 1,
    );
  }

  function renderTitle(title: string) {
    const highlightedTexts = [
      "ahol Ön az első",
      "gondoskodó környezetben",
      "személyre szabott ellátás",
    ];

    const highlightedText = highlightedTexts.find((text) =>
      title.includes(text),
    );

    if (!highlightedText) {
      return title;
    }

    const [before, after] = title.split(highlightedText);

    return (
      <>
        {before}
        <span className="text-primary">{highlightedText}</span>
        {after}
      </>
    );
  }

  return (
    <section
      className="section-spacing bg-white"
      aria-label="Medicare Magánkórház és műtéti ellátás"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-4/3 overflow-hidden rounded-2xl bg-primary-light shadow-sm">
              <img
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.imageAlt}
                className="h-full w-full animate-fade-in object-cover"
              />
            </div>

            {/* Decorative Accent */}
            <div
              className="pointer-events-none absolute -bottom-3 -left-3 -z-10 h-32 w-32 rounded-2xl bg-primary/10"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div key={activeSlide.id} className="animate-fade-in">
            <span className="text-xs font-bold tracking-[0.18em] text-primary uppercase">
              {activeSlide.eyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
              {renderTitle(activeSlide.title)}
            </h2>

            <div className="mt-6 space-y-4">
              {activeSlide.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-zinc-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {activeSlide.buttons.map((button) => (
                <Link
                  key={button.label}
                  to={button.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                    button.variant === "primary"
                      ? "bg-primary text-white hover:bg-primary-hover"
                      : "border border-primary/20 bg-white text-primary hover:bg-primary-light"
                  }`}
                >
                  {button.label}

                  <ArrowRight size={17} strokeWidth={1.8} />
                </Link>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className="mt-10 flex items-center gap-5 border-t border-zinc-200 pt-6">
              <div className="flex items-center gap-2">
                {hospitalShowcaseSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${index + 1}. dia megjelenítése`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-zinc-300 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <span className="text-xs font-medium text-zinc-500">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(hospitalShowcaseSlides.length).padStart(2, "0")}
              </span>

              <div className="ml-auto flex gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Előző dia"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <ArrowLeft size={18} strokeWidth={1.8} />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Következő dia"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <ArrowRight size={18} strokeWidth={1.8} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

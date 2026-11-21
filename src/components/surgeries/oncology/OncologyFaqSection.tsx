import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { oncologyFaq } from "../../../data/oncologyFaq";

export default function OncologyFaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  function toggleItem(id: string) {
    setOpenItem((current) => (current === id ? null : id));
  }

  return (
    <section
      className="bg-[#f8fafc] py-16 sm:py-20"
      aria-labelledby="oncology-faq-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl">
          <h2
            id="oncology-faq-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Gyakran ismételt <span className="text-primary">kérdések</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Összegyűjtöttük a daganatsebészeti ellátással, a műtétekkel és a
            kórházi tartózkodással kapcsolatos leggyakoribb kérdéseket.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {oncologyFaq.map((item) => {
            const isOpen = openItem === item.id;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold transition-colors sm:px-6 ${
                      isOpen
                        ? "text-primary"
                        : "text-zinc-800 hover:text-primary"
                    }`}
                  >
                    <span>{item.question}</span>

                    <ChevronDown
                      size={20}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    className="border-t border-zinc-100 px-5 pt-4 pb-6 sm:px-6"
                  >
                    <div className="max-w-4xl space-y-3">
                      {item.answer.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-sm leading-relaxed text-zinc-600 sm:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

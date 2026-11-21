import { Check } from "lucide-react";

const procedures = [
  "Jobb és bal oldali vastagbél-eltávolítás (hemicolectomia)",
  "Szigmabél-eltávolítás",
  "Részleges végbél-eltávolítás (resectio)",
  "Teljes végbél-eltávolítás (exstirpatio)",
  "Teljes vastagbél-eltávolítás (colectomia)",
  "Végbélen keresztüli mikrosebészet (TAMIS)",
  "Gyomorfali kimetszés",
  "Lépeltávolítás",
];

export default function SurgicalProcedures() {
  return (
    <section
      className="section-spacing bg-white"
      aria-labelledby="surgical-procedures-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl">
          <h2
            id="surgical-procedures-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Milyen <span className="text-primary">műtéteket végzünk?</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Daganatsebészeti csapatunk többek között az alábbi műtéti
            beavatkozásokat végzi.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {procedures.map((procedure) => (
            <div
              key={procedure}
              className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white px-5 py-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <Check size={19} strokeWidth={2} aria-hidden="true" />
              </div>

              <span className="text-sm font-medium leading-relaxed text-zinc-800 sm:text-base">
                {procedure}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import oncologyImage from "../../../assets/images/surgeries/daganatsebeszet.jpg";

export default function OncologyAboutSection() {
  return (
    <section
      className="section-spacing bg-[#f8fafc]"
      aria-labelledby="oncology-about-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Content */}
        <div>
          <h2
            id="oncology-about-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Mi a <span className="text-primary">daganatsebészet?</span>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            <p>
              A daganatsebészet a sebészet azon szakterülete, amely a daganatos
              elváltozások műtéti kezelésével foglalkozik. Célja a daganatok
              eltávolítása, valamint a betegség kezelésének és a páciens
              gyógyulásának elősegítése.
            </p>

            <p>
              A sebészeti beavatkozás lehet önálló kezelés, de gyakran más
              terápiás módszerekkel, például gyógyszeres vagy sugárkezeléssel
              együtt alkalmazzák. A megfelelő kezelési eljárás kiválasztása
              minden esetben a daganat típusától, elhelyezkedésétől és a páciens
              egészségi állapotától függ.
            </p>

            <p>
              A korszerű daganatsebészetben egyre nagyobb szerepet kapnak a
              minimálisan invazív eljárások, amelyek bizonyos esetekben kisebb
              műtéti megterhelést és gyorsabb felépülést tehetnek lehetővé.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="order-first overflow-hidden rounded-2xl bg-primary-light lg:order-last">
          <img
            src={oncologyImage}
            alt="Daganatsebészeti ellátás"
            loading="lazy"
            className="aspect-5/4 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

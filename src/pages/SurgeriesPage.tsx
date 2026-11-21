import PageHero from "../components/layout/PageHero";
import PromoBanner from "../components/common/PromoBanner";
import SurgicalSpecialties from "../components/surgeries/SurgicalSpecialties";
import heroImage from "../assets/images/surgeries/surgeries-hero.jpg";

export default function SurgeriesPage() {
  return (
    <>
      <PageHero
        title="Műtétek és"
        highlightedText="fekvőbetegellátás"
        description="A Medicare Magánkórházban korszerű műtéti technológiákkal, tapasztalt szakorvosokkal és személyre szabott ellátással gondoskodunk pácienseink biztonságáról és kényelméről."
        image={heroImage}
        breadcrumbs={[{ label: "Műtétek" }]}
        actions={[
          {
            label: "Online időpontfoglalás",
            href: "/online-idopontfoglalas",
            variant: "primary",
          },
          {
            label: "Kapcsolatfelvétel",
            href: "tel:+3614653131",
            variant: "secondary",
            external: true,
          },
        ]}
      />

      {/* Discount Promotion */}
      <section
        className="mx-auto max-w-7xl px-6 pt-12 pb-4 lg:px-8"
        aria-label="Medicare kedvezmények"
      >
        <PromoBanner
          title="Medicare Egészségpénztáron keresztül szolgáltatásaink akár 20% adó-, és további 10% egyedi kedvezménnyel vehetők igénybe!"
          buttonLabel="Részletek"
          href="/medicare-egeszsegpenztar"
        />
      </section>

      {/* Surgical Specialties */}
      <SurgicalSpecialties />
    </>
  );
}

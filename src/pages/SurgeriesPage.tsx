import PageHero from "../components/layout/PageHero";
import SurgicalSpecialties from "../components/surgeries/SurgicalSpecialties";
import HospitalStaySection from "../components/surgeries/HospitalStaySection";
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

      {/* Promotion and Surgical Specialties */}
      <SurgicalSpecialties />

      {/* Hospital Stay */}
      <HospitalStaySection />
    </>
  );
}

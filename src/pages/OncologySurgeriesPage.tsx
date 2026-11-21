import PageHero from "../components/layout/PageHero";
import SurgicalProcedures from "../components/surgeries/oncology/SurgicalProcedures";
import OncologyAboutSection from "../components/surgeries/oncology/OncologyAboutSection";
import OncologyDoctorsSection from "../components/surgeries/oncology/OncologyDoctorsSection";
import heroImage from "../assets/images/surgeries/daganatsebeszet.jpg";

export default function OncologySurgeriesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Daganatsebészeti"
        highlightedText="műtétek"
        description="A Medicare Magánkórházban tapasztalt szakorvosaink korszerű sebészeti eljárásokkal és személyre szabott ellátással gondoskodnak pácienseinkről."
        image={heroImage}
        breadcrumbs={[
          { label: "Műtétek", href: "/mutetek" },
          { label: "Daganatsebészeti műtétek" },
        ]}
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

      {/* Surgical Procedures */}
      <SurgicalProcedures />

      {/* About Oncology Surgery */}
      <OncologyAboutSection />

      {/* Oncology Doctors */}
      <OncologyDoctorsSection />
    </>
  );
}

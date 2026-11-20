import HeroSection from "../components/home/HeroSection";
import FeaturedServicesSection from "../components/home/FeaturedServicesSection";
import ServiceSearchSection from "../components/home/ServiceSearchSection";
import HospitalShowcaseSection from "../components/home/HospitalShowcaseSection";
import NewsSection from "../components/home/NewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedServicesSection />
      <ServiceSearchSection />
      <HospitalShowcaseSection />
      <NewsSection />
    </>
  );
}

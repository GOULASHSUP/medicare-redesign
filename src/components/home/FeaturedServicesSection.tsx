import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import FeaturedServiceCard from "./FeaturedServiceCard";

// Service Images
import telemedicinaImage from "../../assets/images/services/tememedicina.jpg";
import alexImage from "../../assets/images/services/alex-multiplex.jpg";
import startImage from "../../assets/images/services/start.jpg";
import foxImage from "../../assets/images/services/fox-286.jpg";
import obezitologiaImage from "../../assets/images/services/obezitologiai-tanacsadas.jpg";
import meddosegiImage from "../../assets/images/services/meddosegi-tanacsadas.jpg";

const featuredServices = [
  {
    title: "Telemedicina",
    description:
      "Konzultáljon szakorvosainkkal kényelmesen, akár otthonából is, online videókonzultáció keretében.",
    image: telemedicinaImage,
    href: "/telemedicina",
  },
  {
    title: "ALEX multiplex allergiateszt",
    description:
      "Átfogó allergiavizsgálat, amely egyetlen vérmintából akár 295 allergén vizsgálatát teszi lehetővé.",
    image: alexImage,
    href: "/alex-multiplex-allergiateszt",
  },
  {
    title: "Start állapotfelmérő csomag",
    description:
      "Komplex egészségügyi állapotfelmérés belgyógyászati vizsgálattal, laborvizsgálatokkal és EKG-val.",
    image: startImage,
    href: "/start-allapotfelmero-csomag",
  },
  {
    title: "FOX 286 ételintolerancia panel",
    description:
      "Ételintolerancia-vizsgálat, amely segíthet azonosítani a panaszokat kiváltó élelmiszereket.",
    image: foxImage,
    href: "/fox-286-etelintolerancia-panel",
  },
  {
    title: "Obezitológiai tanácsadás",
    description:
      "Szakorvosi támogatás a testsúlyproblémák kivizsgálásában és a személyre szabott kezelés megtervezésében.",
    image: obezitologiaImage,
    href: "/obezitologiai-tanacsadas",
  },
  {
    title: "Meddőségi tanácsadás",
    description:
      "Szakértői segítség a termékenységi problémák feltárásában és a lehetséges további lépések meghatározásában.",
    image: meddosegiImage,
    href: "/meddosegi-tanacsadas",
  },
];

export default function FeaturedServicesSection() {
  return (
    <section
      className="bg-white py-20 lg:py-24"
      aria-labelledby="featured-services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">
          <h2
            id="featured-services-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Kiemelt <span className="text-primary">szolgáltatások</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Fedezze fel kiemelt vizsgálatainkat és egészségügyi
            szolgáltatásainkat.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <FeaturedServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/szolgaltatasok"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            További szolgáltatások
            <ArrowRight size={18} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}

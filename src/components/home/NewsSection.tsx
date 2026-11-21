import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { newsItems, type NewsItem } from "../../data/news";

interface NewsCardProps {
  item: NewsItem;
  featured?: boolean;
}

function NewsCard({ item, featured = false }: NewsCardProps) {
  return (
    <Link
      to={item.href}
      className={`group relative flex min-h-72 overflow-hidden rounded-2xl bg-zinc-100 ${
        featured ? "lg:min-h-125" : "lg:min-h-60"
      }`}
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />

      {/* Category Badge */}
      <span className="absolute top-4 right-4 z-10 inline-flex rounded-full bg-zinc-900/40 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm sm:top-5 sm:right-5">
        {item.category}
      </span>

      {/* Content */}
      <div className="relative z-10 mt-auto w-full p-4 sm:p-5">
        <h3
          className={`font-bold leading-tight text-white ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {item.title}
        </h3>

        <p
          className={`mt-2 max-w-lg leading-relaxed text-white/85 ${
            featured ? "text-sm sm:text-base" : "text-sm"
          }`}
        >
          {item.description}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
          Tovább olvasom
          <ArrowRight
            size={17}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}

export default function NewsSection() {
  const [featured, ...secondary] = newsItems;

  return (
    <section
      className="section-spacing bg-linear-to-br from-white via-[#f0f6fc] to-white"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="news-heading"
              className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
            >
              Aktualitások és <span className="text-primary">ajánlatok</span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Fedezze fel legfrissebb híreinket, eseményeinket és egészségügyi
              ajánlatainkat.
            </p>
          </div>

          <Link
            to="/aktualitasok"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Minden aktualitás
            <ArrowRight size={18} strokeWidth={1.8} />
          </Link>
        </div>

        {/* Editorial Grid */}
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Large Featured Story */}
          <NewsCard item={featured} featured />

          {/* Two Smaller Stories */}
          <div className="grid gap-5 lg:grid-rows-2 lg:gap-6">
            {secondary.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

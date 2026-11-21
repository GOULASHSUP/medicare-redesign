import { Link } from "react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import NewsletterForm from "./NewsletterForm";
import medicareLogo from "../../assets/images/logos/medicare-logo.svg";

const usefulLinks = [
  { label: "Műtétek", href: "/mutetek" },
  { label: "Szakrendelések", href: "/vizsgalatok/szakrendelesek" },
  { label: "Diagnosztika", href: "/vizsgalatok/diagnosztika" },
  { label: "Laborvizsgálatok", href: "/vizsgalatok/laborvizsgalatok" },
  { label: "Orvosok", href: "/orvosok" },
  { label: "Árak", href: "/arak" },
  { label: "Egészség A–Z", href: "/egeszseg-a-z" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

const externalWebsites = [
  { label: "Medicare Group", href: "https://medicare-group.hu" },
  { label: "Medicare Dental", href: "https://medicaredental.hu" },
  {
    label: "Medicare Diagnosztika",
    href: "https://medicarediagnosztika.hu",
  },
  { label: "Medicare Biztosító", href: "https://medicarebiztosito.hu" },
];

const legalLinks = [
  { label: "Adatkezelési tájékoztató", href: "/adatkezelesi-tajekoztato" },
  { label: "Betegjogi tájékoztató", href: "/betegjogi-tajekoztato" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  {
    label: "Magyar Nemzeti Bank – Pénzügyi Navigátor",
    href: "https://www.mnb.hu/fogyasztovedelem",
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Newsletter */}
      <NewsletterForm />

      {/* Main Footer */}
      <div className="border-t border-zinc-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:gap-x-10 lg:grid-cols-[1.2fr_1.4fr_1fr] lg:gap-16 lg:px-8 lg:py-20">
          {/* Medicare Contact Information */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center transition-opacity hover:opacity-80"
              aria-label="Medicare – Főoldal"
            >
              <img
                src={medicareLogo}
                alt="Medicare"
                className="h-10 w-auto"
                loading="lazy"
              />
            </Link>

            <div className="mt-8 flex flex-col gap-5">
              <a
                href="https://www.google.com/maps/search/?api=1&query=1134+Budapest+Vaci+ut+29-31"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm leading-relaxed text-zinc-600 transition-colors hover:text-primary"
              >
                <MapPin
                  size={19}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>
                  1134 Budapest, Váci út 29–31.
                  <br />
                  (Vision Towers)
                </span>
              </a>

              <a
                href="tel:+3614653131"
                className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-primary"
              >
                <Phone
                  size={19}
                  strokeWidth={1.8}
                  className="shrink-0 text-primary"
                  aria-hidden="true"
                />
                +36 1 465 3131
              </a>

              <a
                href="mailto:korhaz@medicare-group.hu"
                className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-primary"
              >
                <Mail
                  size={19}
                  strokeWidth={1.8}
                  className="shrink-0 text-primary"
                  aria-hidden="true"
                />
                korhaz@medicare-group.hu
              </a>
            </div>
          </div>

          {/* Useful Links and External Websites */}
          <div className="flex flex-col gap-12 md:contents lg:contents">
            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-bold text-zinc-900">
                Hasznos információk és linkek
              </h3>

              <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
                {usefulLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* External Websites */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-zinc-900">
                További weboldalaink
              </h3>

              <div className="mt-7 flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-x-6 lg:flex-col lg:gap-4">
                {externalWebsites.map((website) => (
                  <a
                    key={website.label}
                    href={website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-colors hover:text-primary"
                  >
                    {website.label}

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.8}
                      className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <FaFacebookF size={19} aria-hidden="true" />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <FaInstagram size={19} aria-hidden="true" />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <FaLinkedinIn size={19} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-5 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <p className="text-xs leading-relaxed text-white/85">
            Medicare © {new Date().getFullYear()} – Minden jog fenntartva.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-end">
            {legalLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

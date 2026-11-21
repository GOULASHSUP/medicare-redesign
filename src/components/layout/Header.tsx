import { Link } from "react-router";
import { CalendarDays, CircleAlert, Phone, Mail } from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import NavDropdown from "./NavDropdown";
import { navigationItems } from "../../data/navigation";

export default function Header() {
  const phoneNumber = "+36 1 465 3131";
  const phoneHref = "+3614653131";
  const emailAddress = "korhaz@medicare-group.hu";

  return (
    <>
      {/* Top Contact Bar - Scrolls Away */}
      <div className="relative z-50 w-full bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          {/* Desktop Top Bar */}
          <div className="hidden min-h-12 items-center justify-between gap-6 xl:flex">
            {/* Desktop Action Buttons */}
            <div className="flex items-center gap-3">
              <Link
                to="/online-idopontfoglalas"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <CalendarDays size={18} strokeWidth={1.8} />
                Online időpontfoglalás
              </Link>

              <Link
                to="/surgossegi-centrum"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-light"
              >
                <CircleAlert size={18} strokeWidth={1.8} />
                SÜRGŐSSÉGI CENTRUM
              </Link>
            </div>

            {/* Desktop Contact Information */}
            <div className="flex items-center gap-5 text-sm text-white">
              <a
                href={`tel:${phoneHref}`}
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Phone size={17} strokeWidth={1.8} />
                {phoneNumber}
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Mail size={17} strokeWidth={1.8} />
                {emailAddress}
              </a>
            </div>
          </div>

          {/* Mobile and Tablet Top Bar - Contact Information Only */}
          <div className="flex min-h-8 flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white xl:hidden">
            {/* Phone Number */}
            <a
              href={`tel:${phoneHref}`}
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Phone size={14} strokeWidth={1.8} className="shrink-0" />
              {phoneNumber}
            </a>

            {/* Email Address */}
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Mail size={14} strokeWidth={1.8} className="shrink-0" />
              {emailAddress}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Sticky */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex min-h-15 max-w-7xl items-center justify-between gap-5 px-6 lg:px-8 xl:min-h-20">
          {" "}
          {/* Medicare Logo */}
          <Link
            to="/"
            className="shrink-0 text-3xl font-bold tracking-tight text-primary"
            aria-label="Medicare főoldal"
          >
            Medicare
          </Link>
          {/* Desktop Navigation */}
          <nav
            className="hidden h-20 min-w-0 items-center xl:flex"
            aria-label="Fő navigáció"
          >
            <div className="flex h-full items-center">
              {navigationItems.map((item) =>
                item.children?.length ? (
                  <NavDropdown key={item.label} item={item} />
                ) : item.href ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex h-full items-center px-3 text-sm font-medium text-zinc-800 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    key={item.label}
                    className="flex h-full items-center px-3 text-sm font-medium text-zinc-500"
                  >
                    {item.label}
                  </span>
                ),
              )}
            </div>
          </nav>
          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </header>
    </>
  );
}

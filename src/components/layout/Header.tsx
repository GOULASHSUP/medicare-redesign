import { Link } from "react-router";
import { CalendarDays, Phone } from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import NavDropdown from "./NavDropdown";
import { navigationItems } from "../../data/navigation";

export default function Header() {
  return (
    <header className="relative z-50 w-full">
      {/* Top Bar */}
      <div className="bg-zinc-50">
        <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Medicare Logo */}
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-primary"
            aria-label="Medicare főoldal"
          >
            Medicare
          </Link>

          {/* Desktop Action Buttons */}
          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-light"
            >
              <CalendarDays size={18} strokeWidth={1.8} />
              Online időpontfoglalás
            </a>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              <Phone size={18} strokeWidth={1.8} />
              Kapcsolat
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>

      {/* Desktop Bottom Navigation */}
      <nav className="hidden bg-primary xl:block" aria-label="Fő navigáció">
        <div className="mx-auto flex h-14 max-w-7xl items-center px-6 lg:px-8">
          <div className="-ml-4 flex h-full items-center gap-1">
            {navigationItems.map((item) =>
              item.children?.length ? (
                <NavDropdown key={item.label} item={item} />
              ) : item.href ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex h-full items-center px-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  className="flex h-full items-center px-4 text-sm font-medium text-white/70"
                >
                  {item.label}
                </span>
              ),
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

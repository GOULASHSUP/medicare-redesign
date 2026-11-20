import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, CalendarDays, CircleAlert } from "lucide-react";
import { navigationItems, type NavigationItem } from "../../data/navigation";

// Shared link component supporting internal and external URLs
interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
  onClick: () => void;
}

function MobileNavLink({
  href,
  children,
  className,
  onClick,
}: MobileNavLinkProps) {
  const isExternal = /^https?:\/\//i.test(href);

  if (isExternal) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

// Recursive navigation item component
interface MobileNavItemProps {
  item: NavigationItem;
  level?: number;
  onNavigate: () => void;
}

function MobileNavItem({ item, level = 0, onNavigate }: MobileNavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const submenuId = useId();

  const hasChildren = Boolean(item.children?.length);

  const paddingClass = level === 0 ? "pl-4" : level === 1 ? "pl-8" : "pl-12";

  const textClass =
    level === 0
      ? "text-base font-semibold text-zinc-800"
      : "text-sm font-medium text-zinc-600";

  const itemClassName = `flex min-w-0 flex-1 items-center py-3 pr-3 ${paddingClass} ${textClass} transition-colors hover:text-primary`;

  return (
    <div className={level === 0 ? "border-b border-zinc-200" : ""}>
      <div className="flex min-h-12 items-center">
        {/* Navigation Link */}
        {item.href ? (
          <MobileNavLink
            href={item.href}
            onClick={onNavigate}
            className={itemClassName}
          >
            {item.label}
          </MobileNavLink>
        ) : hasChildren ? (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={submenuId}
            className={`${itemClassName} text-left`}
          >
            {item.label}
          </button>
        ) : (
          <span
            className={`flex min-w-0 flex-1 items-center py-3 pr-3 ${paddingClass} ${textClass}`}
          >
            {item.label}
          </span>
        )}

        {/* Expand / Collapse Button */}
        {hasChildren && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={`${item.label} almenü ${
              isExpanded ? "bezárása" : "megnyitása"
            }`}
            aria-expanded={isExpanded}
            aria-controls={submenuId}
            className="mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-primary-light hover:text-primary"
          >
            <ChevronDown
              size={18}
              strokeWidth={1.8}
              className={`transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {/* Nested Submenu */}
      {hasChildren && (
        <div
          id={submenuId}
          className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="bg-zinc-100/70 py-1">
              {item.children?.map((child, index) => (
                <MobileNavItem
                  key={`${child.label}-${index}`}
                  item={child}
                  level={level + 1}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close mobile navigation when the route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Close mobile navigation with Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="xl:hidden">
      {/* Mobile Menu Toggle */}
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Menü bezárása" : "Menü megnyitása"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="flex h-11 w-11 items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-primary"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobil navigáció"
          className="absolute top-full right-0 left-0 z-50 max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain border-t border-zinc-200 bg-zinc-50 shadow-xl"
        >
          <div className="mx-auto max-w-7xl px-4 py-5">
            {/* Homepage Link */}
            <Link
              to="/"
              onClick={closeMenu}
              className="block border-b border-zinc-200 px-4 py-3 text-base font-semibold text-zinc-800 transition-colors hover:text-primary"
            >
              Főoldal
            </Link>

            {/* Navigation Items */}
            {navigationItems.map((item, index) => (
              <MobileNavItem
                key={`${item.label}-${index}`}
                item={item}
                onNavigate={closeMenu}
              />
            ))}

            {/* Mobile Action Buttons */}
            <div className="mt-6 flex flex-col gap-3 px-2 pb-4 sm:flex-row">
              <a
                href="#"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-5 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary-light sm:flex-1"
              >
                <CalendarDays size={18} strokeWidth={1.8} />
                Online időpontfoglalás
              </a>

              <Link
                to="/"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-hover sm:flex-1"
              >
                <CircleAlert size={18} strokeWidth={1.8} />
                SÜRGŐSSÉGI CENTRUM
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

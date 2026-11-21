import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { NavigationItem } from "../../data/navigation";

interface NavDropdownProps {
  item: NavigationItem;
}

interface DropdownLinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}

function DropdownLink({
  href,
  children,
  className,
  onClick,
}: DropdownLinkProps) {
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

export default function NavDropdown({ item }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const menuId = useId();

  const clearTimers = useCallback(() => {
    if (openTimeoutRef.current !== null) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }

    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const closeMenu = useCallback(() => {
    clearTimers();
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [clearTimers]);

  const scheduleOpen = () => {
    clearTimers();

    if (isOpen) return;

    openTimeoutRef.current = setTimeout(() => {
      setIsOpen(true);
      openTimeoutRef.current = null;
    }, 100);
  };

  const scheduleClose = () => {
    clearTimers();

    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveSubmenu(null);
      closeTimeoutRef.current = null;
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current !== null) {
        clearTimeout(openTimeoutRef.current);
      }

      if (closeTimeoutRef.current !== null) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        containerRef.current?.querySelector<HTMLElement>("a, button")?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  const toggleMenu = () => {
    clearTimers();
    setIsOpen((previous) => !previous);
    setActiveSubmenu(null);
  };

  const mainLinkClassName = (open: boolean) =>
    `flex h-full items-center gap-2 px-3 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary ${
      open ? "text-primary" : "text-zinc-800 hover:text-primary"
    }`;

  return (
    <div
      ref={containerRef}
      className="relative flex h-full items-center"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
    >
      {/* Main Navigation Link */}
      {item.href ? (
        <DropdownLink
          href={item.href}
          onClick={closeMenu}
          className={mainLinkClassName(isOpen)}
        >
          {item.label}

          <ChevronDown
            size={15}
            strokeWidth={1.8}
            className={`shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </DropdownLink>
      ) : (
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls={menuId}
          className={mainLinkClassName(isOpen)}
        >
          {item.label}

          <ChevronDown
            size={15}
            strokeWidth={1.8}
            className={`shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      )}

      {/* Dropdown Panel */}
      {isOpen && (
        <div
          id={menuId}
          className="absolute top-full left-0 z-50 w-80 animate-fade-in rounded-b-xl border border-zinc-200 bg-zinc-50 p-2 shadow-xl"
        >
          <div className="max-h-[70vh] overflow-y-auto">
            {item.children?.map((child, index) => {
              const hasChildren = Boolean(child.children?.length);
              const isSubmenuOpen = activeSubmenu === index;

              return (
                <div key={`${child.label}-${index}`}>
                  <div className="flex items-center">
                    {child.href ? (
                      <DropdownLink
                        href={child.href}
                        onClick={closeMenu}
                        className="flex min-w-0 flex-1 items-center rounded-lg px-4 py-3 text-sm text-zinc-700 transition-colors hover:bg-primary-light hover:text-primary"
                      >
                        {child.label}
                      </DropdownLink>
                    ) : hasChildren ? (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSubmenu(isSubmenuOpen ? null : index)
                        }
                        className="flex min-w-0 flex-1 items-center rounded-lg px-4 py-3 text-left text-sm text-zinc-700 transition-colors hover:bg-primary-light hover:text-primary"
                      >
                        {child.label}
                      </button>
                    ) : (
                      <span className="flex min-w-0 flex-1 items-center px-4 py-3 text-sm text-zinc-700">
                        {child.label}
                      </span>
                    )}

                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSubmenu(isSubmenuOpen ? null : index)
                        }
                        aria-label={`${child.label} almenü`}
                        aria-expanded={isSubmenuOpen}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-primary-light hover:text-primary"
                      >
                        <ChevronRight
                          size={17}
                          className={`transition-transform duration-200 ${
                            isSubmenuOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Nested Submenu */}
                  {hasChildren && isSubmenuOpen && (
                    <div className="mb-2 ml-4 border-l-2 border-primary/20 pl-3">
                      {child.children?.map((subchild, subIndex) =>
                        subchild.href ? (
                          <DropdownLink
                            key={`${subchild.label}-${subIndex}`}
                            href={subchild.href}
                            onClick={closeMenu}
                            className="block rounded-lg px-3 py-2.5 text-sm text-zinc-600 transition-colors hover:bg-primary-light hover:text-primary"
                          >
                            {subchild.label}
                          </DropdownLink>
                        ) : (
                          <span
                            key={`${subchild.label}-${subIndex}`}
                            className="block px-3 py-2.5 text-sm text-zinc-600"
                          >
                            {subchild.label}
                          </span>
                        ),
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

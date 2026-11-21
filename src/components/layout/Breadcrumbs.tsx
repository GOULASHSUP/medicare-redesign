import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Kezdőlap", href: "/" },
    ...items,
  ];

  return (
    <nav aria-label="Morzsamenü" className="min-w-0">
      <ol className="flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap text-sm">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className={`flex min-w-0 items-center gap-2 ${
                isLast ? "shrink-0" : "shrink"
              }`}
            >
              {index > 0 && (
                <ChevronRight
                  size={14}
                  strokeWidth={1.8}
                  className="shrink-0 text-zinc-400"
                  aria-hidden="true"
                />
              )}

              {item.href ? (
                <Link
                  to={item.href}
                  className="block min-w-0 truncate font-medium text-zinc-600 transition-colors hover:text-primary"
                  title={item.label}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={`block min-w-0 truncate ${
                    isLast
                      ? "font-semibold text-primary"
                      : "font-medium text-zinc-600"
                  }`}
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

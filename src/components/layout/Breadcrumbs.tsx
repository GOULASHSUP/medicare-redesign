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
  return (
    <nav aria-label="Morzsamenü">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link
            to="/"
            className="font-medium text-zinc-600 transition-colors hover:text-primary"
          >
            Kezdőlap
          </Link>
        </li>

        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex items-center gap-2"
          >
            <ChevronRight
              size={14}
              strokeWidth={1.8}
              className="shrink-0 text-zinc-400"
              aria-hidden="true"
            />

            {item.href ? (
              <Link
                to={item.href}
                className="font-medium text-zinc-600 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-primary">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

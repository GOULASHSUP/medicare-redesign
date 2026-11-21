import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Search, X } from "lucide-react";
import {
  exampleSearches,
  searchableServices,
} from "../../data/searchableServices";

function normalizeText(text: string) {
  return text
    .toLocaleLowerCase("hu-HU")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l");
}

type AnimationPhase = "typing" | "showing" | "deleting";

export default function ServiceSearch() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isManualMode, setIsManualMode] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animationPhase, setAnimationPhase] =
    useState<AnimationPhase>("typing");

  const exampleIndexRef = useRef(0);
  const characterIndexRef = useRef(0);
  const animationTimeoutRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (isFocused || isManualMode || prefersReducedMotion) {
      return;
    }

    const currentExample = exampleSearches[exampleIndexRef.current];

    if (animationPhase === "typing") {
      if (characterIndexRef.current < currentExample.length) {
        animationTimeoutRef.current = window.setTimeout(() => {
          characterIndexRef.current++;

          setQuery(currentExample.slice(0, characterIndexRef.current));
        }, 100);
      } else {
        animationTimeoutRef.current = window.setTimeout(() => {
          setAnimationPhase("showing");
        }, 400);
      }
    }

    if (animationPhase === "showing") {
      animationTimeoutRef.current = window.setTimeout(() => {
        setAnimationPhase("deleting");
      }, 2500);
    }

    if (animationPhase === "deleting") {
      if (characterIndexRef.current > 0) {
        animationTimeoutRef.current = window.setTimeout(() => {
          characterIndexRef.current--;

          setQuery(currentExample.slice(0, characterIndexRef.current));
        }, 50);
      } else {
        animationTimeoutRef.current = window.setTimeout(() => {
          exampleIndexRef.current =
            (exampleIndexRef.current + 1) % exampleSearches.length;

          setAnimationPhase("typing");
        }, 500);
      }
    }

    return () => {
      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [query, animationPhase, isFocused, isManualMode, prefersReducedMotion]);

  const results = useMemo(() => {
    const normalizedQuery = normalizeText(query.trim());

    if (!normalizedQuery) return [];

    return searchableServices.filter((service) => {
      const searchableText = [
        service.title,
        service.description,
        ...service.keywords,
      ]
        .map(normalizeText)
        .join(" ");

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  function handleBlur() {
    setIsFocused(false);

    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsManualMode(false);
      setQuery("");
      characterIndexRef.current = 0;
      setAnimationPhase("typing");
    }, 1500);
  }

  function handleFocus() {
    setIsFocused(true);
    setIsManualMode(true);

    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
  }

  function handleClear() {
    setQuery("");
    setIsManualMode(true);
  }

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current);
      }

      if (resumeTimeoutRef.current !== null) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const shouldShowResults =
    query.trim().length > 0 && (isManualMode || animationPhase === "showing");

  const hasVisibleResults = shouldShowResults;

  return (
    <div className="w-full">
      {/* Search Input */}
      <div className="relative">
        <Search
          size={22}
          strokeWidth={1.8}
          className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-primary"
          aria-hidden="true"
        />

        <input
          type="search"
          value={query}
          onChange={(event) => {
            setIsManualMode(true);
            setQuery(event.target.value);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Milyen szolgáltatást keres?"
          aria-label="Egészségügyi szolgáltatások keresése"
          className={`w-full border border-zinc-200 bg-white py-5 pr-14 pl-14 text-base text-zinc-900 shadow-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/15 ${
            hasVisibleResults ? "rounded-t-xl rounded-b-none" : "rounded-xl"
          }`}
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Keresés törlése"
            className="absolute top-1/2 right-4 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-primary"
          >
            <X size={19} strokeWidth={1.8} />
          </button>
        )}
      </div>

      {/* Search Results */}
      <div className="min-h-36">
        {shouldShowResults && results.length > 0 ? (
          <div className="overflow-hidden rounded-b-xl border border-t-0 border-zinc-200 bg-white shadow-sm">
            {results.slice(0, 3).map((service) => (
              <Link
                key={service.id}
                to={service.href}
                className="group flex items-center justify-between gap-4 border-b border-zinc-100 py-4 pr-4 pl-4 transition-colors last:border-b-0 hover:bg-primary-light/40 focus-visible:bg-primary-light/40 focus-visible:outline-2 focus-visible:outline-primary"
              >
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {service.description}
                  </p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                  <ArrowRight
                    size={19}
                    strokeWidth={1.8}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        ) : shouldShowResults && results.length === 0 ? (
          <div className="rounded-b-xl border border-t-0 border-zinc-200 bg-white p-5 text-sm text-zinc-600">
            Nem található a keresésnek megfelelő szolgáltatás. Próbáljon meg más
            keresőkifejezést.
          </div>
        ) : (
          <p className="px-1 pt-5 text-sm text-zinc-500">
            Keressen vizsgálatok, szakrendelések és egészségügyi szolgáltatások
            között.
          </p>
        )}
      </div>
    </div>
  );
}

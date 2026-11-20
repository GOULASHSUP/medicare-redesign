import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, X } from "lucide-react";

export default function EmergencyNotice() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="pointer-events-none fixed right-0 bottom-6 z-40 w-fit">
      {/* Expanded Badge */}
      <div
        className={`pointer-events-auto relative flex min-h-12 w-max max-w-[calc(100vw-3rem)] items-center gap-3 rounded-l-full border border-primary/30 bg-primary py-3 pr-5 pl-4 text-white shadow-xl transition-transform duration-300 ease-in-out motion-reduce:transition-none sm:min-h-14 sm:gap-5 sm:py-4 sm:pr-7 sm:pl-5 ${
          isOpen ? "translate-x-0" : "translate-x-[calc(100%+1px)]"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Értesítés bezárása"
          tabIndex={isOpen ? 0 : -1}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        >
          <X size={18} strokeWidth={2} aria-hidden="true" />
        </button>

        {/* Notice Text */}
        <p className="text-xs font-semibold leading-snug sm:text-sm">
          <Link
            to="/surgossegi-centrum"
            className="underline decoration-white/70 underline-offset-3 transition-colors hover:text-white/80"
          >
            Sürgősségi Centrumunk
          </Link>{" "}
          hétvégén is nyitva tart!
        </p>
      </div>

      {/* Collapsed Tab */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Sürgősségi értesítés megnyitása"
        aria-hidden={isOpen}
        tabIndex={isOpen ? -1 : 0}
        className={`pointer-events-auto absolute top-0 right-0 flex h-13 w-9 items-center justify-center rounded-l-full bg-primary text-white shadow-xl transition-all duration-300 ease-in-out motion-reduce:transition-none sm:h-15 ${
          isOpen
            ? "pointer-events-none translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        <ChevronLeft size={20} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
}

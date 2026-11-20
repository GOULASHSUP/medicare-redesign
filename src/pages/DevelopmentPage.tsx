import { Link, useLocation } from "react-router";

export default function DevelopmentPage() {
  const { pathname } = useLocation();

  const pageName =
    pathname.split("/").filter(Boolean).pop()?.replace(/-/g, " ") ?? "Unknown";

  return (
    <section className="flex min-h-[65vh] items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          You are on the{" "}
          <span className="capitalize text-primary">{pageName}</span> page.
        </h1>

        <p className="mt-4 text-base text-zinc-600 sm:text-lg">
          This page is for development purposes only!
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-hover"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}

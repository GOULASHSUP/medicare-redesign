import { useState, type FormEvent } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "Ez egy bemutató űrlap. A hírlevél-feliratkozás jelenleg nem elérhető.",
    );
  }

  return (
    <div className="bg-primary-light">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-sm">
            <Mail size={24} strokeWidth={1.7} aria-hidden="true" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Maradjon kapcsolatban{" "}
            <span className="text-primary">az egészséggel!</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Iratkozzon fel hírlevelünkre, hogy megismerje legújabb
            szolgáltatásainkat és hasznos tippeket kapjon egészsége
            megőrzéséhez!
          </p>
        </div>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 grid max-w-4xl gap-3 md:grid-cols-[1fr_1fr_auto]"
        >
          <label className="sr-only" htmlFor="newsletter-name">
            Név
          </label>

          <input
            id="newsletter-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Név"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="min-w-0 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/15"
          />

          <label className="sr-only" htmlFor="newsletter-email">
            E-mail-cím
          </label>

          <input
            id="newsletter-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="E-mail-cím"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="min-w-0 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/15"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Feliratkozom
            <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </form>

        {message && (
          <p
            role="status"
            className="mx-auto mt-5 max-w-4xl text-center text-sm text-zinc-600"
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

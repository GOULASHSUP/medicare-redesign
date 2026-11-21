import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MailOpen } from "lucide-react";

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
    <div className="relative isolate overflow-hidden bg-primary-light">
      {/* Decorative Email Icons */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Top Left */}
        <Mail
          size={76}
          strokeWidth={1}
          className="absolute top-[12%] left-[5%] -rotate-18 text-[#D9E7F5]"
        />

        {/* Middle Left */}
        <MailOpen
          size={48}
          strokeWidth={1}
          className="absolute top-[58%] left-[12%] rotate-14 text-[#D9E7F5]"
        />

        {/* Bottom Left */}
        <Mail
          size={36}
          strokeWidth={1.2}
          className="absolute bottom-[8%] left-[3%] rotate-20 text-[#D9E7F5]"
        />

        {/* Top Right */}
        <MailOpen
          size={70}
          strokeWidth={1}
          className="absolute top-[10%] right-[6%] rotate-15 text-[#D9E7F5]"
        />

        {/* Middle Right */}
        <Mail
          size={46}
          strokeWidth={1}
          className="absolute top-[52%] right-[13%] -rotate-12 text-[#D9E7F5]"
        />

        {/* Bottom Right */}
        <MailOpen
          size={38}
          strokeWidth={1.2}
          className="absolute right-[4%] bottom-[8%] -rotate-20 text-[#D9E7F5]"
        />
      </div>

      {/* Newsletter Content */}
      <div className="section-spacing relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
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

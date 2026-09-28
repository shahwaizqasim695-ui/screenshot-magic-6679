import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BookCover } from "@/components/book-cover";
import { Reveal } from "@/components/reveal";
import { book, chapters, themes } from "@/lib/book-data";

export const Route = createFileRoute("/book")({
  component: AboutBook,
  head: () => ({
    meta: [
      { title: "About the Book — Mastersippi J2: Jessica" },
      {
        name: "description",
        content:
          "Synopsis, key themes, and the full chapter list for Mastersippi J2 — Jessica, book one of The Storm Collection by Tempestt Lyles.",
      },
      { property: "og:title", content: "About the Book — Mastersippi J2: Jessica" },
      {
        property: "og:description",
        content:
          "Synopsis, themes, and chapter list for book one of The Storm Collection by Tempestt Lyles.",
      },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
});

function AboutBook() {
  return (
    <>
      <section className="page-warm border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
          <Reveal>
            <p className="eyebrow">About the book</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">
              Mastersippi J2
              <span className="block italic text-warm-gradient">Jessica</span>
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">
              {book.genre} · {chapters.length} chapters · Published by {book.publisher}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <BookCover className="mx-auto w-full max-w-[17rem]" />
          </Reveal>
        </div>
      </section>

      {/* Synopsis */}
      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight">The Synopsis</h2>
          <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
            <p>
              Jessica has everything a life is supposed to be made of: siblings she
              loves, a mother she answers to, work that fills her days, and a man named
              Earl. From the outside it holds together. Inside, she is running on fumes —
              sleepless, bruised, smiling through a grief she has never been allowed to
              name.
            </p>
            <p>
              When Earl goes too far one more time, Jessica does the only thing left. She
              gets in the car. No destination, no packed plan, no one told. She crosses
              state lines into a place where nobody knows her, and books a hotel room for
              seven days. Seven days of peace, she tells herself. Seven days to breathe.
            </p>
            <p>
              What she finds instead is everything she has been outrunning. A stranger's
              kindness. A bar at the front desk. Voices she is afraid to listen to. A
              pregnancy. A phone call from a doctor. A family who will have to be told.
              Over one week away and three days back home, Jessica's life comes apart
              along the seams that were always weak — and the woman who walks out of it
              is not the one who drove away.
            </p>
            <p>
              <em>Mastersippi J2 — Jessica</em> is book one of {book.series}, a
              three-part journey through betrayal, toxic love, family secrets, and the
              unglamorous, stubborn work of healing. It does not promise Jessica peace.
              It asks whether she can learn to build it.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Themes */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight">Key Themes</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme, i) => (
              <Reveal key={theme.title} delay={i * 0.06}>
                <article className="surface-card h-full p-7">
                  <h3 className="text-xl">{theme.title}</h3>
                  <div className="rule-warm my-4 w-16" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {theme.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight">Table of Contents</h2>
          <p className="mt-4 text-muted-foreground">
            {chapters.length} chapters, from the night she leaves to the question she is
            left holding.
          </p>
        </Reveal>
        <ol className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {chapters.map((title, i) => (
            <Reveal key={title} delay={Math.min(i, 8) * 0.03} y={14}>
              <li className="flex gap-4 border-b border-border/70 py-3.5">
                <span className="w-7 shrink-0 font-display text-base text-gold">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed">{title}</span>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              to="/excerpt"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Read chapter one
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/buy"
              className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              Get the book
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

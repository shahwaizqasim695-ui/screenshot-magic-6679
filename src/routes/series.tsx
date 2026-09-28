import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BookCover } from "@/components/book-cover";
import { Reveal } from "@/components/reveal";
import { book, seriesBooks } from "@/lib/book-data";

export const Route = createFileRoute("/series")({
  component: Series,
  head: () => ({
    meta: [
      { title: "The Storm Collection — A Three-Book Series by Tempestt Lyles" },
      {
        name: "description",
        content:
          "The Storm Collection follows Jessica across three books of betrayal, family secrets, and healing. Book one, Mastersippi J2 — Jessica, is available now.",
      },
      { property: "og:title", content: "The Storm Collection by Tempestt Lyles" },
      {
        property: "og:description",
        content:
          "Three books, one becoming. Explore The Book of Jessica series by Tempestt Lyles.",
      },
      { property: "og:url", content: "/series" },
    ],
    links: [{ rel: "canonical", href: "/series" }],
  }),
});

function Series() {
  return (
    <>
      <section className="page-warm border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <Reveal>
            <p className="eyebrow">The series</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">
              The Storm <span className="italic text-warm-gradient">Collection</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl leading-relaxed text-muted-foreground">
              Also known as <em>The Book of Jessica</em>: three novels that follow one
              woman from the night she drives away to the day she stops running. Each
              book is its own storm — the leaving, the reckoning, and the rebuilding.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Book one spotlight */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Reveal>
            <BookCover className="mx-auto w-full max-w-[16rem]" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Book one · Available now</p>
            <h2 className="mt-4 font-display text-4xl leading-tight lg:text-5xl">
              Mastersippi J2 — Jessica
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Jessica plans a seven-day escape and ends up crossing every line she drew
              for herself. Across 27 chapters she loses her footing, finds a pregnancy
              she did not plan, faces her mother and siblings, and returns home to a life
              that no longer fits.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              It is the opening storm of the collection, and the one that names her.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5"
              >
                About this book
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/excerpt"
                className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                Read a sample
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Future books */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight">What comes next</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {seriesBooks.map((entry, i) => (
              <Reveal key={entry.title} delay={i * 0.08}>
                <article className="surface-card flex h-full flex-col p-7">
                  <p className="eyebrow">{entry.number}</p>
                  <h3 className="mt-4 text-2xl leading-snug">{entry.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {entry.body}
                  </p>
                  <span
                    className={`mt-6 inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-medium ${
                      entry.available
                        ? "bg-accent text-accent-foreground"
                        : "border border-border text-muted-foreground"
                    }`}
                  >
                    {entry.status}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-12 text-sm text-muted-foreground">
              Want to know when books two and three arrive?{" "}
              <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
                Join the newsletter
              </Link>
              . Published by {book.publisher}.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

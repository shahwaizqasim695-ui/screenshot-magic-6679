import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";
import { BookCover } from "@/components/book-cover";
import { Reveal } from "@/components/reveal";
import { book, seriesBooks, themes } from "@/lib/book-data";
import authorAsset from "@/assets/tempestt-lyles.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mastersippi J2 — Jessica | The Storm Collection by Tempestt Lyles" },
      {
        name: "description",
        content:
          "Book one of The Storm Collection by Tempestt Lyles. Seven days away from everything she knows — a story of betrayal, family secrets, shattered trust, and rebirth.",
      },
      { property: "og:title", content: "Mastersippi J2 — Jessica: The Storm Collection" },
      {
        property: "og:description",
        content:
          "A novel of betrayal, identity, and healing by Tempestt Lyles. Published by Parker Publishers.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="page-warm relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 size-[34rem] rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.82 0.11 68 / 60%), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {book.series} · Book One
            </motion.p>
            <motion.h1
              className="mt-5 font-display text-5xl leading-[1.04] sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              She drove away to
              <br />
              find out who
              <br />
              <span className="text-warm-gradient italic">she was.</span>
            </motion.h1>
            <motion.p
              className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
            >
              Seven days. No plan, no map, no name. <em>Mastersippi J2 — Jessica</em> is
              the story of a woman who leaves a toxic cycle behind and discovers that
              peace has to be built, not found.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26 }}
            >
              <Link
                to="/buy"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              >
                Get the Book
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/series"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                Explore the Series
              </Link>
            </motion.div>
            <motion.p
              className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {book.genre}
            </motion.p>
          </div>

          <BookCover className="mx-auto w-full max-w-sm lg:max-w-md" />
        </div>
      </section>

      {/* Synopsis teaser */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-28">
        <Reveal>
          <Quote className="mx-auto size-8 text-gold" />
          <p className="mt-8 font-display text-2xl leading-relaxed sm:text-3xl sm:leading-[1.5]">
            “Being in a toxic cycle is hard to break, especially if you don't know it's
            toxic. Because what's toxic to you could be normal to someone else.”
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-10 max-w-2xl leading-relaxed text-muted-foreground">
            Jessica has a loving family, a familiar life, and a man named Earl who has
            taken more from her than she can name. After one sleepless night too many,
            she gets in the car and crosses a state line with no plan at all. What
            follows is seven days that unmake her — and a return home that asks whether
            she has the courage to rebuild.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            to="/book"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            Read the full synopsis <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      {/* Themes */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <p className="eyebrow">Inside the story</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight lg:text-5xl">
              The storms Jessica walks through
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme, i) => (
              <Reveal key={theme.title} delay={i * 0.06}>
                <article className="surface-card h-full p-7">
                  <span className="font-display text-3xl text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl">{theme.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {theme.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-xs">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.8 0.1 60 / 45%), transparent 70%)",
                }}
              />
              <img
                src={authorAsset.url}
                alt="Author Tempestt Lyles"
                width={560}
                height={640}
                className="relative w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-lift)]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">The author</p>
            <h2 className="mt-4 font-display text-4xl leading-tight lg:text-5xl">
              Tempestt Lyles
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Tempestt Lyles writes about the parts of family life that stay unspoken.
              Her three-book series, <em>The Book of Jessica</em>, follows one woman
              through betrayal, motherhood, and the slow rebuilding of trust.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              “I hope you enjoy this series and don't miss out on the rest of{" "}
              <em>The Storm Collection</em>.”
            </p>
            <Link
              to="/author"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              Meet Tempestt <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Series overview */}
      <section className="border-t border-border page-warm">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <p className="eyebrow">The Storm Collection</p>
            <h2 className="mt-4 font-display text-4xl leading-tight lg:text-5xl">
              Three books, one becoming
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
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
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { excerpt } from "@/lib/book-data";

export const Route = createFileRoute("/excerpt")({
  component: Excerpt,
  head: () => ({
    meta: [
      { title: "Read a Sample — Mastersippi J2: Jessica" },
      {
        name: "description",
        content:
          "Read the opening chapters of Mastersippi J2 — Jessica by Tempestt Lyles, book one of The Storm Collection.",
      },
      { property: "og:title", content: "Read a Sample — Mastersippi J2: Jessica" },
      {
        property: "og:description",
        content:
          "The opening chapters of book one of The Storm Collection by Tempestt Lyles.",
      },
      { property: "og:url", content: "/excerpt" },
    ],
    links: [{ rel: "canonical", href: "/excerpt" }],
  }),
});

function Excerpt() {
  const [active, setActive] = useState(excerpt.chapters[0]!.id);
  const chapter = excerpt.chapters.find((c) => c.id === active) ?? excerpt.chapters[0]!;

  return (
    <>
      <section className="page-warm border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center lg:px-8 lg:py-20">
          <Reveal>
            <p className="eyebrow">Sample chapters</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">
              Start <span className="italic text-warm-gradient">reading</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
              The first two chapters of <em>Mastersippi J2 — Jessica</em>, exactly as they
              appear in the book.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="Chapters" className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Chapters</p>
            <ul className="mt-5 flex gap-3 lg:flex-col lg:gap-1">
              {excerpt.chapters.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => setActive(c.id)}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm transition-colors ${
                      c.id === active
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="block text-[0.68rem] uppercase tracking-[0.2em]">
                      Chapter {c.id}
                    </span>
                    <span className="mt-1 block font-display text-base text-foreground">
                      {c.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <motion.article
            key={chapter.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Chapter {chapter.id}</p>
            <h2 className="mt-3 font-display text-4xl leading-tight">{chapter.title}</h2>
            <div className="rule-warm my-8" />
            <div className="prose-reading">
              {chapter.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <div className="surface-card mt-14 p-8 text-center">
              <p className="font-display text-2xl">Keep reading Jessica's story</p>
              <p className="mt-3 text-sm text-muted-foreground">
                25 more chapters wait in the full book.
              </p>
              <Link
                to="/buy"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5"
              >
                Get the book
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
}

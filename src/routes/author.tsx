import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, Facebook } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { authorBio, book } from "@/lib/book-data";
import authorAsset from "@/assets/tempestt-lyles.jpg.asset.json";

export const Route = createFileRoute("/author")({
  component: AboutAuthor,
  head: () => ({
    meta: [
      { title: "About Tempestt Lyles — Author of The Storm Collection" },
      {
        name: "description",
        content:
          "Meet Tempestt Lyles, author of the three-book series The Book of Jessica and The Storm Collection, published by Parker Publishers.",
      },
      { property: "og:title", content: "About Tempestt Lyles" },
      {
        property: "og:description",
        content:
          "Meet the author of The Book of Jessica, a three-book series about betrayal, trust, and healing.",
      },
      { property: "og:url", content: "/author" },
    ],
    links: [{ rel: "canonical", href: "/author" }],
  }),
});

function AboutAuthor() {
  return (
    <>
      <section className="page-warm border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="relative mx-auto max-w-xs">
              <div
                aria-hidden
                className="absolute -inset-5 rounded-3xl opacity-60 blur-2xl"
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
            <p className="eyebrow">About the author</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">
              Tempestt <span className="italic text-warm-gradient">Lyles</span>
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">
              Author of <em>The Book of Jessica</em>, a three-book series published by{" "}
              {book.publisher}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight">In her own words</h2>
          <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
            {authorBio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <blockquote className="surface-card mt-14 p-8 lg:p-10">
            <p className="font-display text-2xl leading-relaxed">
              “Jessica's story is not a neat one. She is hurting, she is hiding it, and
              she is still trying. I wrote her for everyone who has smiled through a week
              they barely survived.”
            </p>
            <footer className="mt-6 text-sm text-muted-foreground">
              — A personal note from Tempestt Lyles
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-14">
            <p className="eyebrow">Stay in touch</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`mailto:${book.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <Mail className="size-4" /> Email the author
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <Instagram className="size-4" /> Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <Facebook className="size-4" /> Facebook
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Social links are placeholders — send me the real profiles and I'll connect
              them.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}

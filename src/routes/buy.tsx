import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BookCover } from "@/components/book-cover";
import { Reveal } from "@/components/reveal";
import { book, chapters, retailers } from "@/lib/book-data";

export const Route = createFileRoute("/buy")({
  component: Buy,
  head: () => ({
    meta: [
      { title: "Get the Book — Mastersippi J2: Jessica" },
      {
        name: "description",
        content:
          "Buy Mastersippi J2 — Jessica by Tempestt Lyles. Paperback and ebook, published by Parker Publishers. ISBN 978-1-963456-78-0.",
      },
      { property: "og:title", content: "Get the Book — Mastersippi J2: Jessica" },
      {
        property: "og:description",
        content:
          "Order book one of The Storm Collection by Tempestt Lyles, published by Parker Publishers.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/buy" },
    ],
    links: [{ rel: "canonical", href: "/buy" }],
  }),
});

function Buy() {
  return (
    <section className="page-warm">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-24">
        <Reveal>
          <BookCover className="mx-auto w-full max-w-[18rem]" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">Get the book</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">
            Bring Jessica <span className="italic text-warm-gradient">home</span>
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            <em>Mastersippi J2 — Jessica</em> is available in paperback and ebook. Choose
            where you'd like to order.
          </p>

          <div className="mt-10 space-y-4">
            {retailers.map((retailer, i) => (
              <Reveal key={retailer.name} delay={0.1 + i * 0.07} y={16}>
                <a
                  href={retailer.href}
                  className="surface-card flex items-center justify-between gap-4 p-6"
                >
                  <span className="min-w-0">
                    <span className="block font-display text-xl">{retailer.name}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {retailer.format}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-primary" />
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Store links are placeholders — share your listing URLs and I'll wire them up.
          </p>

          <Reveal delay={0.3}>
            <dl className="mt-12 grid gap-y-4 rounded-2xl border border-border bg-card p-7 text-sm sm:grid-cols-2">
              <div>
                <dt className="eyebrow">Title</dt>
                <dd className="mt-1.5">
                  {book.title} — {book.subtitle}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Series</dt>
                <dd className="mt-1.5">{book.series} · Book One</dd>
              </div>
              <div>
                <dt className="eyebrow">Author</dt>
                <dd className="mt-1.5">{book.author}</dd>
              </div>
              <div>
                <dt className="eyebrow">Publisher</dt>
                <dd className="mt-1.5">{book.publisher}</dd>
              </div>
              <div>
                <dt className="eyebrow">ISBN</dt>
                <dd className="mt-1.5">{book.isbn}</dd>
              </div>
              <div>
                <dt className="eyebrow">Length</dt>
                <dd className="mt-1.5">{chapters.length} chapters</dd>
              </div>
            </dl>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}

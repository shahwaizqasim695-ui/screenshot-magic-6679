import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { book } from "@/lib/book-data";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact & Newsletter — Tempestt Lyles" },
      {
        name: "description",
        content:
          "Reach Tempestt Lyles or join the newsletter for news about The Storm Collection and the next books in The Book of Jessica series.",
      },
      { property: "og:title", content: "Contact & Newsletter — Tempestt Lyles" },
      {
        property: "og:description",
        content:
          "Get in touch with the author or sign up for updates on The Storm Collection.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const fieldClass =
  "mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring/25";

function Contact() {
  const [sent, setSent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="page-warm">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-2xl font-display text-5xl leading-[1.05] lg:text-6xl">
            Say hello, or <span className="italic text-warm-gradient">stay close</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Questions, book club invitations, interview requests, or just a note about
            what Jessica's story meant to you — all welcome.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <form
              className="surface-card p-8 lg:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <h2 className="font-display text-2xl">Send a message</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <label className="block text-sm">
                  Name
                  <input required name="name" className={fieldClass} placeholder="Your name" />
                </label>
                <label className="block text-sm">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="mt-6 block text-sm">
                Subject
                <input name="subject" className={fieldClass} placeholder="What's this about?" />
              </label>
              <label className="mt-6 block text-sm">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className={fieldClass}
                  placeholder="Write your message…"
                />
              </label>
              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5"
              >
                <Send className="size-4" /> Send message
              </button>
              <p aria-live="polite" className="mt-4 text-sm text-primary">
                {sent
                  ? "Thank you — your message has been noted. Email delivery isn't connected yet."
                  : ""}
              </p>
            </form>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <form
                className="surface-card p-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
              >
                <h2 className="font-display text-2xl">Newsletter</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Be first to hear about books two and three of {book.series}.
                </p>
                <label className="mt-6 block text-sm">
                  Email
                  <input
                    required
                    type="email"
                    name="newsletter"
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-full border border-border bg-secondary px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  Sign me up
                </button>
                <p aria-live="polite" className="mt-3 text-sm text-primary">
                  {subscribed ? "You're on the list." : ""}
                </p>
              </form>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="surface-card p-8">
                <p className="eyebrow">Direct</p>
                <a
                  href={`mailto:${book.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-primary"
                >
                  <Mail className="size-4" /> {book.email}
                </a>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {book.publisher}
                  <br />
                  ISBN {book.isbn}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

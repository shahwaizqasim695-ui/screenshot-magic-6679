import { Link } from "@tanstack/react-router";
import { book } from "@/lib/book-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">
              Mastersippi <span className="text-warm-gradient">J2</span> — Jessica
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Book one of {book.series} by {book.author}. A story of betrayal, family
              secrets, and the long work of healing.
            </p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/book" className="transition-colors hover:text-primary">About the Book</Link></li>
              <li><Link to="/series" className="transition-colors hover:text-primary">The Storm Collection</Link></li>
              <li><Link to="/excerpt" className="transition-colors hover:text-primary">Read a Sample</Link></li>
              <li><Link to="/author" className="transition-colors hover:text-primary">About the Author</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Publisher</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>{book.publisher}</li>
              <li>ISBN {book.isbn}</li>
              <li>
                <a href={`mailto:${book.email}`} className="transition-colors hover:text-primary">
                  {book.email}
                </a>
              </li>
              <li><Link to="/buy" className="transition-colors hover:text-primary">Where to buy</Link></li>
            </ul>
          </div>
        </div>

        <div className="rule-warm mt-12" />
        <p className="mt-6 text-xs text-muted-foreground">
          © 2026 {book.author}. All rights reserved. Published by {book.publisher}.
        </p>
      </div>
    </footer>
  );
}

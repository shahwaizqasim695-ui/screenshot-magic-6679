<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project conventions

- All book copy (synopsis, chapter list, themes, bio, sample chapters, retailer list) lives in `src/lib/book-data.ts` — one source of truth so pages stay consistent.
- Site chrome (sticky nav, footer) is rendered once in `src/routes/__root.tsx`; page routes render content only.
- Scroll animations use the shared `Reveal` component (`src/components/reveal.tsx`) built on `motion/react`, so timing/easing stay uniform.

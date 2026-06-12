# AB Home Solutions — HomeGuard™ Landing Pages (Batch 1)

Seven standalone HTML pages matching the homepage's navy / gold / cream identity.
Each file is fully self-contained (embedded CSS + JS, Google Fonts via link) so you
can upload them individually — exactly like the homepage.

## Files → WordPress page slug

Upload each file's contents into a WordPress page and set the page **slug** to match,
so the shared nav/footer links resolve correctly.

| File                      | Set page slug to     | Live URL                                  |
|---------------------------|----------------------|-------------------------------------------|
| homeguard.html            | `homeguard`          | abhomesolutions.pro/homeguard             |
| contractor-clarity.html   | `contractor-clarity` | abhomesolutions.pro/contractor-clarity    |
| resources.html            | `resources`          | abhomesolutions.pro/resources             |
| blog.html                 | `blog`               | abhomesolutions.pro/blog                  |
| about.html                | `about`              | abhomesolutions.pro/about                 |
| start.html                | `start`              | abhomesolutions.pro/start                 |
| thank-you.html            | `thank-you`          | abhomesolutions.pro/thank-you (noindex)   |

All nav, footer, and button links already point to these clean paths (and `/` for home).

## Notes

- **Links use root-relative paths** (e.g. `/homeguard`). They work live on the domain
  once each slug above is set. (Opening the files directly from disk won't resolve the
  cross-page links — that's expected; they're built for the live site.)
- **start.html** form is front-end only for now. Phase 2 wires it to your email service
  (MailerLite / Kit) for automatic guide delivery + reliable lead capture, then redirects
  to /thank-you. A setup note is included in the page (visible in the editor, not styled
  for visitors — remove before launch or leave; it's inside a .note box).
- **thank-you.html** is set to `noindex` and links the guide at
  `/downloads/homeguard-starter-guide.pdf` — upload your PDF there or update the link.
- **blog.html** category chips filter live on the page, and the footer "Topics" links
  (`/blog#anti-scam`, etc.) auto-apply the matching filter on load. Individual post links
  (e.g. `/blog/contractor-scam-red-flags`) activate when you publish those posts — that's
  the next batch (converting Blogs 1–6).

## Still to come (next batches)
1. Form + email-service wiring (the conversion path)
2. Blog posts 1–6 as HTML + the 5 pillar/category pages


## Selling the guide at $3.99 — launch checklist

1. **Stripe**: Dashboard → Products → Add "HomeGuard™ Guide", $3.99 one-time →
   Create Payment Link. Under *After payment*, redirect to
   `https://abhomesolutions.pro/guide-download`.
2. **_redirects**: replace `REPLACE_WITH_PAYMENT_LINK` in the `/buy` rule with
   the real Payment Link URL. Deploy.
3. **Test**: `/buy` → Stripe test card `4242 4242 4242 4242` → should land on
   `/guide-download` and the PDF should download.
4. `/start` stays the free-checklist email funnel (front-end only until Phase 2
   wires Kit/MailerLite).

Strategy and tier ladder: see `BUSINESS-MODEL.md`.

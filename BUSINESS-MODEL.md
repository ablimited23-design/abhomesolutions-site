# AB Home Solutions — Scalable Business Model

**Principle:** one piece of expertise (HomeGuard™), packaged at four price points,
where each tier markets the next. Local labor is the *top* of the ladder, not the
business itself — everything below it scales without Ariel's hours.

## The Ladder

| Tier | Product | Price | Scales? | Job in the funnel |
|------|---------|-------|---------|-------------------|
| 0 | Blog / anti-scam articles, free checklists | Free (email-gated) | ∞ | Traffic + trust + email list |
| 1 | **HomeGuard™ Guide (PDF)** | **$3.99** | ∞ | Turn readers into customers; qualify buyers |
| 2 | HomeGuard™ Pro (reminders, digital trackers, storm alerts) | $49/yr | ∞ | Recurring revenue; keeps the brand in their inbox |
| 3 | Maintenance visits / annual inspection (MD & DC) | Quote | Local | High-margin service for the warmest leads |

**Why $3.99 works:** it's an impulse price that filters tire-kickers without losing
volume. A $3.99 buyer is 10× more likely to buy Pro or book a visit than a free
downloader. Profit at Tier 1 is marketing budget, not income.

## Unit economics (Tier 1)
- Stripe fee on $3.99 ≈ $0.42 → net ≈ $3.57/sale
- 1,000 sales ≈ $3,570 — modest. The asset is 1,000 *buyer* emails.
- At a 5% Pro conversion: 50 × $49 = $2,450/yr recurring, compounding annually.

## Current implementation (this repo)
- `/buy` → Stripe Payment Link (302 redirect in `netlify.toml`) → `/guide-download`
- `/homeguard#buy` → three-tier pricing section (Guide · Pro waitlist · Visits)
- `/start` → free checklist email capture (lead gen unchanged)
- Pro is sold as a **waitlist** — validate demand before building it.

## Scale path (in order — don't skip)
1. **Now:** Stripe link live, guide selling, waitlist counting signups.
2. **At ~100 guide sales:** wire `/start` form to an email service (Kit/MailerLite);
   3-email nurture: checklist → story from a real job → $3.99 guide offer.
3. **At ~50 Pro waitlist signups:** build Pro as an email automation (seasonal
   reminders + Google Drive trackers). No app needed at $49/yr.
4. **At steady Pro revenue:** productize the inspection (fixed price, fixed
   checklist, written report) so it's sellable by any tech, not just the owner.
5. **The real scale play:** license HomeGuard™ to contractors in other metros
   (white-label guide + Pro system + their branding). Sell the system, not hours.

## KPIs to watch weekly
- Guide sales, visitor→sale %, Pro waitlist count, email list growth, quote requests.

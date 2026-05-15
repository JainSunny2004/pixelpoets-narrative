# PixelPoets Productions — Build Plan (revised)

Premium dark cinematic site for a creative film agency. Scope narrowed to **4 service pages**: AI Ads, Virtual Tours, Reels & Shorts, Corporate Documentaries.

## Routing (TanStack Start file-based, full SSR)

- `/` — Home
- `/services` — Services index (4 cards)
- `/services/ai-ads`
- `/services/virtual-tours`
- `/services/reels-shorts`
- `/services/corporate-documentaries`
- `/work` — Our Work (filterable grid + modal)
- `/insights` — Blog index
- `/insights/$slug` — Article view
- `/contact`

Shared layout in `__root.tsx` renders Navbar + Footer around `<Outlet />`. Each route ships its own `head()` metadata (title, description, og:*).

## Design system

Tokens added to `src/styles.css` in oklch (matching the requested hex palette) and mapped through `@theme inline` so `bg-background`, `text-accent`, `border-border` work:
- bg `#0e0d0b`, surface `#141310`, surface-2 `#1a1815`, surface-offset `#201e1a`
- text `#f0ece3`, muted `#9a9589`, faint `#5a5752`
- accent `#c8922a`, hover `#e0a832`, border `rgba(255,255,255,0.08)`

Fontshare via `<link>` in root `head()`: **Boska** (display, hero, pull quotes — italic for subheads), **Satoshi** (body, nav, UI).

Motion: scroll fade-up via IntersectionObserver `<Reveal>` wrapper; navbar shrinks + solidifies after 80px scroll; `prefers-reduced-motion` disables transitions. Hover = amber border / soft glow.

## Shared components

`Navbar` (transparent → solid `#141310`, Services hover dropdown listing the 4 services, hamburger overlay below 768px), `Footer` (4 cols, darker `#0a0908`, inline IG + YouTube SVGs), `ServiceCard`, `WorkCard`, `BlogCard`, `ProcessTimeline`, `PhilosophyStrip`, `CTABanner`, `SectionHeading`, `Reveal`.

## Pages

**Home** — hero with staggered Boska headline ("Every Brand Has a Story." / "We Make the World Feel It.") + two CTAs + grain overlay; 2-col About snippet ("The Heart Behind The Lens") with cinematic picsum portrait; **4-col services grid (4 cards)**; 3-block philosophy strip (Story First / Strategy Always / Partner, Not Vendor); 3 featured work cards; centered testimonial with oversized amber quote mark; full-width CTA banner.

**Services index** — hero + larger 4-card grid linking to sub-pages.

**Service template** (one component, data-driven) — hero (name in Boska, tagline, breadcrumb), 2-col What We Do + deliverables list, 4-step horizontal process timeline (Discover → Plan → Create → Deliver), 3 differentiator cards, 2 related-work cards, contextual CTA. Service data file holds tagline + deliverables for the 4 services:

1. **AI Ads** — Next-generation advertising powered by AI: hyper-personalized, conversion-focused, visually stunning. Deliverables: AI-generated video ads, dynamic creatives, performance-optimized visuals, A/B variants at scale.
2. **Virtual Tours** — Immersive 360° experiences that let your audience step inside your world. Deliverables: 360° property/campus/hospitality tours, interactive hotspots, web-embeddable, VR-ready.
3. **Reels & Shorts** — Short-form doesn't mean low-impact. Narrative arcs in every reel. Deliverables: Instagram/YouTube Reels, episodic series, food/travel/lifestyle storytelling.
4. **Corporate Documentaries** — Long-form films that capture a company's truth, founders, and culture. Deliverables: founder & origin documentaries, culture films, institutional showcases, premium production + post.

**Our Work** — hero, filter tabs (All / AI Ads / Virtual Tours / Reels / Documentaries), card grid with varied picsum seeds, click → Dialog modal (challenge / approach / deliverables / result).

**Insights** — hero, featured article hero card, 3-col grid of 6 sample posts. Article view: hero image, "PixelPoets Team", date, 3–4 paragraphs, related articles strip. Posts trimmed to match the 4 categories (Brand/AI Ads/Virtual Tours/Reels/Docs).

**Contact** — hero, 2-col (details left: hello@pixelpoets.in, +91 9211969156, IG/YouTube handles, warm paragraph; form right). Form built with react-hook-form + zod (name, company, email, phone, **service select with 4 options**, project brief). Submit → success state with amber check. Below: full-width strip "Story First. Strategy Always." in Boska italic.

## SEO & accessibility

Per-route `head()` metadata, single H1 per page, semantic landmarks, alt text + lazy + dimensions on all images, reduced-motion respected, external links `rel="noopener noreferrer"`.

## Guardrails

No gradient buttons (solid amber only), no colored side borders, no icons in colored circles, no purple/blue. Left-aligned content, asymmetric 2-col layouts, full-bleed image dividers, Boska italic for pull quotes, cinema vocabulary throughout.

## Out of scope for v1

Real CMS (blog content in TS data file), form backend (success state only — wire to Lovable Cloud later), real video assets (cinematic picsum stills as placeholders).

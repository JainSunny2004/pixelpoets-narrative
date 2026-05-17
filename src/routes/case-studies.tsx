import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — PixelPoets Productions" },
      { name: "description", content: "Real brands. Real briefs. Real results — a curated archive of our most impactful brand stories." },
      { property: "og:title", content: "Case Studies — PixelPoets Productions" },
      { property: "og:description", content: "Stories We've Told. Real briefs, cinematic results." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

interface CaseStudy {
  id: string;
  client: string;
  category: string;
  industry: string;
  challenge: string;
  metrics: { value: string; label: string }[];
  imageSeed: string;
  year: string;
  service: string;
  brief: string;
  approach: string;
  created: string[];
  quote: string;
  quoteAuthor: string;
}

const CATEGORIES = [
  "All Works",
  "Brand Films",
  "Institutional",
  "Founder Stories",
  "Reels",
  "AI Ads",
  "Virtual Tours",
  "Branding",
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "aranya",
    client: "Aranya Resorts",
    category: "Brand Films",
    industry: "Hospitality",
    challenge: "Needed a film that made viewers feel the wilderness before they arrived.",
    metrics: [
      { value: "4.1x", label: "Bookings" },
      { value: "800K", label: "Views" },
      { value: "3", label: "Publications" },
    ],
    imageSeed: "resort",
    year: "2025",
    service: "Brand Film",
    brief:
      "Aranya Resorts was opening a new wilderness property far from the conventional resort circuit. Photography couldn't carry the emotion of the place. They needed a film that earned the trip in three minutes.",
    approach:
      "We embedded with the property for a week, shooting at first light and last light only. The edit was paced like a slow exhale — wide on the land, intimate on the rituals, restrained on the voiceover. No drone clichés, no upbeat pop track. The result was a film that felt like memory rather than marketing.",
    created: [
      "3-minute hero brand film",
      "Six 15-second social cutdowns",
      "Sound design and original score",
      "Stills package for press and OTAs",
      "OOH still frame selects",
    ],
    quote: "It's the first film we've ever made that we actually want to rewatch.",
    quoteAuthor: "Founder, Aranya Resorts",
  },
  {
    id: "northstar",
    client: "Northstar Academy",
    category: "Institutional",
    industry: "Education",
    challenge: "A showcase film to speak equally to students and parents during admissions.",
    metrics: [
      { value: "60%", label: "More Inquiries" },
      { value: "1.2M", label: "Views" },
      { value: "3", label: "Seasons Used" },
    ],
    imageSeed: "university",
    year: "2025",
    service: "Institutional Film",
    brief:
      "Northstar's existing admissions video was a brochure on rails. It impressed no one and was costing them serious conversations with the right families.",
    approach:
      "We anchored the film around three students and one teacher — and let the campus speak in the spaces between. A single narrative spine, two registers in the writing (one for the student, one for the parent), and a colour grade that felt like an opening title sequence rather than a corporate explainer.",
    created: [
      "6-minute admissions hero film",
      "90-second parent-facing cut",
      "60-second student-facing cut",
      "Reel and short-form derivatives",
      "Open-house theatre version",
    ],
    quote: "Parents stop us at orientation to talk about the film. That has never happened before.",
    quoteAuthor: "Director of Admissions, Northstar Academy",
  },
  {
    id: "bloom",
    client: "Bloom Skincare",
    category: "Founder Stories",
    industry: "D2C Beauty",
    challenge: "First-time founder needed her origin story to build trust with early customers.",
    metrics: [
      { value: "2.8x", label: "Conversions" },
      { value: "300K", label: "Reach" },
      { value: "Viral", label: "on LinkedIn" },
    ],
    imageSeed: "portrait",
    year: "2026",
    service: "Founder Documentary",
    brief:
      "Bloom's founder had a real story — eczema, dermatologist mother, formulation obsession — but every existing video sounded like a pitch deck on camera.",
    approach:
      "We sat with her for two full days before turning a camera on. The interview was unscripted and shot in her childhood home. We let her contradict herself, pause, and laugh. The edit kept the seams in on purpose. What came out was a founder film that read as a person, not a brand.",
    created: [
      "4-minute founder origin film",
      "Three social-first vertical cuts",
      "LinkedIn-optimised teaser",
      "DTC homepage video loop",
      "Investor-deck embed cut",
    ],
    quote: "I cried watching the rough. It's the most me anything has ever felt.",
    quoteAuthor: "Founder, Bloom Skincare",
  },
  {
    id: "spice-route",
    client: "Spice Route Restaurants",
    category: "Reels",
    industry: "F&B",
    challenge: "A content series to drive weekly footfall through social media alone.",
    metrics: [
      { value: "5x", label: "Followers" },
      { value: "40%", label: "More Bookings" },
      { value: "90", label: "Days" },
    ],
    imageSeed: "restaurant",
    year: "2025",
    service: "Reels Series",
    brief:
      "A four-outlet regional chain that had everything except a reason for the algorithm to care. They needed a sustained content engine, not a one-off shoot.",
    approach:
      "We designed a three-month episodic reel series — one recurring host, one recurring sound bed, one recurring opening frame. Episodes alternated between kitchen craft and guest moments. The repetition trained the feed; the craft kept the saves coming.",
    created: [
      "36 reels across 12 weeks",
      "Episodic format bible",
      "On-call sound and motion design",
      "Booking-link integration plan",
      "Weekly performance debriefs",
    ],
    quote: "We stopped buying ads halfway through the quarter. The reels did the work.",
    quoteAuthor: "Marketing Head, Spice Route Restaurants",
  },
  {
    id: "propvista",
    client: "PropVista Realty",
    category: "Virtual Tours",
    industry: "Real Estate",
    challenge: "NRI buyers needed to experience properties without flying to India.",
    metrics: [
      { value: "3", label: "Remote Sales" },
      { value: "70%", label: "Fewer Site Visits" },
      { value: "12", label: "Cities" },
    ],
    imageSeed: "architecture",
    year: "2025",
    service: "Virtual Tours",
    brief:
      "PropVista was losing high-intent NRI buyers at the 'can I see it' stage. Existing walkthrough videos felt like real-estate listings, not experiences.",
    approach:
      "We treated every tour like a film set — lit, dressed, and graded. Cinematic 360° capture with narrative wayfinding, ambient sound design, and hotspots that opened onto neighbourhood context. Buyers could spend twenty minutes inside a flat from a laptop in Dubai and feel like they'd visited.",
    created: [
      "12 immersive 360° property tours",
      "Web-embeddable viewer with hotspots",
      "Voiceover narration in three languages",
      "Neighbourhood context overlays",
      "Mobile-optimised VR build",
    ],
    quote: "Three of our last five sales never set foot on the property.",
    quoteAuthor: "Director, PropVista Realty",
  },
  {
    id: "zenfit",
    client: "ZenFit App",
    category: "AI Ads",
    industry: "Health & Wellness",
    challenge: "Scale ad creatives to 100+ variants without scaling production costs.",
    metrics: [
      { value: "120", label: "Ad Variants" },
      { value: "2.4x", label: "ROAS" },
      { value: "55%", label: "Lower CPL" },
    ],
    imageSeed: "fitness",
    year: "2026",
    service: "AI Ads Engine",
    brief:
      "ZenFit was running a single launch creative against twelve audience segments. Their CPL was creeping monthly and their team was burned out on output.",
    approach:
      "We built an AI-assisted variant engine off a single three-day shoot. Hooks, hold beats, and CTAs were modularised; AI handled the permutations; humans approved every cut. The same shoot fed a quarter's worth of testing.",
    created: [
      "120 ad variants across formats",
      "Audience-mapped hook library",
      "Performance-graded creative dashboard",
      "Weekly variant refresh pipeline",
      "Always-on A/B framework",
    ],
    quote: "We finally have a creative system, not a creative crisis.",
    quoteAuthor: "Growth Lead, ZenFit App",
  },
  {
    id: "himalayan",
    client: "Himalayan Trek Co.",
    category: "Brand Films",
    industry: "Adventure Tourism",
    challenge: "Build an audience of adventure travelers from absolute zero.",
    metrics: [
      { value: "0 → 85K", label: "Followers" },
      { value: "3", label: "Sold-Out Seasons" },
      { value: "₹40L", label: "in Bookings" },
    ],
    imageSeed: "mountains",
    year: "2025",
    service: "Brand Films + Content System",
    brief:
      "A founder-led trekking outfit with deep operations expertise and zero brand presence. The audience didn't know they existed.",
    approach:
      "We built the brand voice on the trail. Three expeditions, three films, one consistent visual language. Each film centred a real trekker, not a presenter. Released cadenced over a season, with reel derivatives feeding the feed between drops.",
    created: [
      "3 expedition brand films",
      "18 reel derivatives",
      "Founder-led short documentary",
      "Booking page video loops",
      "Identity refresh for social",
    ],
    quote: "Three seasons sold out before we'd spent a rupee on ads.",
    quoteAuthor: "Founder, Himalayan Trek Co.",
  },
  {
    id: "veda-legal",
    client: "Veda Legal",
    category: "Branding",
    industry: "Legal Services",
    challenge: "Legacy law firm needing a modern identity that still commanded authority.",
    metrics: [
      { value: "Full", label: "Brand Overhaul" },
      { value: "New", label: "Website" },
      { value: "45%", label: "More Leads" },
    ],
    imageSeed: "office",
    year: "2026",
    service: "Branding + Web",
    brief:
      "A four-decade-old practice whose visual identity hadn't moved with the partners' ambitions. The mark, the typography, the website — none of it matched the calibre of the work.",
    approach:
      "We rebuilt the identity from the inside out — starting with the firm's actual positioning, not its old logo. A restrained editorial system, a serif wordmark with intent, and a website that read like a publication rather than a brochure.",
    created: [
      "Wordmark and identity system",
      "Editorial brand guidelines",
      "Full website design and build",
      "Partner photography direction",
      "Pitch and proposal templates",
    ],
    quote: "Clients now mention the brand before we do.",
    quoteAuthor: "Managing Partner, Veda Legal",
  },
];

function CaseStudiesPage() {
  const [filter, setFilter] = useState<string>("All Works");
  const [active, setActive] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const visible = useMemo(
    () => (id: string) => {
      if (filter === "All Works") return true;
      const cs = CASE_STUDIES.find((c) => c.id === id);
      return cs?.category === filter;
    },
    [filter],
  );

  return (
    <>
      {/* Hero */}
      <section className="relative grain pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 20%, rgba(200,146,42,0.08) 0%, transparent 70%), #0e0d0b",
          }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Our Portfolio</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.98] max-w-4xl">
              Stories
              <br />
              <span className="italic text-accent">We've Told.</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-8 max-w-2xl leading-relaxed">
              Real brands. Real briefs. Real results. Here's how we turned creative challenges into cinematic moments that moved audiences.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href="#case-studies-grid"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-xs uppercase tracking-[0.22em] rounded-sm hover:bg-accent-hover transition-colors"
              >
                Explore All Work
              </a>
              <a
                href="https://youtube.com/@pixelpoetsproductions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background/70 backdrop-blur border border-border px-7 py-3.5 text-xs uppercase tracking-[0.22em] rounded-sm hover:border-accent hover:text-accent transition-colors"
              >
                Watch Showreel
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-[68px] z-30 bg-background/90 backdrop-blur-md border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-xs uppercase tracking-[0.2em] px-4 py-2.5 rounded-sm border transition-colors whitespace-nowrap ${
                  filter === c
                    ? "border-accent text-accent bg-accent/5"
                    : "border-border text-foreground/75 hover:text-accent hover:border-accent/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section id="case-studies-grid" className="mx-auto max-w-7xl px-6 pt-20 pb-24">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Selected <span className="italic text-accent">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-5 max-w-2xl">
            A curated archive of our most impactful brand stories.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {CASE_STUDIES.map((cs, i) => {
            const show = visible(cs.id);
            return (
              <article
                key={cs.id}
                data-category={cs.category}
                aria-hidden={!show}
                className={`transition-all duration-500 ease-out ${
                  show
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none absolute -z-10"
                }`}
                style={{ transitionDelay: show ? `${(i % 4) * 40}ms` : "0ms" }}
              >
                <div className="group bg-surface border border-border overflow-hidden flex flex-col h-full">
                  <div className="relative overflow-hidden aspect-[16/9] bg-surface-2">
                    <img
                      src={`https://picsum.photos/seed/${cs.imageSeed}/800/450`}
                      alt={`${cs.client} — ${cs.category}`}
                      loading="lazy"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-background/80 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] border border-border">
                        {cs.category}
                      </span>
                      <span className="bg-background/80 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] border border-border text-accent">
                        {cs.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-display text-3xl group-hover:text-accent transition-colors">
                      {cs.client}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                      {cs.challenge}
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                      {cs.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display text-accent text-2xl leading-none">{m.value}</div>
                          <div className="text-[10px] uppercase tracking-[0.18em] text-faint mt-2">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setActive(cs)}
                      className="mt-7 self-start text-xs uppercase tracking-[0.22em] text-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                    >
                      Read Case Study <span aria-hidden>→</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div
          className="relative overflow-hidden border border-border p-12 md:p-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(200,146,42,0.08) 0%, rgba(14,13,11,0.6) 60%), #0e0d0b",
          }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Next Chapter</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
            Your Brand Could Be <span className="italic text-accent">Our Next Story.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto">
            Every case study started with a single conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 mt-9 text-xs uppercase tracking-[0.22em] rounded-sm hover:bg-accent-hover transition-colors"
          >
            Let's Begin <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] bg-background/85 backdrop-blur-sm flex items-start md:items-center justify-center p-4 md:p-10 overflow-y-auto"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.client} case study`}
        >
          <div
            className="relative bg-surface border border-border max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/70 border border-border hover:border-accent hover:text-accent rounded-sm"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${active.imageSeed}/1600/900`}
                alt={active.client}
                width={1600}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-background/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] border border-border">
                  {active.category}
                </span>
                <span className="bg-background/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] border border-border text-accent">
                  {active.industry}
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">{active.client}</h2>

              <div className="flex flex-wrap gap-3 mt-7">
                {[
                  { l: "Industry", v: active.industry },
                  { l: "Service", v: active.service },
                  { l: "Year", v: active.year },
                ].map((p) => (
                  <div
                    key={p.l}
                    className="border border-border rounded-full px-5 py-2 text-xs uppercase tracking-[0.18em]"
                  >
                    <span className="text-faint">{p.l}</span>
                    <span className="mx-2 text-faint">/</span>
                    <span className="text-foreground">{p.v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">The Brief</p>
                  <p className="text-foreground/85 leading-relaxed text-lg">{active.brief}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Our Approach</p>
                  <p className="text-foreground/85 leading-relaxed text-lg">{active.approach}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">What We Created</p>
                  <ul className="space-y-2.5 text-foreground/85">
                    {active.created.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="text-accent">—</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-accent mb-5">The Results</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {active.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-surface-2 border border-border p-7 text-center"
                      >
                        <div className="font-display text-accent text-5xl leading-none">{m.value}</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-faint mt-4">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <figure className="border-l-2 border-accent pl-6 md:pl-8 py-2">
                  <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-foreground/95">
                    <span className="text-accent text-4xl mr-1 leading-none">“</span>
                    {active.quote}
                    <span className="text-accent text-4xl ml-1 leading-none">”</span>
                  </blockquote>
                  <figcaption className="text-xs uppercase tracking-[0.22em] text-faint mt-5">
                    — {active.quoteAuthor}
                  </figcaption>
                </figure>

                <Link
                  to="/contact"
                  onClick={() => setActive(null)}
                  className="block w-full text-center bg-accent text-accent-foreground px-8 py-5 text-xs uppercase tracking-[0.24em] rounded-sm hover:bg-accent-hover transition-colors"
                >
                  Start Your Own Story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

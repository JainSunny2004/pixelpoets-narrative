import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { work, type WorkItem } from "@/lib/site-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — PixelPoets Productions" },
      { name: "description", content: "Films worth remembering — selected work in AI ads, virtual tours, reels, and corporate documentaries." },
      { property: "og:title", content: "Our Work — PixelPoets Productions" },
      { property: "og:description", content: "Films Worth Remembering." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

const FILTERS = [
  { id: "all", label: "All" },
  { id: "ai-ads", label: "AI Ads" },
  { id: "virtual-tours", label: "Virtual Tours" },
  { id: "reels-shorts", label: "Reels" },
  { id: "corporate-documentaries", label: "Documentaries" },
] as const;

function WorkPage() {
  const [filter, setFilter] = useState<string>("all");
  const [active, setActive] = useState<WorkItem | null>(null);
  const items = useMemo(() => filter === "all" ? work : work.filter((w) => w.category === filter), [filter]);

  return (
    <>
      <section className="relative grain pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(60% 60% at 30% 20%, rgba(200,146,42,0.08) 0%, transparent 70%), #0e0d0b" }} />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Selected Work</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.98] max-w-4xl">
              Films Worth <span className="italic">Remembering.</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-8 max-w-2xl leading-relaxed">
              A small, deliberate body of work. Each one made for a brand we believed in, in a craft we were the right hands for.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap gap-2 border-b border-border pb-5">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`text-xs uppercase tracking-[0.2em] px-4 py-2.5 rounded-sm border transition-colors ${
                filter === f.id
                  ? "border-accent text-accent bg-accent/5"
                  : "border-border text-foreground/75 hover:text-accent hover:border-accent/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-10 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((w, i) => (
            <Reveal key={w.id} delay={(i % 6) * 60}>
              <button onClick={() => setActive(w)} className="group block text-left w-full">
                <div className="relative overflow-hidden aspect-[4/5] bg-surface">
                  <img
                    src={`https://picsum.photos/seed/${w.imageSeed}/700/900`}
                    alt={`${w.title} — film for ${w.client}`}
                    loading="lazy"
                    width={700}
                    height={900}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] border border-border">
                    {w.categoryLabel}
                  </div>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-faint mt-5">{w.client}</p>
                <h3 className="font-display text-2xl mt-2 group-hover:text-accent transition-colors">{w.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{w.result}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-background/85 backdrop-blur-sm flex items-start md:items-center justify-center p-4 md:p-10 overflow-y-auto"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-surface border border-border max-w-4xl w-full"
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
                src={`https://picsum.photos/seed/${active.imageSeed}/1280/720`}
                alt={active.title}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <span className="text-[10px] uppercase tracking-[0.18em] border border-border px-3 py-1.5">{active.categoryLabel}</span>
              <p className="text-xs uppercase tracking-[0.2em] text-faint mt-6">{active.client}</p>
              <h2 className="font-display text-3xl md:text-4xl mt-2 leading-tight">{active.title}</h2>
              <div className="grid md:grid-cols-2 gap-8 mt-8 text-foreground/85">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Challenge</p>
                  <p className="leading-relaxed">{active.challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Approach</p>
                  <p className="leading-relaxed">{active.approach}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Deliverables</p>
                  <ul className="space-y-1.5">
                    {active.deliverables.map((d) => <li key={d}>— {d}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Result</p>
                  <p className="font-display italic text-xl">{active.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

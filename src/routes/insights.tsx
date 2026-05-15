import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { insights } from "@/lib/site-data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Blog — PixelPoets Productions" },
      { name: "description", content: "Stories about storytelling — essays on brand films, AI advertising, virtual tours, and the craft of long-form." },
      { property: "og:title", content: "Insights & Blog — PixelPoets Productions" },
      { property: "og:description", content: "Stories About Storytelling." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const [featured, ...rest] = insights;
  return (
    <>
      <section className="relative grain pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(60% 60% at 70% 20%, rgba(200,146,42,0.08) 0%, transparent 70%), #0e0d0b" }} />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Insights & Blog</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.98] max-w-4xl">
              Stories About <span className="italic">Storytelling.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <Link to="/insights/$slug" params={{ slug: featured.slug }} className="group grid md:grid-cols-12 gap-8 border-t border-border pt-10">
            <div className="md:col-span-7 overflow-hidden aspect-[16/10] bg-surface">
              <img
                src={`https://picsum.photos/seed/${featured.imageSeed}/1200/750`}
                alt={featured.title}
                loading="lazy"
                width={1200}
                height={750}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="md:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-accent">
                <span>Featured</span>
                <span className="text-faint">·</span>
                <span className="text-foreground/70">{featured.category}</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl mt-5 leading-[1.05] group-hover:text-accent transition-colors">{featured.title}</h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-3 mt-6 text-xs text-faint">
                <span>{featured.date}</span><span>·</span><span>{featured.readTime}</span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link to="/insights/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden aspect-[4/3] bg-surface">
                  <img
                    src={`https://picsum.photos/seed/${p.imageSeed}/600/450`}
                    alt={p.title}
                    loading="lazy"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] border border-border px-2.5 py-1">{p.category}</span>
                  <h3 className="font-display text-2xl mt-4 leading-snug group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{p.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-faint">
                    <span>{p.date}</span><span>·</span><span>{p.readTime}</span>
                    <ArrowRight size={14} className="ml-auto group-hover:text-accent transition-colors" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

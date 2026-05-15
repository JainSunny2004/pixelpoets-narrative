import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PixelPoets Productions" },
      { name: "description", content: "AI Ads, Virtual Tours, Reels & Shorts, and Corporate Documentaries — cinematic storytelling for brands that take attention seriously." },
      { property: "og:title", content: "Services — PixelPoets Productions" },
      { property: "og:description", content: "Four crafts. One obsession with story." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="relative grain pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(200,146,42,0.10) 0%, transparent 70%), #0e0d0b" }} />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Our Services</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.98] max-w-4xl">
              Four crafts, <span className="italic">held to a feature-film standard.</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-8 max-w-2xl leading-relaxed">
              We focus narrowly so we can go deep. Each of these practices has its own discipline, its own pace, and its own way of earning trust on screen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 100}>
              <ServiceCard service={s} large />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

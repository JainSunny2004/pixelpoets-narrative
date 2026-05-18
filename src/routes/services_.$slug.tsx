import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getService, services, work } from "@/lib/site-data";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service — PixelPoets" }] };
    return {
      meta: [
        { title: `${s.name} — PixelPoets Productions` },
        { name: "description", content: s.tagline },
        { property: "og:title", content: `${s.name} — PixelPoets Productions` },
        { property: "og:description", content: s.tagline },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="font-display text-5xl">Service not found</h1>
        <Link to="/services" className="inline-flex items-center gap-2 mt-6 text-accent">All services <ArrowRight size={16} /></Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <p>{error.message}</p>
    </div>
  ),
});

const PROCESS = [
  { t: "Discover", b: "Long-form conversations. We listen until the real brief surfaces." },
  { t: "Plan", b: "Treatment, narrative beats, shot design, and a measurable goal." },
  { t: "Create", b: "Premium production with editorial restraint. Craft over volume." },
  { t: "Deliver", b: "Master film, cutdowns, and a launch plan that earns its return." },
];

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = work.filter((w) => w.category === service.slug).slice(0, 2);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* HERO */}
      <section className="relative grain pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-end">
        {/* Background video */}
        <video
          key={service.slug}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={service.heroPoster}
          aria-hidden="true"
          className="absolute inset-0 -z-20 w-full h-full object-cover"
        >
          <source src={service.heroVideo} type="video/mp4" />
        </video>
        {/* Cinematic overlays */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(70% 60% at 70% 30%, rgba(200,146,42,0.18) 0%, transparent 60%), linear-gradient(180deg, rgba(14,13,11,0.55) 0%, rgba(14,13,11,0.7) 55%, hsl(var(--background)) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-32 -z-10 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(10,9,8,0.85) 0%, rgba(10,9,8,0) 100%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 w-full">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-faint mb-10">
              <Link to="/services" className="hover:text-accent">Services</Link>
              <ChevronRight size={12} />
              <span className="text-foreground/80">{service.name}</span>
            </nav>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
              {service.name}
            </h1>
            <p className="font-display italic text-2xl md:text-3xl text-foreground/85 mt-6 max-w-3xl leading-snug">
              {service.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">A practice, not a package.</h2>
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed mt-6 max-w-xl">
            {service.description}
          </p>
        </Reveal>
        <Reveal delay={150} className="md:col-span-5">
          <div className="bg-surface border border-border p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-5">Deliverables</p>
            <ul className="space-y-4">
              {service.deliverables.map((d: string) => (
                <li key={d} className="flex gap-3 text-foreground/85">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.6} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="bg-surface/40 border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Our Process</p>
            <h2 className="font-display text-3xl md:text-5xl max-w-2xl leading-[1.05]">A four-act structure.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border mt-12 border border-border">
            {PROCESS.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="bg-background p-8">
                <span className="text-accent font-display text-lg">0{i + 1}</span>
                <h3 className="font-display text-2xl mt-3">{p.t}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{p.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Why PixelPoets</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl leading-[1.05]">For this craft, specifically.</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {service.differentiators.map((d: { title: string; body: string }, i: number) => (
            <Reveal key={d.title} delay={i * 80}>
              <div className="bg-surface border border-border p-7 h-full">
                <span className="text-accent text-2xl font-display">0{i + 1}.</span>
                <h3 className="font-display text-xl mt-3">{d.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RELATED WORK */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Related Work</p>
            <h2 className="font-display text-3xl md:text-5xl max-w-2xl leading-[1.05]">Frames from the field.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {related.map((w, i) => (
              <Reveal key={w.id} delay={i * 100}>
                <Link to="/work" className="group block">
                  <div className="relative overflow-hidden aspect-[16/10] bg-surface">
                    <img
                      src={`https://picsum.photos/seed/${w.imageSeed}/900/560`}
                      alt={`${w.title} — ${w.client}`}
                      loading="lazy"
                      width={900}
                      height={560}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] border border-border">
                      {w.categoryLabel}
                    </div>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-faint mt-5">{w.client}</p>
                  <h3 className="font-display text-2xl mt-2 group-hover:text-accent transition-colors">{w.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-surface border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">
              Ready to start your <span className="italic">{service.name}</span> journey?
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-4 text-sm font-medium rounded-sm hover:bg-accent-hover">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Other Services</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/services/$slug"
              params={{ slug: o.slug }}
              className="border border-border p-5 hover:border-accent hover:text-accent transition-colors flex items-center justify-between"
            >
              <span className="font-display text-lg">{o.name}</span>
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

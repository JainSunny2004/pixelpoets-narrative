import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services, work } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PixelPoets Productions — Every Brand Has a Story" },
      { name: "description", content: "A creative agency for cinematic storytelling. Brand films, AI ads, virtual tours, and corporate documentaries." },
      { property: "og:title", content: "PixelPoets Productions" },
      { property: "og:description", content: "Every Brand Has a Story. We Make the World Feel It." },
      { property: "og:url", content: "/" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = work.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative grain min-h-screen flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(80% 60% at 70% 30%, rgba(200,146,42,0.12) 0%, transparent 60%), radial-gradient(60% 80% at 10% 90%, rgba(200,146,42,0.06) 0%, transparent 70%), linear-gradient(180deg, #0a0908 0%, #0e0d0b 100%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-accent mb-8">A Cinematic Storytelling Studio</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
              Every Brand <br className="hidden sm:block" />
              Has a Story.
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <h2 className="font-display italic text-[clamp(1.75rem,5vw,4.25rem)] leading-tight text-foreground/85 mt-3">
              We Make the World Feel It.
            </h2>
          </Reveal>
          <Reveal delay={520}>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mt-8 leading-relaxed">
              PixelPoets Productions — a creative agency for visual storytelling, built on the belief that the right story, told well, changes everything.
            </p>
          </Reveal>
          <Reveal delay={680}>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link to="/work" className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm rounded-sm hover:border-accent hover:text-accent transition-colors">
                View Our Work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium rounded-sm hover:bg-accent-hover transition-colors">
                Let's Create Together <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-faint flex flex-col items-center gap-2 animate-pulse">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={14} />
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="mx-auto max-w-7xl px-6 py-28 grid md:grid-cols-12 gap-12 items-center">
        <Reveal className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">About</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            The Heart Behind <br />
            <span className="italic">The Lens.</span>
          </h2>
          <div className="mt-8 space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed max-w-xl">
            <p>We believe stories shape perception. Brands come to us with their truths, their struggles, their dreams, and their identities — and we frame them.</p>
            <p>Stories build trust. Stories move people. Stories outlive campaigns.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-9 text-accent text-sm uppercase tracking-[0.2em] hover:gap-3 transition-all">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </Reveal>
        <Reveal delay={200} className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://picsum.photos/seed/cinema/800/1000"
              alt="A cinematographer behind a film camera in low light"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </Reveal>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-surface/40 border-y border-border py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">What We Create</p>
                <h2 className="font-display text-4xl md:text-5xl max-w-2xl leading-[1.05]">Four crafts. One obsession with story.</h2>
              </div>
              <Link to="/services" className="text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-accent inline-flex items-center gap-2">
                All Services <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY STRIP */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-y border-border">
          {[
            { t: "Story First", b: "Strategy serves narrative, never the other way around." },
            { t: "Strategy Always", b: "Every frame ladders to a measurable outcome." },
            { t: "Partner, Not Vendor", b: "We take on brands, not briefs. We're in for the long arc." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 100} className="px-8 py-10">
              <span className="text-accent font-display text-lg">0{i + 1}.</span>
              <h3 className="font-display text-3xl mt-3">{p.t}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">{p.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Selected Work</p>
              <h2 className="font-display text-4xl md:text-5xl max-w-xl leading-[1.05]">Films Worth Remembering.</h2>
            </div>
            <Link to="/work" className="text-sm uppercase tracking-[0.2em] hover:text-accent inline-flex items-center gap-2">
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((w, i) => (
            <Reveal key={w.id} delay={i * 100}>
              <Link to="/work" className="group block">
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
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-faint">{w.client}</p>
                  <h3 className="font-display text-2xl mt-2 group-hover:text-accent transition-colors">{w.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{w.result}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-surface border-y border-border py-28">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-display text-accent text-7xl leading-none block mb-4">"</span>
          <blockquote className="font-display italic text-2xl md:text-4xl leading-snug text-foreground">
            They didn't shoot a film for us. They sat with us until they understood who we were — and then they showed us back to ourselves.
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Aanya Mehrotra <span className="text-faint">— Founder, Halcyon Foods</span>
          </p>
        </Reveal>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(110deg, #0e0d0b 0%, #2a1c08 60%, #c8922a 130%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-12 items-center gap-8">
          <Reveal className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Let's Create A Film <br />
              <span className="italic">Worth Remembering.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-4 md:text-right">
            <a
              href="mailto:hello@pixelpoets.in"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 text-sm font-medium rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              hello@pixelpoets.in <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PixelPoets Productions" },
      {
        name: "description",
        content:
          "PixelPoets is a team of storytellers, cinematographers, and strategists obsessed with making brands unforgettable through cinematic storytelling.",
      },
      { property: "og:title", content: "About — PixelPoets Productions" },
      {
        property: "og:description",
        content: "The heart behind the lens — meet the team crafting cinematic stories for brands across India.",
      },
    ],
  }),
  component: AboutPage,
});

const philosophy = [
  {
    t: "Story First",
    b: "We dive into your brand's soul before we touch a camera. The story shapes everything — the script, the frame, the edit.",
  },
  {
    t: "Strategy Always",
    b: "Every film we create is built around a marketing reality. Beautiful content that doesn't convert is just art. We make art that works.",
  },
  {
    t: "Partners, Not Vendors",
    b: "We don't take briefs and disappear. We work alongside you — from concept to campaign — as invested in your success as you are.",
  },
];

const values = [
  { n: "01", t: "Story First", b: "Premium cinematography guided by narrative, not just aesthetics." },
  { n: "02", t: "End-to-End", b: "From script to social — we handle the full creative journey." },
  { n: "03", t: "Partner Mindset", b: "We work like co-founders of your brand story." },
  { n: "04", t: "Results Driven", b: "Films crafted specifically to convert viewers into believers." },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative grain min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(70% 70% at 50% 40%, rgba(200,146,42,0.10) 0%, rgba(14,13,11,0.6) 50%, hsl(var(--background)) 100%)",
          }}
        />
        <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.42em] text-accent mb-8">About PixelPoets</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
              We Are <span className="italic text-accent">PixelPoets.</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="font-display italic text-xl md:text-2xl text-foreground/80 mt-8 max-w-2xl mx-auto leading-snug">
              A team of storytellers, cinematographers, strategists, and creatives — obsessed with making brands unforgettable.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-7xl px-6 py-28 grid md:grid-cols-12 gap-14 items-center">
        <Reveal className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Our Story</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            The Heart Behind <br />
            <span className="italic">The Lens.</span>
          </h2>
          <div className="mt-9 space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              PixelPoets Productions was born from a simple belief — that every brand has a story worth telling, and every story deserves to be told beautifully.
            </p>
            <p>
              We started as filmmakers. We fell in love with the power of a single frame to change how someone feels about a brand. That obsession became PixelPoets — a creative agency where cinematic storytelling meets marketing strategy.
            </p>
            <p>
              Today we work with founders, institutions, hospitality brands, and businesses across India — helping them find their voice, frame their story, and amplify it to the right audience.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 border border-accent/40 pointer-events-none" aria-hidden />
            <div className="relative aspect-[3/4] overflow-hidden bg-surface">
              <img
                src="https://picsum.photos/seed/filmmaker/600/800"
                alt="A filmmaker behind the camera on set"
                loading="lazy"
                width={600}
                height={800}
                className="w-full h-full object-cover grayscale-[15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-surface border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Our Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl leading-[1.05] mb-14">
              Three convictions, every frame.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-accent/30">
            {philosophy.map((p, i) => (
              <Reveal key={p.t} delay={i * 100} className="px-0 md:px-8 py-8 first:pl-0 last:pr-0">
                <span className="text-accent font-display text-base">0{i + 1}.</span>
                <h3 className="font-display text-3xl text-accent mt-3">{p.t}</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">{p.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FROM LENS TO LAUNCH */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">What We Do</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            From Lens <span className="italic">to Launch.</span>
          </h2>
          <p className="text-foreground/80 text-base md:text-lg mt-7 max-w-2xl mx-auto leading-relaxed">
            We cover the full spectrum — from cinematic production to digital amplification. One agency, end-to-end storytelling.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {["Cinematic Production", "AI-Powered Ads", "Digital Amplification"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center px-5 py-2.5 border border-accent/50 text-accent text-xs uppercase tracking-[0.22em] rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* WHY PIXELPOETS */}
      <section className="bg-surface/40 border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Why PixelPoets</p>
              <h2 className="font-display text-4xl md:text-5xl max-w-2xl leading-[1.05]">
                What sets the work apart.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="relative bg-surface-2 border border-border p-7 h-full">
                  <div className="absolute top-0 left-0 right-0 h-px bg-accent" aria-hidden />
                  <span className="font-display text-accent text-3xl">{v.n}</span>
                  <h3 className="font-display text-2xl mt-3">{v.t}</h3>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{v.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(110deg, #0e0d0b 0%, #2a1c08 60%, #c8922a 130%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-12 items-center gap-8">
          <Reveal className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Ready to Tell <br />
              <span className="italic">Your Story?</span>
            </h2>
            <p className="text-foreground/80 mt-5 text-lg max-w-xl">
              Let's create something worth remembering — together.
            </p>
          </Reveal>
          <Reveal delay={150} className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 text-sm font-medium rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import type { Service } from "@/lib/site-data";
import { Clapperboard, Compass, Film, Sparkles, ArrowRight } from "lucide-react";

const ICONS = {
  "ai-ads": Sparkles,
  "virtual-tours": Compass,
  "reels-shorts": Film,
  "corporate-documentaries": Clapperboard,
} as const;

export function ServiceCard({ service, large = false }: { service: Service; large?: boolean }) {
  const Icon = ICONS[service.slug];
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group relative flex flex-col bg-surface border border-border p-7 transition-all duration-300 hover:bg-surface-2 hover:border-b-accent hover:-translate-y-0.5"
      style={{ borderBottomWidth: 2 }}
    >
      <Icon size={26} className="text-accent" strokeWidth={1.4} />
      <h3 className={`font-display mt-6 leading-tight ${large ? "text-3xl" : "text-2xl"}`}>{service.name}</h3>
      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
        {large ? service.tagline : service.short}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-foreground/80 group-hover:text-accent transition-colors">
        Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

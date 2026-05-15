import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./BrandLogo";
import { services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#0a0908] border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="text-foreground"><BrandLogo /></div>
          <p className="font-display italic text-foreground/80 mt-5 text-lg leading-snug">
            Every Brand Has a Story.<br />We Make the World Feel It.
          </p>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            A creative agency for visual storytelling — brand films, AI ads, virtual tours, and the long-form work that lives forever.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-faint mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-foreground/85 hover:text-accent">Home</Link></li>
            <li><Link to="/work" className="text-foreground/85 hover:text-accent">Our Work</Link></li>
            <li><Link to="/insights" className="text-foreground/85 hover:text-accent">Insights & Blog</Link></li>
            <li><Link to="/contact" className="text-foreground/85 hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-faint mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-foreground/85 hover:text-accent">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-faint mb-5">Connect</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://instagram.com/pixelpoetsproductions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/85 hover:text-accent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                @pixelpoetsproductions
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@pixelpoetsproductions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/85 hover:text-accent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M23 12s0-3.6-.46-5.32a2.78 2.78 0 0 0-1.96-1.96C18.86 4.27 12 4.27 12 4.27s-6.86 0-8.58.45A2.78 2.78 0 0 0 1.46 6.68C1 8.4 1 12 1 12s0 3.6.46 5.32a2.78 2.78 0 0 0 1.96 1.96c1.72.45 8.58.45 8.58.45s6.86 0 8.58-.45a2.78 2.78 0 0 0 1.96-1.96C23 15.6 23 12 23 12zM9.75 15.27V8.73L15.5 12z"/></svg>
                @pixelpoetsproductions
              </a>
            </li>
            <li><a href="mailto:hello@pixelpoets.in" className="text-foreground/85 hover:text-accent">hello@pixelpoets.in</a></li>
            <li><a href="tel:+919211969156" className="text-foreground/85 hover:text-accent">+91 92119 69156</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-faint">
          <span>© 2026 PixelPoets Productions. All rights reserved.</span>
          <span className="italic">Crafted with intent.</span>
        </div>
      </div>
    </footer>
  );
}

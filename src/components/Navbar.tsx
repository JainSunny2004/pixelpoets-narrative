import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { services, navLinks } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (to: string) =>
    to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(to);

  const linkBase = "text-sm tracking-wide transition-colors";
  const linkInactive = "text-foreground/85 hover:text-accent";
  const linkActive = "text-accent";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.05)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="text-foreground hover:text-accent transition-colors">
          <BrandLogo />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          <Link to="/" className={`${linkBase} ${isActive("/") && loc.pathname === "/" ? linkActive : linkInactive}`}>
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`${linkBase} ${loc.pathname.startsWith("/services") ? linkActive : linkInactive} flex items-center gap-1`}
              onClick={() => setServicesOpen((s) => !s)}
              aria-expanded={servicesOpen}
            >
              Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div className="w-72 bg-surface-2 border border-border rounded-sm overflow-hidden shadow-2xl shadow-black/60">
                  <Link
                    to="/services"
                    className="block px-5 py-3 text-sm text-foreground hover:bg-surface-offset hover:text-accent border-b border-border"
                  >
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="block px-5 py-3 text-sm text-foreground/85 hover:bg-surface-offset hover:text-accent"
                    >
                      {s.name}
                      <span className="block text-[11px] text-muted-foreground mt-0.5">{s.short}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`${linkBase} ${isActive(l.to) ? linkActive : linkInactive}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 text-sm font-medium rounded-sm hover:bg-accent-hover transition-colors"
          >
            Contact Us <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-background flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <BrandLogo />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <X size={26} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-8 pt-6 gap-5 overflow-y-auto pb-10">
            <Link to="/" className="font-display text-3xl">Home</Link>
            <div>
              <div className="font-display text-3xl mb-3">Services</div>
              <ul className="pl-1 flex flex-col gap-2.5">
                <li><Link to="/services" className="text-muted-foreground">All Services</Link></li>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to="/services/$slug" params={{ slug: s.slug }} className="text-muted-foreground hover:text-accent">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {navLinks.slice(1).map((l) => (
              <Link key={l.to} to={l.to} className="font-display text-3xl">{l.label}</Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center bg-accent text-accent-foreground px-6 py-4 rounded-sm font-medium"
            >
              Contact Us →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

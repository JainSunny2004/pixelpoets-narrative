import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Mail, Phone, Instagram, Youtube } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PixelPoets Productions" },
      { name: "description", content: "Let's create something worth remembering. Reach the PixelPoets team to begin." },
      { property: "og:title", content: "Contact — PixelPoets Productions" },
      { property: "og:description", content: "Let's Create Something Worth Remembering." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

interface FormState {
  name: string; company: string; email: string; phone: string; service: string; brief: string;
}

function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", company: "", email: "", phone: "", service: "", brief: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [done, setDone] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.company.trim()) e.company = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Required";
    else if (!/^[+\d][\d\s()-]{6,}$/.test(form.phone)) e.phone = "Invalid phone";
    if (!form.service) e.service = "Required";
    if (!form.brief.trim()) e.brief = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setDone(true);
  };

  const inputCls = "w-full bg-transparent border border-border px-4 py-3.5 text-foreground placeholder:text-faint focus:outline-none focus:border-accent transition-colors rounded-sm";

  return (
    <>
      <section className="relative grain pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(60% 60% at 30% 20%, rgba(200,146,42,0.10) 0%, transparent 70%), #0e0d0b" }} />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Contact</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.98] max-w-4xl">
              Let's Create Something <span className="italic">Worth Remembering.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-5">
          <p className="font-display italic text-2xl text-foreground/85 leading-snug">
            We don't take on projects — we take on brands. Every engagement starts with listening.
          </p>
          <div className="mt-10 space-y-5 text-foreground/85">
            <a href="mailto:hello@pixelpoets.in" className="flex items-center gap-3 hover:text-accent group">
              <Mail size={18} className="text-accent" /> <span>hello@pixelpoets.in</span>
            </a>
            <a href="tel:+919211969156" className="flex items-center gap-3 hover:text-accent">
              <Phone size={18} className="text-accent" /> <span>+91 92119 69156</span>
            </a>
            <a href="https://instagram.com/pixelpoetsproductions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent">
              <Instagram size={18} className="text-accent" /> <span>@pixelpoetsproductions</span>
            </a>
            <a href="https://youtube.com/@pixelpoetsproductions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent">
              <Youtube size={18} className="text-accent" /> <span>@pixelpoetsproductions</span>
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-faint mb-3">Studio</p>
            <p className="text-muted-foreground">New Delhi · India · Worldwide assignments</p>
          </div>
        </Reveal>

        <Reveal delay={150} className="md:col-span-7">
          <div className="bg-surface border border-border p-8 md:p-10">
            {done ? (
              <div className="py-12 text-center">
                <div className="mx-auto w-14 h-14 border border-accent text-accent flex items-center justify-center rounded-full">
                  <Check size={28} strokeWidth={1.6} />
                </div>
                <h2 className="font-display text-3xl mt-6">Your story starts here.</h2>
                <p className="text-muted-foreground mt-3 max-w-md mx-auto leading-relaxed">
                  We'll be in touch within 24 hours. In the meantime, our last reel is on Instagram.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5" noValidate>
                <Field label="Full Name" error={errors.name}>
                  <input className={inputCls} value={form.name} onChange={set("name")} maxLength={100} required />
                </Field>
                <Field label="Company Name" error={errors.company}>
                  <input className={inputCls} value={form.company} onChange={set("company")} maxLength={100} required />
                </Field>
                <Field label="Email Address" error={errors.email}>
                  <input type="email" className={inputCls} value={form.email} onChange={set("email")} maxLength={255} required />
                </Field>
                <Field label="Phone Number" error={errors.phone}>
                  <input type="tel" className={inputCls} value={form.phone} onChange={set("phone")} maxLength={20} required />
                </Field>
                <Field label="Service Interested In" error={errors.service} className="sm:col-span-2">
                  <select className={inputCls} value={form.service} onChange={set("service")} required>
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                  </select>
                </Field>
                <Field label="Project Brief" error={errors.brief} className="sm:col-span-2">
                  <textarea rows={4} className={inputCls} value={form.brief} onChange={set("brief")} maxLength={2000} required />
                </Field>
                <div className="sm:col-span-2">
                  <button type="submit" className="w-full bg-accent text-accent-foreground font-medium px-6 py-4 rounded-sm hover:bg-accent-hover transition-colors">
                    Begin the conversation →
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      <section className="bg-surface border-t border-border py-20">
        <Reveal className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-display italic text-4xl md:text-6xl leading-tight">
            Story First. <span className="text-accent">Strategy Always.</span>
          </p>
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[11px] uppercase tracking-[0.18em] text-faint mb-2 block">{label}</span>
      {children}
      {error && <span className="text-destructive text-xs mt-1.5 block">{error}</span>}
    </label>
  );
}

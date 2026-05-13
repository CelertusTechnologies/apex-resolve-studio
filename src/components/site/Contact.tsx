import { useState } from "react";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 lg:py-44 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-12">
          <Reveal>
            <SectionLabel>Begin a Conversation</SectionLabel>
            <h2 className="mt-8 font-serif text-5xl lg:text-6xl text-gradient leading-[1]">
              Discreet.<br /><em className="text-gold not-italic font-light">Considered.</em><br />Always confidential.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4 items-start">
                <Phone className="h-4 w-4 text-gold mt-0.5" />
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Direct Line</div>
                  <a href="tel:+12125550190">+1 (212) 555 0190</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail className="h-4 w-4 text-gold mt-0.5" />
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:counsel@ashfordvance.law">counsel@ashfordvance.law</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="h-4 w-4 text-gold mt-0.5" />
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Headquarters</div>
                  <div>432 Park Avenue, 41st Floor<br />New York, NY 10022</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border/60 grid-bg relative">
              <iframe
                title="Office location"
                className="absolute inset-0 h-full w-full grayscale contrast-125 opacity-80"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.97%2C40.76%2C-73.96%2C40.77&layer=mapnik"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass-strong rounded-2xl p-8 lg:p-12 space-y-6 shadow-luxe"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full Name" name="name" required />
                <Field label="Email Address" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Matter Type" name="type" placeholder="Corporate, Litigation..." />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Briefly describe your matter
                </label>
                <textarea
                  required
                  rows={5}
                  className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-base resize-none transition-colors"
                />
              </div>
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground max-w-xs">
                  All submissions are encrypted and protected by attorney-client privilege.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-foreground text-background rounded-full pl-7 pr-3 py-3 text-sm font-medium hover:bg-foreground/90 transition-all"
                >
                  {sent ? "Message received" : "Request Consultation"}
                  <span className="bg-background/10 rounded-full p-1.5 group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: any) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-base transition-colors"
      />
    </div>
  );
}

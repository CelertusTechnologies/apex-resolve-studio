import {
  Building2, Shield, Scale, Lightbulb, Home, Heart, ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const areas = [
  { icon: Building2, title: "Corporate Law", desc: "M&A, governance, cross-border structuring and capital markets advisory." },
  { icon: Shield, title: "Criminal Defence", desc: "White-collar matters, regulatory enforcement and crisis representation." },
  { icon: Scale, title: "Civil Litigation", desc: "High-stakes commercial disputes, arbitration and appellate work." },
  { icon: Lightbulb, title: "Intellectual Property", desc: "Patent strategy, trademarks, trade secrets and licensing." },
  { icon: Home, title: "Real Estate", desc: "Institutional acquisitions, private estates and complex zoning." },
  { icon: Heart, title: "Family & Estate", desc: "Succession planning, fiduciary disputes and confidential family matters." },
];

export function Practice() {
  return (
    <section id="practice" className="relative py-32 lg:py-44 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <Reveal>
            <SectionLabel>Practice Areas</SectionLabel>
            <h2 className="mt-8 font-serif text-5xl lg:text-6xl leading-[1] text-gradient max-w-3xl">
              Six disciplines.<br /><em className="text-gold not-italic font-light">One standard.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground max-w-md">
              Each practice is led by recognised authorities and supported by a
              fully-integrated team across our global offices.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <a
                href="#contact"
                className="group relative block bg-background/60 p-10 h-full transition-all duration-500 hover:bg-card overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <a.icon className="h-7 w-7 text-gold mb-10" strokeWidth={1.25} />
                  <div className="text-xs text-muted-foreground tracking-widest mb-2">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif text-2xl mb-4">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-12">
                    {a.desc}
                  </p>
                  <div className="absolute bottom-0 right-0 inline-flex items-center gap-2 text-xs text-muted-foreground group-hover:text-gold transition-colors">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

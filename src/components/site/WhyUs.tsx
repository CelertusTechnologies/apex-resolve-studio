import { Lock, Trophy, Users, Globe2, Gavel, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const items = [
  { icon: Trophy, t: "98% Success Rate", d: "Across litigated matters in the past decade." },
  { icon: Lock, t: "Absolute Confidentiality", d: "Privileged communication, secured infrastructure." },
  { icon: Users, t: "Senior-Led Teams", d: "Partners on every matter — not delegated work." },
  { icon: Globe2, t: "Global Reach", d: "Offices in 6 cities, counsel in 19 jurisdictions." },
  { icon: Gavel, t: "Trial-Tested", d: "When negotiation ends, courtroom mastery begins." },
  { icon: Clock, t: "Always Reachable", d: "24/7 partner access for retained clients." },
];

export function WhyUs() {
  return (
    <section className="relative py-32 lg:py-44 border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 -z-10" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="mt-8 font-serif text-5xl lg:text-6xl text-gradient max-w-3xl leading-[1]">
            Six reasons clients<br /><em className="text-gold not-italic font-light">return for life.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.06}>
              <div className="glass rounded-xl p-8 h-full hover:border-gold/30 transition-all duration-500 group">
                <div className="flex items-start justify-between mb-8">
                  <it.icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                  <span className="text-xs text-muted-foreground tracking-widest">0{i + 1}</span>
                </div>
                <h3 className="font-serif text-2xl mb-3">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

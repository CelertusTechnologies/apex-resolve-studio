import { Lock, Trophy, Users, Gavel, Clock, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const commitment = [
  { icon: Trophy, t: "Upholding Integrity", d: "We operate with the highest ethical standards, ensuring transparency in every client relationship and legal matter we undertake." },
  { icon: Gavel, t: "Providing Legal Strength", d: "Our team brings authoritative legal acumen to every case, ensuring robust representation across all courts and tribunals." },
  { icon: Lock, t: "Ensuring Justice", d: "Justice is not just a principle — it is our purpose. We fight relentlessly to ensure fair outcomes for every client." },
  { icon: Star, t: "Risk Analysis", d: "Comprehensive risk assessment and strategic analysis to safeguard your interests before, during, and after legal proceedings." },
  { icon: Users, t: "Advocating for Client Rights", d: "Your rights are our mandate. We provide unwavering advocacy and clear communication throughout every legal journey." },
  { icon: Clock, t: "Resolution to Disputes", d: "Efficient, strategic dispute resolution — from negotiation and mediation to full courtroom representation when required." },
];

export function WhyUs() {
  return (
    <section className="relative py-12 md:py-16 lg:py-24 border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <Reveal>
            <SectionLabel>Our Commitment</SectionLabel>
            <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-gradient max-w-3xl leading-[1.1] md:leading-[1]">
              Our Commitment
              <br />
              <em className="text-gold not-italic font-light">to Justice.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-md space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide our clients with clear, effective, and strategic
                legal solutions. We envision a world where justice is accessible,
                transparent, and fair for all.
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent" />
            </div>
          </Reveal>
        </div>

        {/* Commitment grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitment.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.06}>
              <div className="glass rounded-xl p-8 h-full hover:border-gold/30 transition-all duration-500 group cursor-default">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 rounded-lg border border-gold/20 group-hover:border-gold/50 transition-colors duration-300">
                    <it.icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
                  </div>
                  <span className="text-xs text-muted-foreground tracking-widest">0{i + 1}</span>
                </div>
                <h3 className="font-serif text-xl mb-3 group-hover:text-gold transition-colors duration-300">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Lock, Trophy, Users, Gavel, Clock, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { motion } from "framer-motion";

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
    <section id="whyus" className="relative py-12 md:py-16 lg:py-20 border-t border-border/50 overflow-hidden">
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
              <p className="text-muted-foreground leading-relaxed text-justify">
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
          {commitment.map((it, i) => {
            const IconComponent = it.icon;
            return (
              <Reveal key={it.t} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="relative overflow-hidden glass rounded-2xl p-8 h-full border border-border/40 hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(197,160,89,0.06)] transition-all duration-500 group cursor-default"
                >
                  {/* Subtle Hover Radial Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(197,160,89,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 flex items-start justify-between mb-8">
                    <div className="p-3.5 rounded-xl bg-gold/[0.03] border border-gold/15 group-hover:border-gold group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all duration-500 ease-out">
                      <IconComponent className="h-5 w-5 text-[var(--gold)] group-hover:text-background transition-colors duration-500" strokeWidth={1.25} />
                    </div>
                    <span className="font-serif italic text-lg text-gold/30 group-hover:text-gold/80 transition-colors duration-500 tracking-wider">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl mb-3 group-hover:text-gold transition-colors duration-300 tracking-wide font-normal">
                      {it.t}
                    </h3>
                    
                    {/* Decorative expanding gold line */}
                    <div className="h-[1px] w-12 bg-gold/20 mb-4 group-hover:w-20 transition-all duration-500 ease-out" />
                    
                    <p className="text-sm text-muted-foreground/80 leading-relaxed font-light group-hover:text-foreground/90 transition-colors duration-300 text-justify">
                      {it.d}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

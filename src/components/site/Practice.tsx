import {
  Building2, Shield, Scale, Home, Heart, FileSearch, ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const areas = [
  {
    icon: Building2,
    title: "Corporate Law",
    desc: "Business formation, compliance, contracts, internal & operational audit support, risk assessment & control reviews, manufacturing process & inventory audits.",
    subs: ["Business Formation", "Compliance & Contracts", "Risk Assessment"],
  },
  {
    icon: Home,
    title: "Real Estate Law",
    desc: "Banking & financial services audit support, audit documentation, SOP & reporting, property disputes, transactions, and due diligence of properties.",
    subs: ["Property Disputes", "Due Diligence", "Transactions"],
  },
  {
    icon: Scale,
    title: "Civil / Criminal Litigation",
    desc: "Dispute resolution, claims handling, criminal law litigation, and alternate dispute resolution across all major courts and tribunals.",
    subs: ["Dispute Resolution", "Criminal Litigation", "ADR"],
  },
  {
    icon: Heart,
    title: "Family Law",
    desc: "Divorce, custody matters, estate planning, and comprehensive family legal services handled with utmost sensitivity and discretion.",
    subs: ["Divorce & Custody", "Estate Planning", "Family Disputes"],
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    desc: "Trademark, copyrights & patents litigation, alternate dispute resolution, and comprehensive IP strategy to protect your creative and commercial assets.",
    subs: ["Trademarks", "Patents & Copyrights", "IP Litigation"],
  },
  {
    icon: FileSearch,
    title: "Audit & Due Diligence",
    desc: "Banking & financial services audit support, audit documentation, SOP & reporting, and comprehensive due diligence across all sectors.",
    subs: ["Financial Audits", "SOP & Reporting", "Due Diligence"],
  },
];

export function Practice() {
  return (
    <section id="practice" className="relative py-32 lg:py-44 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <Reveal>
            <SectionLabel>Practice Areas</SectionLabel>
            <h2 className="mt-8 font-serif text-5xl lg:text-6xl leading-[1] text-gradient max-w-3xl">
              Comprehensive<br />
              <em className="text-gold not-italic font-light">Legal Support.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground max-w-md">
              From corporate formation to courtroom advocacy — our specialists
              cover every dimension of law with recognised expertise and
              unwavering commitment.
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
                  <a.icon className="h-7 w-7 text-gold mb-8" strokeWidth={1.25} />
                  <div className="text-xs text-muted-foreground tracking-widest mb-2">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif text-2xl mb-4">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {a.desc}
                  </p>
                  {/* Sub-pills */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {a.subs.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-wider border border-gold/30 text-gold/70 rounded-full px-2.5 py-0.5 group-hover:border-gold/60 transition-colors duration-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
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

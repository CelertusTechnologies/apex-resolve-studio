import {
  Building2, Shield, Scale, Home, Heart, ArrowUpRight,
  Landmark, Briefcase, Users, RefreshCw, Gavel, Monitor, Leaf, FileCheck, Map,
  Stethoscope, ShieldAlert, Banknote
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const areas = [
  {
    icon: Gavel,
    title: "Arbitration & ADR",
    desc: "Expert representation in domestic and international arbitration, mediation, and conciliation proceedings before major arbitral tribunals.",
    subs: ["Domestic Arbitration", "International ADR", "Mediation"],
  },
  {
    icon: Scale,
    title: "Civil / Criminal / Commercial Litigation",
    desc: "Robust dispute resolution across the Supreme Court, High Courts, and specialized tribunals for all civil, criminal, and commercial matters.",
    subs: ["Dispute Resolution", "Criminal Defense", "Commercial Claims"],
  },
  {
    icon: Building2,
    title: "Corporate & Commercial",
    desc: "Strategic advisory on corporate governance, business formation, compliance, M&A, and comprehensive commercial contract drafting.",
    subs: ["Corporate Governance", "M&A", "Contract Advisory"],
  },
  {
    icon: Map,
    title: "Land Disputes",
    desc: "Specialized representation in land acquisition, zoning laws, property boundary disputes, and complex land revenue matters.",
    subs: ["Land Acquisition", "Zoning Laws", "Revenue Matters"],
  },
  {
    icon: Users,
    title: "Employment & Labour",
    desc: "Advisory and litigation on labor codes, workforce structuring, employee disputes, and compliance with statutory employment laws.",
    subs: ["Labour Codes", "Workforce Structuring", "Employee Disputes"],
  },
  {
    icon: Leaf,
    title: "Environment & Climate Change",
    desc: "Navigating complex environmental regulations, representation before the NGT, and advising on sustainable compliance and climate policies.",
    subs: ["NGT Representation", "Environmental Compliance", "Climate Policy"],
  },
  {
    icon: Monitor,
    title: "Cyber Laws & IT",
    desc: "Comprehensive legal support for data privacy, cybersecurity breaches, tech contracts, and representation in cybercrime litigation.",
    subs: ["Data Privacy", "Cybersecurity", "Tech Contracts"],
  },
  {
    icon: RefreshCw,
    title: "Insolvency & Bankruptcy",
    desc: "Strategic advisory and representation before NCLT/NCLAT for creditors, corporate debtors, and resolution professionals under the IBC.",
    subs: ["NCLT / NCLAT", "IBC Advisory", "Corporate Restructuring"],
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    desc: "End-to-end IP protection strategies including trademark, copyright, and patent registration, enforcement, and infringement litigation.",
    subs: ["Trademarks", "Patents & Copyrights", "IP Litigation"],
  },
  {
    icon: Landmark,
    title: "Real Estate & Taxation",
    desc: "Due diligence, RERA compliance, real estate transactions, alongside robust advisory on direct and indirect tax matters.",
    subs: ["RERA Matters", "Due Diligence", "Tax Advisory"],
  },
  {
    icon: FileCheck,
    title: "Registrations & Approvals",
    desc: "Seamless facilitation of statutory registrations, licenses, and regulatory approvals essential for establishing and running operations.",
    subs: ["Statutory Licensing", "Regulatory Approvals", "Compliance"],
  },
  {
    icon: Briefcase,
    title: "POSH / Sexual Harassment",
    desc: "Assisting organizations with POSH compliance, IC formations, conducting inquiries, and handling sensitive workplace harassment matters.",
    subs: ["POSH Compliance", "IC Formations", "Workplace Inquiries"],
  },
  {
    icon: Home,
    title: "Trusts & Charities",
    desc: "Formation and advisory for trusts, NGOs, and charitable institutions, ensuring compliance with FCRA and specialized tax regulations.",
    subs: ["Trust Formation", "NGO Compliance", "FCRA Regulations"],
  },
  {
    icon: Heart,
    title: "Matrimonial Disputes",
    desc: "Sensitive and discreet legal assistance in divorce proceedings, child custody, alimony claims, and comprehensive family law matters.",
    subs: ["Divorce & Custody", "Alimony Claims", "Family Law"],
  },
  {
    icon: Banknote,
    title: "Banking & Insurance Laws",
    desc: "Expert advisory and litigation services for banking operations, debt recovery, and comprehensive insurance claims representation.",
    subs: ["Debt Recovery", "Insurance Claims", "Banking Advisory"],
  },
  {
    icon: Stethoscope,
    title: "Medico-Legal",
    desc: "Specialized representation for healthcare professionals and institutions in medical negligence, licensing, and compliance matters.",
    subs: ["Medical Negligence", "Healthcare Compliance", "Licensing"],
  },
  {
    icon: ShieldAlert,
    title: "Cyber Crime",
    desc: "Robust defense and advisory in cyber crime investigations, digital fraud, and prosecuting cyber offenses under the IT Act.",
    subs: ["Cyber Investigations", "Digital Fraud", "IT Act Offenses"],
  },
];

export function Practice() {
  return (
    <section id="practice" className="relative py-16 md:py-24 lg:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <Reveal>
            <SectionLabel>Practice Areas</SectionLabel>
            <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1] text-gradient max-w-3xl">
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
          {areas.map((a, i) => {
            const IconComponent = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.05}>
                <a
                  href="#contact"
                  className="group relative block bg-background/60 p-10 h-full transition-all duration-500 hover:bg-card overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative">
                    <IconComponent className="h-7 w-7 text-[var(--gold)] mb-8" strokeWidth={1.25} />
                    <div className="text-xs text-muted-foreground tracking-widest mb-2">
                      0{i + 1}
                    </div>
                    <h3 className="font-serif text-2xl mb-4">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {a.desc}
                    </p>
                  {/* Sub-pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {a.subs.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-wider border border-gold/30 text-gold/70 rounded-full px-2.5 py-0.5 group-hover:border-gold/60 transition-colors duration-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end items-center gap-2 text-xs text-muted-foreground group-hover:text-gold transition-colors">
                    Contact Us
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

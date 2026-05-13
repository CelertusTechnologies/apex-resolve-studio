import { Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import l1 from "@/assets/lawyer1.jpg";
import l2 from "@/assets/lawyer2.jpg";
import l3 from "@/assets/lawyer3.jpg";
import l4 from "@/assets/lawyer4.jpg";
import vishalDabas from "@/assets/vishal_dabas.png";

const team = [
  { img: vishalDabas, name: "Vishal Dabas", role: "Founder", focus: "Corporate Law · Litigation", featured: true },
  { img: l3, name: "Ravi Mehrotra", role: "Senior Associate", focus: "PMLA / FEMA Specialist" },
  { img: l1, name: "Rahul Ahlawat", role: "Senior Associate", focus: "Civil / Criminal Litigation Expert" },
  { img: l2, name: "Sahil Dabas", role: "Associate", focus: "Real Estate Law Expert" },
  { img: l4, name: "Krishna Dayama", role: "Senior Counsel", focus: "Senior Counsel for UOI" },
  { img: l3, name: "Hemant Chauhan", role: "Associate", focus: "Corporate Law / Arbitration Specialist" },
  { img: l1, name: "Vivek Rampal", role: "Consultant", focus: "Due Diligence Expert" },
  { img: l2, name: "Chirasha Jain", role: "Associate", focus: "Audit & Risk Consultant" },
  { img: l4, name: "Aishwarya Sharma", role: "Associate", focus: "IPR Expert" },
];

export function Attorneys() {
  const founder = team[0];
  const rest = team.slice(1);

  return (
    <section id="attorneys" className="relative py-32 lg:py-44 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <Reveal>
            <SectionLabel>Our Team</SectionLabel>
            <h2 className="mt-8 font-serif text-5xl lg:text-6xl text-gradient max-w-3xl leading-[1]">
              The Counsel<br />
              <em className="text-gold not-italic font-light">Behind Your Case.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-sm">
              Our team of certified legal practitioners brings decades of combined
              experience across India's most demanding legal domains.
            </p>
          </Reveal>
        </div>

        {/* Founder — Featured large card */}
        <Reveal>
          <div className="mb-10 group relative rounded-2xl overflow-hidden glass border border-gold/20 hover:border-gold/40 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-[5/4] lg:aspect-auto overflow-hidden">
                <img
                  src={founder.img}
                  alt={founder.name}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80" />
              </div>
              <div className="flex flex-col justify-center p-10 lg:p-16">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-3">Founder</div>
                <h3 className="font-serif text-4xl lg:text-5xl text-gradient mb-4">
                  {founder.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
                  With over 15 years of distinguished legal practice, Vishal Dabas founded
                  VD Legal on the unwavering belief that every client deserves accessible,
                  transparent, and expert legal representation. His expertise spans corporate
                  law, litigation, and alternate dispute resolution.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex gap-3">
                    <a href="#" className="p-2.5 glass rounded-full hover:bg-foreground hover:text-background transition-all border border-border">
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a href="mailto:vishal@vdlegal.in" className="p-2.5 glass rounded-full hover:bg-foreground hover:text-background transition-all border border-border">
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <span className="text-xs text-muted-foreground tracking-widest ml-2">Advocate, Bar Council of Delhi</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Rest of the team — 4-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <div className="group relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-card border border-border/40 hover:border-gold/30 transition-all duration-500">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={768}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80 mb-1.5">{p.role}</div>
                    <h3 className="font-serif text-xl leading-tight">{p.name}</h3>
                    <p className="text-[11px] text-muted-foreground mt-1.5 leading-snug">{p.focus}</p>
                    <div className="flex gap-2.5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <a href="#" className="p-1.5 glass rounded-full hover:bg-foreground hover:text-background transition-all">
                        <Linkedin className="h-3 w-3" />
                      </a>
                      <a href="#" className="p-1.5 glass rounded-full hover:bg-foreground hover:text-background transition-all">
                        <Mail className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

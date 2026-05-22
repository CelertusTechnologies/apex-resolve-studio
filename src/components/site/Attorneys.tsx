import { Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import vishalDabas from "@/assets/vishal_dabas.png";
import ravi from "@/assets/ravi.jpeg";
import rahul from "@/assets/rahul.jpeg";
import sahil from "@/assets/sahil.jpeg";
import krishna from "@/assets/krishna.jpeg";
import hemant from "@/assets/hemant.jpeg";
import chirasha from "@/assets/chirasha.jpeg";
import aishwarya from "@/assets/aishwarya.jpeg";

const team = [
  { img: vishalDabas, name: "Vishal Dabas", role: "Founder & Managing Partner", focus: "Corporate Law · Litigation · Arbitration", featured: true },
  { img: rahul, name: "Rahul Ahlawat", role: "Senior Associate", focus: "Civil & Criminal Litigation Expert" },
  { img: hemant, name: "Hemant Chauhan", role: "Associate", focus: "Corporate Law & Arbitration Specialist" },
  { img: sahil, name: "Sahil Dabas", role: "Associate", focus: "Real Estate & RERA Specialist" },
  { img: chirasha, name: "Chirasha Jain", role: "Associate", focus: "Audit & Risk Consultant" },
  { img: aishwarya, name: "Aishwarya Sharma", role: "Associate", focus: "Intellectual Property Rights Expert" },
];

export function Attorneys() {
  const founder = team[0];
  const rest = team.slice(1);

  return (
    <section id="attorneys" className="relative py-12 md:py-16 lg:py-20 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <Reveal>
            <SectionLabel>Our Team</SectionLabel>
            <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-gradient max-w-3xl leading-[1.1]">
              The Counsel<br />
              <em className="text-gold not-italic font-light">Behind Your Case.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-sm text-justify">
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
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col justify-center p-10 lg:p-16">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-3">Founder</div>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient mb-4">
                  {founder.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm text-justify">
                  Founder & Managing Partner of VD Legal, Advocate Vishal Dabas specialises in Corporate Law,
                  Civil & Criminal Litigation, Arbitration, NCLT / NCLAT & PMLA matters. He has
                  appeared before the Supreme Court of India, Delhi High Court, and numerous
                  District Courts and Tribunals, delivering precision advocacy and strategic
                  legal solutions tailored to every client's needs.
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
                  <span className="text-xs text-muted-foreground tracking-widest ml-2">Advocate, Bar Council of Delhi </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Rest of the team — 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Glass strip confined strictly to text area */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 transition-transform duration-500 bg-background/85 backdrop-blur-md border-t border-white/5">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80 mb-1.5">{p.role}</div>
                    <h3 className="font-serif text-xl leading-tight">{p.name}</h3>
                    <p className="text-[11px] text-muted-foreground mt-1.5 leading-snug">{p.focus}</p>
                    <div className="flex gap-2.5 mt-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
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

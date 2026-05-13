import { Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import l1 from "@/assets/lawyer1.jpg";
import l2 from "@/assets/lawyer2.jpg";
import l3 from "@/assets/lawyer3.jpg";
import l4 from "@/assets/lawyer4.jpg";

const team = [
  { img: l3, name: "Edward Ashford, KC", role: "Senior Founding Partner", focus: "Corporate · International Arbitration" },
  { img: l2, name: "Margaret Vance", role: "Managing Partner", focus: "Litigation · Constitutional Law" },
  { img: l1, name: "Julian Hartwell", role: "Partner", focus: "Mergers & Acquisitions" },
  { img: l4, name: "Sophia Renaud", role: "Partner", focus: "Intellectual Property · Tech" },
];

export function Attorneys() {
  return (
    <section id="attorneys" className="relative py-32 lg:py-44 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <Reveal>
            <SectionLabel>Counsel</SectionLabel>
            <h2 className="mt-8 font-serif text-5xl lg:text-6xl text-gradient max-w-3xl leading-[1]">
              Quiet authority.<br /><em className="text-gold not-italic font-light">Unrelenting expertise.</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="group relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-card">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={768}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80 mb-2">{p.role}</div>
                    <h3 className="font-serif text-2xl leading-tight">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-2">{p.focus}</p>
                    <div className="flex gap-3 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <a href="#" className="p-2 glass rounded-full hover:bg-foreground hover:text-background transition-all">
                        <Linkedin className="h-3.5 w-3.5" />
                      </a>
                      <a href="#" className="p-2 glass rounded-full hover:bg-foreground hover:text-background transition-all">
                        <Mail className="h-3.5 w-3.5" />
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

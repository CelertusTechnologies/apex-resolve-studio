import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { areas } from "@/data/practiceData";

export function Practice() {
  return (
    <section id="practice" className="relative py-12 md:py-16 lg:py-20 border-t border-border/50">
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
            <p className="text-muted-foreground max-w-md text-justify">
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
                <Link
                  to="/practice/$slug"
                  params={{ slug: a.slug }}
                  className="group relative flex flex-col bg-background/60 p-10 h-full transition-all duration-500 hover:bg-card overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative flex flex-col flex-1">
                    <IconComponent className="h-7 w-7 text-[var(--gold)] mb-8" strokeWidth={1.25} />
                    <div className="text-xs text-muted-foreground tracking-widest mb-2">
                      0{i + 1}
                    </div>
                    <h3 className="font-serif text-2xl mb-4">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-justify">
                      {a.desc}
                    </p>
                  {/* Sub-pills */}
                  <div className="flex flex-wrap gap-2 mb-6 flex-1 content-start">
                    {a.subs.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-wider border border-gold/30 text-gold/70 rounded-full px-2.5 py-0.5 group-hover:border-gold/60 transition-colors duration-300 h-fit"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end items-center gap-2 text-xs text-muted-foreground group-hover:text-gold transition-colors mt-auto">
                    Learn More
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

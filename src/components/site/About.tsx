import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel>The Firm</SectionLabel>
            <h2 className="mt-8 font-serif text-5xl lg:text-6xl leading-[1] text-gradient">
              A practice built on <em className="text-gold not-italic font-light">trust</em>, precision and discretion.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-10">
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ashford &amp; Vance was founded on a single conviction: that complex matters
              demand uncommon counsel. For nearly four decades we have advised heads of
              state, listed corporations and discerning families across the world's most
              demanding jurisdictions — quietly, methodically, decisively.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our partners are former federal prosecutors, M&amp;A architects and
              constitutional scholars. Together we operate as a single, integrated team —
              optimised for outcomes rather than billables.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="grid sm:grid-cols-3 gap-px hairline pt-10">
              {[
                ["Mission", "To safeguard our clients' interests with absolute rigour."],
                ["Method", "Deep specialisation, applied across borders and disciplines."],
                ["Measure", "Outcomes that withstand scrutiny — and time."],
              ].map(([t, d]) => (
                <div key={t} className="pt-6">
                  <div className="text-xs uppercase tracking-widest text-gold/80 mb-3">{t}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{d}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

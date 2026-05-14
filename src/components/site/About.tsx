import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import supremeCourtImg from "@/assets/supreme_court.png";

const credentials = [
  { label: "Supreme Court", sub: "& High Courts" },
  { label: "NCLT / NCLAT", sub: "Tribunal Matters" },
  { label: "Pan-India", sub: "6+ City Presence" },
];

export function About() {
  return (
    <section id="about" className="relative py-16 lg:py-24 border-t border-border/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">

        {/* Text Column */}
        <div className="lg:col-span-5 space-y-10">
          <Reveal>
            <SectionLabel>The Firm</SectionLabel>
            <h2 className="mt-8 font-serif text-5xl lg:text-6xl leading-[1] text-gradient">
              <em className="italic font-light">Experienced</em>
              <br />
              <span className="text-gold">&amp; Trusted Legal</span>
              <br />
              Experts
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              VD Legal is a full-service law firm providing high-quality legal solutions
              in multiple domains. Our work extends from the Supreme Court and High Courts
              to District Courts, NCLT, NCLAT, and all judicial and quasi-judicial bodies.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base text-muted-foreground leading-relaxed">
              Established under Advocate Vishal Dabas, VD Legal is built on a single conviction:
              that every individual and institution deserves access to clear, effective,
              and strategic legal solutions — delivered by practitioners who understand
              the stakes and rise to meet them. Our team serves clients across Delhi NCR,
              Chandigarh, Haryana, Rajasthan, Himachal Pradesh, and Uttar Pradesh.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="grid sm:grid-cols-3 gap-px hairline pt-10">
              {[
                ["Mission", "To provide clear, effective, and strategic legal solutions across every legal domain."],
                ["Vision", "Justice that is accessible, transparent, and fair for all — in every court, for every client."],
                ["Method", "Expert advocacy. Rigorous research. Precision-driven representation in all courts & tribunals."],
              ].map(([t, d]) => (
                <div key={t} className="pt-6">
                  <div className="text-xs uppercase tracking-widest text-gold/80 mb-3">{t}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{d}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Visual Column — Supreme Court illustration with credential badges */}
        <div className="lg:col-span-7 relative">
          <Reveal delay={0.15}>
            <div className="relative">
              {/* Main court image */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-luxe">
                <img
                  src={supremeCourtImg}
                  alt="Supreme Court of India — Legal Authority"
                  width={900}
                  height={900}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "460px", objectFit: "cover", objectPosition: "center 30%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating credential cards */}
              <div
                className="absolute -bottom-6 -right-4 lg:-right-8 flex flex-col gap-3"
                style={{ maxWidth: "180px" }}
              >
                {credentials.map((c, i) => (
                  <div
                    key={c.label}
                    className="glass-strong rounded-xl px-5 py-4 shadow-luxe border border-gold/20 hover:border-gold/50 transition-all duration-300"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="font-serif text-sm font-semibold text-foreground leading-tight">{c.label}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5 tracking-wide">{c.sub}</div>
                  </div>
                ))}
              </div>

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 w-24 h-px bg-gradient-to-r from-gold to-transparent" />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

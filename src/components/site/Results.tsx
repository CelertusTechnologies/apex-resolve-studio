import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const dur = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{n.toLocaleString()}{suffix}
    </span>
  );
}

export function Results() {
  const stats = [
    { v: 15, s: "+", p: "", l: "Years of Experience" },
    { v: 14, s: "+", p: "", l: "Practice Areas" },
    { v: 9, s: "", p: "", l: "Legal Specialists" },
    { v: 6, s: "", p: "", l: "Cities Pan-India" },
  ];
  return (
    <section className="relative py-12 md:py-16 lg:py-20 border-t border-border/50 bg-background/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>By the Numbers</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gradient max-w-3xl leading-[1.1] md:leading-[1]">
            Proven results —<br /><em className="text-gold not-italic font-light">built on trust.</em>
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {stats.map((st, i) => (
            <motion.div
              key={st.l}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-background p-10 lg:p-14"
            >
              <div className="font-serif text-6xl lg:text-7xl text-gold leading-none">
                <Counter to={st.v} suffix={st.s} prefix={st.p} />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-6">
                {st.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

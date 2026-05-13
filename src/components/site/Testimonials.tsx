import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const testimonials = [
  {
    q: "When the SEC came knocking, Ashford & Vance moved faster, thought sharper and protected more than we believed possible. They are the only call to make.",
    n: "Chairman, FTSE 100 Holding",
    r: "Regulatory Defence",
  },
  {
    q: "An exceptional team. The kind of counsel you hope you never need — and feel profoundly fortunate to have when you do.",
    n: "Founder, $2.4B Tech IPO",
    r: "Corporate Counsel",
  },
  {
    q: "Margaret tried our case with surgical precision. Two days into trial the opposition folded. Worth every billable hour many times over.",
    n: "GC, International Bank",
    r: "Commercial Litigation",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((i + 1) % testimonials.length);
  const prev = () => setI((i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-32 lg:py-44 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>In Their Words</SectionLabel>
        </Reveal>

        <div className="mt-16 relative glass-strong rounded-3xl p-10 lg:p-20 shadow-luxe overflow-hidden">
          <Quote className="absolute top-10 right-10 h-32 w-32 text-foreground/[0.03]" strokeWidth={0.5} />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <p className="font-serif text-3xl lg:text-5xl leading-[1.15] text-gradient italic font-light">
                "{t.q}"
              </p>
              <footer className="mt-12 flex items-end justify-between flex-wrap gap-6">
                <div>
                  <div className="text-sm font-medium">{t.n}</div>
                  <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">
                    {t.r}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-xs text-muted-foreground tabular-nums px-3">
                    0{i + 1} / 0{testimonials.length}
                  </span>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

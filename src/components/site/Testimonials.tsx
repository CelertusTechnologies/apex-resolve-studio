import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const testimonials = [
  {
    q: "VD Legal handled our complex corporate restructuring with remarkable precision and foresight. Vishal and his team are the first call we make for any legal matter.",
    n: "Managing Director, Leading NBFC",
    r: "Corporate Law",
  },
  {
    q: "When our property dispute seemed unwinnable, VD Legal's real estate team delivered a result beyond our expectations. Their expertise and dedication are unmatched.",
    n: "Senior Partner, Delhi Real Estate Group",
    r: "Real Estate Law",
  },
  {
    q: "The team's command of intellectual property law protected our brand at a critical juncture. Professional, responsive and thorough throughout every stage.",
    n: "Founder, Tech Startup",
    r: "Intellectual Property",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((i + 1) % testimonials.length);
  const prev = () => setI((i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-12 md:py-16 lg:py-24 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Client Testimonials</SectionLabel>
        </Reveal>

        <div className="mt-10 relative glass-strong rounded-3xl p-10 lg:p-16 shadow-luxe overflow-hidden">
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
              <p className="font-serif text-2xl md:text-3xl lg:text-5xl leading-[1.25] lg:leading-[1.15] text-gradient italic font-light">
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
                    aria-label="Previous testimonial"
                    className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-xs text-muted-foreground tabular-nums px-3">
                    0{i + 1} / 0{testimonials.length}
                  </span>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
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

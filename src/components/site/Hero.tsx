import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Law firm interior"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-44 pb-32 lg:pt-56 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10"
        >
          <span className="h-px w-10 bg-gold/60" />
          Established 1987 — International Counsel
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight max-w-5xl"
        >
          <span className="text-gradient">Defending legacies.</span>
          <br />
          <span className="italic font-light text-muted-foreground">Building </span>
          <span className="text-gold italic font-light">precedent.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed"
        >
          A boutique international law firm representing founders, families and
          institutions through their most consequential matters — with discretion,
          precision and uncompromising standards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-foreground text-background rounded-full pl-7 pr-3 py-3 text-sm font-medium hover:bg-foreground/90 transition-all duration-300"
          >
            Book a Confidential Consultation
            <span className="bg-background/10 rounded-full p-1.5 group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>
          <a
            href="tel:+10000000000"
            className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors px-5 py-3"
          >
            <Phone className="h-4 w-4" /> +1 (212) 555 0190
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-px glass rounded-2xl overflow-hidden"
        >
          {[
            ["37", "Years of practice"],
            ["2,400+", "Cases resolved"],
            ["$4.8B", "Total recovered"],
            ["19", "Jurisdictions"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background/40 px-6 py-7">
              <div className="font-serif text-3xl lg:text-4xl text-gradient">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

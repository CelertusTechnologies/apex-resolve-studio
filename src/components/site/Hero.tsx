import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import heroImg from "@/assets/vd_hero.jpeg";
import heroImg1 from "@/assets/vd_hero1.jpeg";
import heroImg2 from "@/assets/vd_hero2.jpeg";
import heroImg3 from "@/assets/vd_hero3.jpeg";
import heroImg4 from "@/assets/vd_hero4.jpeg";
import heroImg5 from "@/assets/vd_hero5.jpeg";
import heroImg6 from "@/assets/vd_hero6.jpeg";
import heroImg7 from "@/assets/vd_hero7.jpeg";
import heroImg8 from "@/assets/vd_hero8.jpeg";
import heroImg9 from "@/assets/vd_hero9.jpeg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="VD Legal — Advocates & Solicitors"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          style={{ objectPosition: "left center" }}
        />
        {/* Left fade: gavel photo stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-44 pb-16 lg:pt-52 lg:pb-20">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10"
        >
          <span className="h-px w-10 bg-gold/60" />
          Advocates &amp; Solicitors — New Delhi, India · Where Expertise Meets Excellence
        </motion.div>

        {/* Badge / VD mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mb-8 inline-flex items-center gap-3"
        >
          <div className="flex items-center justify-center h-14 w-14 rounded-full border border-gold/50 shadow-glow">
            <span className="font-serif text-xl font-semibold text-gold">VD</span>
          </div>
          <div>
            <div className="font-serif text-lg text-gold">VD Legal</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Established — 2009</div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(2.5rem,8vw,7rem)] leading-[1.05] md:leading-[0.95] tracking-tight max-w-5xl"
        >
          <span className="text-gradient">Defending Rights.</span>
          <br />
          <span className="italic font-light text-muted-foreground">Delivering </span>
          <span className="text-gold italic font-light">Justice.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed"
        >
          A full-service law firm established under the leadership of Advocate Vishal Dabas.
          We deliver high-quality legal solutions across the Supreme Court of India, High Courts,
          District Courts, NCLT, NCLAT, and all judicial and quasi-judicial bodies.
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
            href="tel:+919873976214"
            className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors px-5 py-3"
          >
            <Phone className="h-4 w-4" /> +91 98739 76214
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-px glass rounded-2xl overflow-hidden"
        >
          {[
            ["15+", "Years of Experience"],
            ["6", "Cities Pan-India"],
            ["14+", "Practice Areas"],
            ["9", "Legal Specialists"],
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

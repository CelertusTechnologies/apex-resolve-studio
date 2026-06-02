import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft, Phone, MessageCircle, Mail, CheckCircle,
  ChevronDown, ChevronUp, Scale,
} from "lucide-react";
import { useState } from "react";
import { areas } from "@/data/practiceData";
import vdLogo from "@/assets/vd_logo.png";

export const Route = createFileRoute("/practice/$slug")({
  head: ({ params }) => {
    const area = areas.find((a) => a.slug === params.slug);
    return {
      meta: [
        { title: area ? `${area.title} — VD Legal` : "Practice Area — VD Legal" },
        {
          name: "description",
          content: area?.desc ?? "Explore VD Legal's comprehensive legal services.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const area = areas.find((a) => a.slug === params.slug);
    if (!area) throw notFound();
    return { area };
  },
  component: PracticePage,
});

const VD_PHONE = "tel:+919873976214";
const VD_WHATSAPP = "https://wa.me/919873976214";
const VD_EMAIL = "mailto:mail@vdlegal.in";

function PracticePage() {
  const { area } = Route.useLoaderData();
  const IconComp = area.icon;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ── Sticky mini nav ── */}
      <header className="fixed top-0 inset-x-0 z-50 glass-strong border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-full border border-gold/60 bg-white/80 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
              <img src={vdLogo} alt="VD Legal" className="h-[80%] w-[80%] object-contain" />
            </div>
            <span className="font-serif text-lg">
              <span className="font-bold">VD</span>{" "}
              <span className="text-gold">Legal</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              hash="practice"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">All Practice Areas</span>
            </Link>
            <a
              href={VD_PHONE}
              className="hidden md:inline-flex items-center gap-2 text-sm border border-border rounded-full px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-40`} />
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,var(--gold)/8%,transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-muted-foreground mb-10 tracking-wider uppercase"
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/" hash="practice" className="hover:text-foreground transition-colors">Practice Areas</Link>
            <span>/</span>
            <span className="text-foreground">{area.title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Icon badge */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/[0.06] border border-gold/20">
                  <IconComp className="h-8 w-8 text-[var(--gold)]" strokeWidth={1.25} />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">
                Practice Area
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-gradient mb-6"
              >
                {area.title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-muted-foreground text-lg leading-relaxed mb-8 text-justify"
              >
                {area.desc}
              </motion.p>

              {/* Sub-pills */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
                {area.subs.map((s: string) => (
                  <span
                    key={s}
                    className="text-[11px] uppercase tracking-wider border border-gold/40 text-gold/80 rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                <a
                  href={VD_PHONE}
                  className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-4 w-4" />
                  Call Us Now
                </a>
                <a
                  href={VD_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border rounded-full px-6 py-3 text-sm hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={VD_EMAIL}
                  className="inline-flex items-center gap-2 border border-border rounded-full px-6 py-3 text-sm hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Decorative card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative glass rounded-3xl p-10 border border-gold/10 shadow-luxe">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,var(--gold)/10%,transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="font-serif italic text-gold/40 text-7xl leading-none mb-6">"</div>
                <p className="font-serif text-xl text-muted-foreground leading-relaxed italic">
                  Justice is not just a principle — it is our purpose. We fight relentlessly
                  to ensure fair outcomes for every client.
                </p>
                <div className="mt-8 pt-8 border-t border-border/40 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full border border-gold/40 bg-white/80 flex items-center justify-center overflow-hidden">
                    <img src={vdLogo} alt="VD Legal" className="h-[80%] w-[80%] object-contain" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Vishal Dabas</div>
                    <div className="text-xs text-muted-foreground">Founder & Managing Partner</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-16 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Overview</div>
            <h2 className="font-serif text-3xl md:text-4xl text-gradient mb-10 leading-tight">
              Our Approach to <em className="text-gold not-italic font-light">{area.title}</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-6 max-w-4xl">
            {area.overview.map((para: string, i: number) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-muted-foreground leading-relaxed text-justify text-[15px]"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Services ── */}
      <section className="py-16 border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">What We Do</div>
            <h2 className="font-serif text-3xl md:text-4xl text-gradient leading-tight">
              Key <em className="text-gold not-italic font-light">Services</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden">
            {area.keyServices.map((svc: { title: string; desc: string }, i: number) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, backgroundColor: "var(--card)" }}
                className="bg-background p-8 group cursor-default transition-all duration-300"
              >
                <div className="w-8 h-[2px] bg-gold/40 mb-6 group-hover:w-16 transition-all duration-500" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-lg mb-3 group-hover:text-gold/90 transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Why VD Legal</div>
              <h2 className="font-serif text-3xl md:text-4xl text-gradient leading-tight mb-10">
                Our <em className="text-gold not-italic font-light">Advantage</em>
              </h2>
              <div className="space-y-4">
                {area.whyUs.map((point: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle className="h-5 w-5 text-[var(--gold)] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="text-[15px] text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="glass rounded-3xl p-10 border border-gold/15 shadow-luxe relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,var(--gold)/8%,transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <Scale className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.25} />
                    <span className="text-sm uppercase tracking-widest text-muted-foreground">
                      Get Expert Counsel
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-gradient mb-4 leading-snug">
                    Speak with a specialist today
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    Our {area.title} specialists are available for consultations. Reach out through
                    any channel convenient to you.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={VD_PHONE}
                      className="flex items-center gap-3 w-full px-5 py-3.5 rounded-xl border border-border hover:border-gold/40 hover:bg-card transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-gold/[0.05] group-hover:bg-gold/10 transition-colors">
                        <Phone className="h-4 w-4 text-[var(--gold)]" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Call Us</div>
                        <div className="text-sm font-medium">+91 98739 76214</div>
                      </div>
                    </a>
                    <a
                      href={VD_WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full px-5 py-3.5 rounded-xl border border-border hover:border-gold/40 hover:bg-card transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-gold/[0.05] group-hover:bg-gold/10 transition-colors">
                        <MessageCircle className="h-4 w-4 text-[var(--gold)]" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">WhatsApp</div>
                        <div className="text-sm font-medium">Chat with us</div>
                      </div>
                    </a>
                    <a
                      href={VD_EMAIL}
                      className="flex items-center gap-3 w-full px-5 py-3.5 rounded-xl border border-border hover:border-gold/40 hover:bg-card transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-gold/[0.05] group-hover:bg-gold/10 transition-colors">
                        <Mail className="h-4 w-4 text-[var(--gold)]" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Email</div>
                        <div className="text-sm font-medium">mail@vdlegal.in</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 border-t border-border/50 bg-card/20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">FAQ</div>
            <h2 className="font-serif text-3xl md:text-4xl text-gradient leading-tight">
              Common <em className="text-gold not-italic font-light">Questions</em>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {area.faqs.map((faq: { q: string; a: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl border border-border/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-card/40 transition-colors duration-200"
                >
                  <span className="font-serif text-[15px] pr-4 leading-snug">{faq.q}</span>
                  <span className="flex-shrink-0 p-1 rounded-full border border-border">
                    {openFaq === i ? (
                      <ChevronUp className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-20 border-t border-border/50 bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">VD Legal</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] mb-6 text-background/90">
              Ready to discuss your{" "}
              <em className="not-italic" style={{ color: "oklch(0.7 0.10 80)" }}>{area.title}</em>{" "}
              matter?
            </h2>
            <p className="text-background/60 text-[15px] mb-10 max-w-xl mx-auto leading-relaxed">
              Our specialists are available for confidential consultations. Contact us today
              to understand your legal position and options.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={VD_PHONE}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-background rounded-full px-7 py-3.5 text-sm font-medium hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                +91 98739 76214
              </a>
              <a
                href={VD_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/90 text-foreground rounded-full px-7 py-3.5 text-sm font-medium hover:bg-white transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

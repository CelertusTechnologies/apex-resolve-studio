import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft, Phone, MessageCircle, Mail, Linkedin,
  GraduationCap, Languages, Award, BookOpen, Building,
} from "lucide-react";
import { team, VD_PHONE, VD_WHATSAPP, VD_EMAIL } from "@/data/teamData";
import vdLogo from "@/assets/vd_logo.png";

export const Route = createFileRoute("/team/$slug")({
  head: ({ params }) => {
    const member = team.find((m) => m.slug === params.slug);
    return {
      meta: [
        { title: member ? `${member.name} — VD Legal` : "Our Team — VD Legal" },
        {
          name: "description",
          content: member
            ? `${member.name}, ${member.role} at VD Legal. ${member.focus}.`
            : "Meet the legal team at VD Legal — Advocates & Solicitors.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const member = team.find((m) => m.slug === params.slug);
    if (!member) throw notFound();
    return { member };
  },
  component: TeamMemberPage,
});

const itemV = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const containerV = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

function TeamMemberPage() {
  const { member } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── Sticky Nav ── */}
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
              hash="attorneys"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Our Team</span>
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

      {/* ── Hero / Profile ── */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,var(--gold)/6%,transparent_65%)]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.55_0.04_250/0.05),transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-muted-foreground mb-12 tracking-wider uppercase"
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/" hash="attorneys" className="hover:text-foreground transition-colors">Our Team</Link>
            <span>/</span>
            <span className="text-foreground">{member.name}</span>
          </motion.div>

          <div className="grid lg:grid-cols-[420px_1fr] gap-0 items-end">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-t-3xl overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className={`h-full w-full object-cover ${member.imgClassName ?? "object-cover"}`}
                />
                {/* Bottom gradient for seamless transition */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
              </div>

              {/* Floating role badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-6 left-6 glass rounded-xl px-4 py-2 border border-gold/20"
              >
                <div className="text-[9px] uppercase tracking-[0.3em] text-gold/80 mb-0.5">
                  {member.role}
                </div>
              </motion.div>
            </motion.div>

            {/* Info */}
            <motion.div
              variants={containerV}
              initial="hidden"
              animate="visible"
              className="pb-16 lg:pb-24 px-0 lg:px-16"
            >
              <motion.div variants={itemV} className="text-[10px] uppercase tracking-[0.3em] text-gold/70 mb-3">
                {member.role}
              </motion.div>

              <motion.h1
                variants={itemV}
                className="font-serif text-4xl md:text-5xl xl:text-6xl leading-[1.05] text-gradient mb-4"
              >
                {member.name}
              </motion.h1>

              <motion.p
                variants={itemV}
                className="text-sm text-muted-foreground tracking-wide mb-8"
              >
                {member.focus}
              </motion.p>

              {/* Bar Council */}
              {member.barCouncil && (
                <motion.div variants={itemV} className="flex items-center gap-2 mb-8">
                  <div className="w-4 h-[1px] bg-gold/50" />
                  <span className="text-xs text-muted-foreground tracking-widest uppercase">
                    {member.barCouncil}
                  </span>
                </motion.div>
              )}

              {/* Contact Row */}
              <motion.div variants={itemV} className="flex items-center gap-3 mb-10 flex-wrap">
                <a
                  href={VD_PHONE}
                  className="flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call Us
                </a>
                <a
                  href={VD_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href={member.email ? `mailto:${member.email}` : VD_EMAIL}
                  className="p-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </motion.div>

              {/* Quick Stats Row */}
              <motion.div variants={itemV} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {member.courts && (
                  <div className="glass rounded-xl p-4 border border-border/30">
                    <Building className="h-4 w-4 text-[var(--gold)] mb-2" strokeWidth={1.25} />
                    <div className="text-xs text-muted-foreground mb-1">Courts</div>
                    <div className="text-sm font-medium">{member.courts.length}+ Forums</div>
                  </div>
                )}
                {member.languages && (
                  <div className="glass rounded-xl p-4 border border-border/30">
                    <Languages className="h-4 w-4 text-[var(--gold)] mb-2" strokeWidth={1.25} />
                    <div className="text-xs text-muted-foreground mb-1">Languages</div>
                    <div className="text-sm font-medium">{member.languages.join(", ")}</div>
                  </div>
                )}
                {member.expertise && (
                  <div className="glass rounded-xl p-4 border border-border/30">
                    <BookOpen className="h-4 w-4 text-[var(--gold)] mb-2" strokeWidth={1.25} />
                    <div className="text-xs text-muted-foreground mb-1">Specialisations</div>
                    <div className="text-sm font-medium">{member.expertise.length} Areas</div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="py-16 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Biography</div>
                <h2 className="font-serif text-3xl md:text-4xl text-gradient mb-8 leading-tight">
                  About <em className="text-gold not-italic font-light">{member.name.split(" ")[0]}</em>
                </h2>
              </motion.div>

              <div className="space-y-5">
                {member.bio.map((para: string, i: number) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="text-muted-foreground leading-relaxed text-justify text-[15px]"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Sidebar: Education + Accolades */}
            <div className="space-y-6">
              {member.education && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6 }}
                  className="glass rounded-2xl p-6 border border-border/30"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <GraduationCap className="h-4 w-4 text-[var(--gold)]" strokeWidth={1.25} />
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Education</span>
                  </div>
                  <div className="space-y-3">
                    {member.education.map((edu: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{edu}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {member.accolades && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="glass rounded-2xl p-6 border border-border/30"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <Award className="h-4 w-4 text-[var(--gold)]" strokeWidth={1.25} />
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Highlights</span>
                  </div>
                  <div className="space-y-3">
                    {member.accolades.map((item: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="py-16 border-t border-border/50 bg-card/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Specialisations</div>
            <h2 className="font-serif text-3xl md:text-4xl text-gradient leading-tight">
              Areas of <em className="text-gold not-italic font-light">Expertise</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {member.expertise.map((exp: string, i: number) => (
              <motion.div
                key={exp}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4, borderColor: "oklch(0.55 0.08 75 / 40%)" }}
                className="glass rounded-xl p-5 border border-border/30 cursor-default group transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold/60 group-hover:bg-gold transition-colors flex-shrink-0" />
                  <span className="text-sm font-medium group-hover:text-foreground transition-colors">
                    {exp}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Courts ── */}
      {member.courts && (
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-4">Jurisdiction</div>
              <h2 className="font-serif text-3xl md:text-4xl text-gradient leading-tight">
                Courts & <em className="text-gold not-italic font-light">Tribunals</em>
              </h2>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {member.courts.map((court: string, i: number) => (
                <motion.div
                  key={court}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-border/50 glass hover:border-gold/30 hover:shadow-[0_0_20px_rgba(197,160,89,0.08)] transition-all duration-300 group"
                >
                  <Building className="h-3.5 w-3.5 text-[var(--gold)] flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {court}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── View All Link ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="py-10 border-t border-border/50 flex justify-center"
      >
        <Link
          to="/"
          hash="attorneys"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="w-6 h-px bg-gold/40 group-hover:w-10 transition-all duration-300" />
          View all team members
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </motion.div>

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
              Work with{" "}
              <em className="not-italic" style={{ color: "oklch(0.7 0.10 80)" }}>
                {member.name}
              </em>
            </h2>
            <p className="text-background/60 text-[15px] mb-10 max-w-xl mx-auto leading-relaxed">
              Schedule a confidential consultation to discuss your legal matter and
              explore how we can help you achieve the outcome you deserve.
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

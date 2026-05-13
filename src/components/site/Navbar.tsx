import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#attorneys", label: "Attorneys" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-6 lg:px-10 transition-all duration-500",
          scrolled && "max-w-6xl"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500",
            scrolled ? "glass-strong shadow-luxe" : ""
          )}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <Scale className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <span className="font-serif text-xl tracking-wide">
              Ashford <span className="text-gold">&</span> Vance
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm border border-border rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Book Consultation
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="text-sm text-gold pt-2 border-t border-border">
              Book Consultation →
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

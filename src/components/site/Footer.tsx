import { Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import vdLogo from "@/assets/vd_logo.png";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 pt-14 pb-8 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Main grid: brand left, links right */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 pb-14">

          {/* Left: brand block */}
          <div className="lg:w-[42%] lg:pr-16 space-y-6 flex-shrink-0">
            {/* VD Legal brand mark — matches Navbar circle style */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center h-9 w-9 rounded-full border-2 border-gold/70 bg-white/80 shadow-md overflow-hidden flex-shrink-0">
                <img src={vdLogo} alt="VD Legal Logo" className="h-[85%] w-[85%] object-contain" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide leading-none">
                <span className="font-bold">VD</span> <span className="text-gold">Legal</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Advocates &amp; Solicitors — providing top-tier legal services with
              integrity, expertise, and an unwavering commitment to justice.
              New Delhi, India.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://linkedin.com/company/vdlegal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:mail@vdlegal.in"
                className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all"
                aria-label="Gmail"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919873976214"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="tel:+919873976214"
                className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-gold/15 flex-shrink-0" />

          {/* Right: The Firm + Get In Touch on same horizontal line */}
          <div className="flex-1 lg:pl-16 flex flex-col sm:flex-row gap-12 sm:gap-0">

            {/* The Firm */}
            <div className="flex-1 sm:pt-6">
              <div className="text-xs uppercase tracking-widest text-gold/80 mb-6">The Firm</div>
              <ul className="space-y-3.5">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Our Team", href: "#attorneys" },
                  { label: "Our Commitment", href: "#whyus" },
                  { label: "Careers", href: "#contact" },
                  { label: "News & Insights", href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inner divider between The Firm and Get In Touch */}
            <div className="hidden sm:block w-px bg-gold/15 flex-shrink-0 mx-10" />

            {/* Get In Touch */}
            <div className="flex-1">
              <div className="text-xs uppercase tracking-widest text-gold/80 mb-6">Get In Touch</div>
              <ul className="space-y-4">
                <li>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Office Address</div>
                  <a href="https://maps.google.com/?q=84,+Basement,+Hemkunt+Colony,+Greater+Kailash+Part+-+I,+New+Delhi+-+110048" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-gold transition-colors duration-300 leading-relaxed">
                    84, Basement, Hemkunt Colony,<br />
                    Greater Kailash Part - I,<br />
                    New Delhi - 110048
                  </a>
                </li>
                <li>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Chamber Address</div>
                  <a href="https://maps.google.com/?q=508,+Lawyers'+Chambers+Block-+III,+High+Court+Delhi,+New+Delhi-+110003" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-gold transition-colors duration-300 leading-relaxed">
                    508, Lawyers' Chambers Block- III,<br />
                    High Court of Delhi,<br />
                    New Delhi- 110003
                  </a>
                </li>
                <li className="pt-1">
                  <a href="tel:+919873976214" className="text-sm text-foreground hover:text-gold transition-colors duration-300 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gold/70" />
                    +91 98739 76214
                  </a>
                </li>
                <li>
                  <a href="mailto:mail@vdlegal.in" className="text-sm text-foreground hover:text-gold transition-colors duration-300 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gold/70" />
                    mail@vdlegal.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} VD Legal — Advocates &amp; Solicitors. All rights reserved. Registered with Bar Council of Delhi.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <a href="#" className="hover:text-foreground">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items, className = "lg:col-span-2" }: { title: string; items: { label: string; href: string }[]; className?: string }) {
  return (
    <div className={className}>
      <div className="text-xs uppercase tracking-widest text-gold/80 mb-5">{title}</div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import vdLogo from "@/assets/vd_logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/50 pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 pb-12">
          <div className="lg:col-span-5 space-y-6">
            {/* VD Legal brand mark */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-9 w-9 rounded-full border border-gold/50 p-1.5 bg-background/50">
                <img src={vdLogo} alt="VD Legal Logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide">VD <span className="text-gold">Legal</span></span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Advocates &amp; Solicitors — providing top-tier legal services with
              integrity, expertise, and an unwavering commitment to justice.
              New Delhi, India.
            </p>
            <div className="flex gap-3 pt-2">
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
          <FooterCol 
            title="Practice Areas" 
            items={[
              { label: "Corporate Law", href: "#practice" },
              { label: "Real Estate & RERA", href: "#practice" },
              { label: "Civil & Criminal Litigation", href: "#practice" },
              { label: "PMLA / FEMA", href: "#practice" },
              { label: "Arbitration", href: "#practice" },
              { label: "Insolvency & Bankruptcy", href: "#practice" },
              { label: "IPR", href: "#practice" },
              { label: "Taxation", href: "#practice" }
            ]} 
          />
          <FooterCol 
            title="The Firm" 
            items={[
              { label: "About Us", href: "#about" },
              { label: "Our Team", href: "#attorneys" },
              { label: "Our Commitment", href: "#whyus" },
              { label: "Careers", href: "#contact" },
              { label: "News & Insights", href: "#contact" }
            ]} 
          />
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-gold/80 mb-5">Get In Touch</div>
            <ul className="space-y-4">
              <li>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Office Address</div>
                <a href="https://maps.google.com/?q=84,+Basement,+Hemkunt+Colony,+Greater+Kailash+Part+-+I,+New+Delhi+-+110048" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-gold transition-colors duration-300">
                  84, Basement, Hemkunt Colony,<br />
                  Greater Kailash Part - I,<br />
                  New Delhi - 110048
                </a>
              </li>
              <li>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Chamber Address</div>
                <a href="https://maps.google.com/?q=508,+Lawyers'+Chambers+Block-+III,+High+Court+Delhi,+New+Delhi-+110003" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-gold transition-colors duration-300">
                  508, Lawyers' Chambers Block- III,<br />
                  High Court Delhi,<br />
                  New Delhi- 110003
                </a>
              </li>
              <li className="pt-2">
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

        <div className="hairline pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-muted-foreground">
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

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="lg:col-span-2">
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

import { Mail, MessageCircle, Phone } from "lucide-react";
import vdLogo from "@/assets/vd_logo.png";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 pt-14 pb-8 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 pb-14">
          {/* Left — brand */}
          <div className="lg:w-[42%] lg:pr-16 space-y-6 flex-shrink-0">
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
              <a
                href="mailto:mail@vdlegal.in"
                className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-px bg-gold/15 flex-shrink-0" />

          {/* Right — firm / contact (single common section) */}
          <div className="flex-1 lg:pl-16 min-w-0">
            <div className="text-xs uppercase tracking-widest text-gold/80 mb-6">
              Get In Touch
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 lg:gap-x-10">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
                  Office Address
                </div>
                <a
                  href="https://maps.google.com/?q=84,+Basement,+Hemkunt+Colony,+Greater+Kailash+Part+-+I,+New+Delhi+-+110048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-gold transition-colors duration-300 leading-relaxed"
                >
                  84, Basement, Hemkunt Colony,
                  <br />
                  Greater Kailash Part - I,
                  <br />
                  New Delhi - 110048
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
                  Chamber Address
                </div>
                <a
                  href="https://maps.google.com/?q=508,+Lawyers'+Chambers+Block-+III,+High+Court+Delhi,+New+Delhi-+110003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-gold transition-colors duration-300 leading-relaxed"
                >
                  508, Lawyers&apos; Chambers Block- III,
                  <br />
                  High Court of Delhi,
                  <br />
                  New Delhi- 110003
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
                  Direct Line
                </div>
                <a
                  href="tel:+919873976214"
                  className="text-sm text-foreground hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-gold/70 shrink-0" />
                  +91 98739 76214
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
                  Email
                </div>
                <a
                  href="mailto:mail@vdlegal.in"
                  className="text-sm text-foreground hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-gold/70 shrink-0" />
                  mail@vdlegal.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} VD Legal — Advocates &amp; Solicitors. All rights
            reserved. Registered with Bar Council of Delhi.
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

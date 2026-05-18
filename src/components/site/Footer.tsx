import { Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 pb-12">
          <div className="lg:col-span-5 space-y-6">
            {/* VD Legal brand mark */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-9 w-9 rounded-full border border-gold/50">
                <span className="font-serif text-base font-semibold text-gold">VD</span>
              </div>
              <span className="font-serif text-2xl">VD <span className="text-gold">Legal</span></span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Advocates &amp; Solicitors — providing top-tier legal services with
              integrity, expertise, and an unwavering commitment to justice.
              New Delhi, India.
            </p>
            <div className="flex gap-3 pt-2">
              {[Linkedin, Twitter, Instagram].map((I, i) => (
                <a key={i} href="#" className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Practice Areas" items={["Corporate Law", "Real Estate & RERA", "Civil & Criminal Litigation", "PMLA / FEMA", "Arbitration", "Insolvency & Bankruptcy", "IPR", "Taxation"]} />
          <FooterCol title="The Firm" items={["About Us", "Our Team", "Our Commitment", "Careers", "News & Insights"]} />
          <FooterCol title="Get In Touch" items={["Book Consultation", "mail@vdlegal.in", "+91 98739 76214", "84, Hemkunt Colony, GK-I", "Chamber 508, Delhi High Court"]} />
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

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="lg:col-span-2">
      <div className="text-xs uppercase tracking-widest text-gold/80 mb-5">{title}</div>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

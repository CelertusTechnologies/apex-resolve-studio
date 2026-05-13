import { Scale, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-20">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <Scale className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <span className="font-serif text-2xl">Ashford <span className="text-gold">&</span> Vance</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              International counsel for the world's most consequential matters.
              Established 1987.
            </p>
            <div className="flex gap-3 pt-2">
              {[Linkedin, Twitter, Instagram].map((I, i) => (
                <a key={i} href="#" className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Practice" items={["Corporate", "Litigation", "Criminal Defence", "IP", "Real Estate", "Family"]} />
          <FooterCol title="Firm" items={["About", "Counsel", "Careers", "Insights", "Press"]} />
          <FooterCol title="Offices" items={["New York", "London", "Geneva", "Singapore", "Dubai", "Hong Kong"]} />
        </div>

        <div className="hairline pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Ashford &amp; Vance LLP. Attorney advertising. Prior results do not guarantee a similar outcome.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
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

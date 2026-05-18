import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Practice } from "@/components/site/Practice";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Attorneys } from "@/components/site/Attorneys";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Results } from "@/components/site/Results";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VD Legal — Advocates & Solicitors | New Delhi" },
      { name: "description", content: "VD Legal is a premier law firm in New Delhi offering comprehensive legal services across Corporate Law, Real Estate, Civil & Criminal Litigation, Family Law, and Intellectual Property. Over 15 years of trusted legal expertise." },
      { property: "og:title", content: "VD Legal — Advocates & Solicitors" },
      { property: "og:description", content: "Defending Rights. Delivering Justice. VD Legal — Advocates & Solicitors, New Delhi, India." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Practice />
      <TrustedBy />
      <Attorneys />
      <WhyUs />
      <Testimonials />
      <Results />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

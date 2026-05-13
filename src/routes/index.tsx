import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Practice } from "@/components/site/Practice";
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
      { title: "Ashford & Vance — International Legal Counsel" },
      { name: "description", content: "Boutique international law firm. Corporate, litigation, criminal defence, IP, real estate and family counsel for institutions, founders and families." },
      { property: "og:title", content: "Ashford & Vance — International Legal Counsel" },
      { property: "og:description", content: "Defending legacies. Building precedent. A boutique international law firm established 1987." },
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

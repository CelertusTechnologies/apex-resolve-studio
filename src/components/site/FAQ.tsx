import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const faqs = [
  { q: "Do you offer initial consultations?", a: "Yes. We offer a confidential consultation conducted by a senior associate or partner to assess your matter and determine the best course of action for your specific situation." },
  { q: "What areas of law does VD Legal specialise in?", a: "VD Legal specialises in Corporate Law, Real Estate Law, Civil & Criminal Litigation, Family Law (Divorce, Custody, Estate Planning), Intellectual Property (Trademarks, Copyrights & Patents), and Audit & Due Diligence services." },
  { q: "How is the firm structured?", a: "VD Legal operates as a cohesive team of certified legal practitioners, led by Founder Vishal Dabas, with specialists across all major practice areas operating from our New Delhi offices." },
  { q: "What are your fee arrangements?", a: "We work on hourly, fixed-fee, and blended arrangements depending on the nature of your matter. Engagement terms are agreed in writing before work commences, ensuring complete transparency." },
  { q: "Will my matter remain confidential?", a: "Absolutely. All communications are protected by attorney-client privilege. We maintain rigorous confidentiality protocols and encrypted infrastructure to safeguard your sensitive information." },
  { q: "Do you handle matters outside Delhi?", a: "Yes. We handle matters across India, with our team having experience and associations across multiple state bars and courts including the Supreme Court of India and various High Courts." },
];

export function FAQ() {
  return (
    <section className="relative py-12 md:py-16 lg:py-24 border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Frequently Asked</SectionLabel>
          <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-gradient leading-[1.1] md:leading-[1]">
            Your questions,<br /><em className="text-gold not-italic font-light">answered.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="mt-16 w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="font-serif text-xl py-7 hover:text-gold hover:no-underline text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-8 max-w-3xl">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

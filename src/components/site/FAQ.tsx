import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const faqs = [
  { q: "Do you offer initial consultations?", a: "Yes. We offer a confidential one-hour consultation, conducted by a senior associate or partner, to assess your matter and determine fit." },
  { q: "How is the firm structured?", a: "We operate as a true partnership of fewer than 30 attorneys, organised across six tightly-coordinated practice groups in six global offices." },
  { q: "What are your fee arrangements?", a: "We work on hourly, fixed-fee, blended and success-based arrangements. Engagement terms are agreed in writing before work commences." },
  { q: "Will my matter remain confidential?", a: "All communications are protected by attorney-client privilege and our internal protocols include encrypted infrastructure and need-to-know access." },
  { q: "Do you handle international matters?", a: "Cross-border work represents the majority of our practice. We are admitted in or affiliated with counsel across 19 jurisdictions." },
];

export function FAQ() {
  return (
    <section className="relative py-32 lg:py-44 border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Frequently Asked</SectionLabel>
          <h2 className="mt-8 font-serif text-5xl lg:text-6xl text-gradient leading-[1]">
            Answers, before<br /><em className="text-gold not-italic font-light">you ask.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="mt-16 w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="font-serif text-2xl py-7 hover:text-gold hover:no-underline text-left">
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

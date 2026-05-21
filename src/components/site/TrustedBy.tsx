import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import logo1 from "@/assets/vd_hero1.jpeg";
import logo2 from "@/assets/vd_hero2.jpeg";
import logo3 from "@/assets/vd_hero3.jpeg";
import logo4 from "@/assets/vd_hero4.jpeg";
import logo5 from "@/assets/vd_hero5.jpeg";
import logo6 from "@/assets/vd_hero6.jpeg";
import logo7 from "@/assets/vd_hero7.jpeg";
import logo8 from "@/assets/vd_hero8.jpeg";
import logo9 from "@/assets/vd_hero9.jpeg";

const logos = [
  { id: 1, src: logo1, alt: "Client Logo 1" },
  { id: 2, src: logo2, alt: "Client Logo 2" },
  { id: 3, src: logo3, alt: "Client Logo 3" },
  { id: 4, src: logo4, alt: "Client Logo 4" },
  { id: 5, src: logo5, alt: "Client Logo 5" },
  { id: 6, src: logo6, alt: "Client Logo 6" },
  { id: 7, src: logo7, alt: "Client Logo 7" },
  { id: 8, src: logo8, alt: "Client Logo 8" },
  { id: 9, src: logo9, alt: "Client Logo 9" },
];

export function TrustedBy() {
  return (
    <section className="relative py-12 md:py-16 lg:py-24 border-t border-border/50 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-12 flex flex-col justify-start">
        <Reveal>
          <SectionLabel>Trusted By</SectionLabel>
          <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-gradient leading-[1.1] md:leading-[1]">
            Our Esteemed
            <br />
            <em className="text-gold not-italic font-light">Clientele.</em>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="relative w-full flex overflow-hidden hover-pause group">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee Content */}
          <div className="flex animate-marquee whitespace-nowrap items-center w-max">
            {/* Duplicate array for seamless infinite scroll */}
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-12 lg:px-20 transition-all duration-500"
              >
                <div className="relative h-16 w-32 lg:h-20 lg:w-40 flex items-center justify-center hover:scale-105 transition-all duration-500">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/150x50/f4f4f5/18181b?text=Client+Logo`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(() => {
    const isMobile = window.innerWidth <= 768;
    const scrubValue = isMobile ? 0.1 : 1;

    const elements = [
      { id: "#title-service-1", xPercent: isMobile ? 10 : 20 },
      { id: "#title-service-2", xPercent: isMobile ? -105 : -30 },
      { id: "#title-service-3", xPercent: isMobile ? 355 : 100 },
      { id: "#title-service-4", xPercent: isMobile ? -225 : -100 },
    ];

    elements.forEach((element) => {
      gsap.to(element.id, {
        xPercent: element.xPercent,
        scrollTrigger: {
          trigger: element.id,
          start: "top bottom",
          end: "bottom top",
          scrub: scrubValue,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });
    });
  });
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      <div id="title-service-1">
        <p>Designer</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal">Blockchain</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Developer</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Scalability</p>
      </div>
      <div id="title-service-4" className="translate-x-48">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;

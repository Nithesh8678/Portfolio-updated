import React from "react";
import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
  animationDelay = 0,
  shouldAnimate = true,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const isMobile = window.innerWidth <= 853;
  const shouldSplitTitle = !isMobile && title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];
  useGSAP(() => {
    // Set initial states
    gsap.set(contextRef.current, {
      y: shouldAnimate ? 0 : "50vh",
      opacity: shouldAnimate ? 1 : 0,
    });
    gsap.set(headerRef.current, {
      opacity: shouldAnimate ? 1 : 0,
      y: shouldAnimate ? 0 : "200",
    });

    if (!shouldAnimate) return;

    const tl = gsap.timeline({
      delay: animationDelay,
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });

    // Smooth fade-in for the entire section first
    tl.to(contextRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from(
      contextRef.current,
      {
        y: "50vh",
        duration: 1.2,
        ease: "circ.out",
      },
      "-=0.3"
    );

    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1.2,
        ease: "circ.out",
      },
      "<+0.3"
    );
  }, [animationDelay, shouldAnimate]);
  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 pb-0 sm:gap-16 sm:pb-2"
        >
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col gap-12 uppercase banner-text-responsive sm:gap-16 md:block ${textColor}`}
            >
              {titleParts.map((part, index) => (
                <span key={index}>{part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedTextLines
            text={text}
            className={`font-light uppercase value-text-responsive ${textColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;

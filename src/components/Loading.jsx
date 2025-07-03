import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loading = ({ progress, onComplete }) => {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const lineRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Animate counter
  useGSAP(() => {
    gsap.to(
      { value: displayProgress },
      {
        value: progress,
        duration: 0.5,
        ease: "power2.out",
        onUpdate: function () {
          setDisplayProgress(Math.floor(this.targets()[0].value));
        },
      }
    );
  }, [progress]);

  // Initial animations
  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial state
    gsap.set([counterRef.current, textRef.current], {
      opacity: 0,
      y: 50,
    });
    gsap.set(lineRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
    });
    gsap.set(circleRef.current, {
      scale: 0,
      rotation: -90,
    });

    // Animate in
    tl.to([counterRef.current, textRef.current], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    })
      .to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(
        circleRef.current,
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=1"
      );
  }, []);

  // Progress line animation
  useGSAP(() => {
    gsap.to(lineRef.current, {
      scaleX: progress / 100,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [progress]);

  // Complete animation
  useEffect(() => {
    if (progress >= 100) {
      const tl = gsap.timeline();

      tl.to(counterRef.current, {
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(counterRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          [
            counterRef.current,
            textRef.current,
            lineRef.current,
            circleRef.current,
          ],
          {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power2.in",
            stagger: 0.1,
          },
          "+=0.5"
        )
        .to(
          overlayRef.current,
          {
            yPercent: -100,
            duration: 1.2,
            ease: "power3.inOut",
            onComplete: () => onComplete && onComplete(),
          },
          "-=0.3"
        );
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
    >
      {/* Background overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black" />

      {/* Main loading content */}
      <div className="relative flex flex-col items-center gap-16">
        {/* Animated circle */}
        <div ref={circleRef} className="relative w-32 h-32 md:w-40 md:h-40">
          <div className="absolute inset-0 border border-white/20 rounded-full" />
          <div className="absolute inset-2 border border-white/10 rounded-full" />
          <div className="absolute inset-4 border border-white/5 rounded-full" />

          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Counter */}
        <div className="flex flex-col items-center gap-8">
          <div
            ref={counterRef}
            className="text-6xl md:text-8xl font-light text-white tracking-wider font-mono"
          >
            {displayProgress.toString().padStart(2, "0")}
            <span className="text-white/50">%</span>
          </div>

          {/* Loading text */}
          <div
            ref={textRef}
            className="text-sm md:text-base font-light text-white/60 tracking-[0.5rem] uppercase"
          >
            Loading Experience
          </div>
        </div>

        {/* Progress line */}
        <div className="relative w-64 md:w-96 h-px bg-white/10">
          <div
            ref={lineRef}
            className="absolute top-0 left-0 h-full bg-white origin-left"
          />

          {/* Progress dots */}
          <div className="absolute top-0 left-0 w-full flex justify-between">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white/20 rounded-full transform -translate-y-1/2"
                style={{
                  backgroundColor:
                    (progress / 100) * 5 > i
                      ? "white"
                      : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-white/5 to-transparent loading-line-float"
            style={{
              height: "40vh",
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;

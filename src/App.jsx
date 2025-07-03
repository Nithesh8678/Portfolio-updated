import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import Loading from "./components/Loading";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  const handleLoadingComplete = () => {
    setIsReady(true);
  };

  // Refresh ScrollTrigger after loading and ensure smooth transitions
  useEffect(() => {
    if (isReady) {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [isReady]);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {!isReady && (
        <Loading progress={progress} onComplete={handleLoadingComplete} />
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-[1500ms] ease-out`}
      >
        <Navbar />
        <Hero isLoadingComplete={isReady} />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;

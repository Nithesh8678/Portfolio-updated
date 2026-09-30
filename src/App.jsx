import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";

const App = () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <ReactLenis root options={{ autoRaf: !reducedMotion, smoothWheel: !reducedMotion }} className="relative w-full min-h-screen overflow-x-clip">
      <Navbar /><Hero /><ServiceSummary /><Services /><About /><Works /><ContactSummary /><Contact />
    </ReactLenis>
  );
};
export default App;

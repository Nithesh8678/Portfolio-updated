import { Component, lazy, Suspense, useEffect, useRef, useState } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
const PlanetScene = lazy(() => import("../components/PlanetScene"));
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}
const Hero = () => {
  const sectionRef = useRef(null);
  const [loadScene, setLoadScene] = useState(false);
  const [active, setActive] = useState(true);
  useEffect(() => {
    // Text and navigation are usable before the optional decorative scene loads.
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches || navigator.connection?.saveData) return;
    const timer = setTimeout(() => setLoadScene(true), 1200);
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting));
    observer.observe(sectionRef.current);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);
  const poster = <img className="hero-poster" src="/images/planet-poster.webp" alt="" width="1000" height="694" fetchPriority="high" />;
  return (
    <section ref={sectionRef} id="home" className="relative isolate flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection subTitle="404 No Bugs Found" title="Nithesh S K" text={`I help growing brands and startups gain an\nunfair advantage through premium\nresults driven webs/apps`} textColor="text-black" />
      <figure className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        {loadScene ? <SceneBoundary fallback={poster}><Suspense fallback={poster}><PlanetScene active={active} /></Suspense></SceneBoundary> : poster}
      </figure>
    </section>
  );
};
export default Hero;

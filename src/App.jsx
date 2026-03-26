import { useState } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import ScrollIndicator from "./components/ScrollIndicator";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  const [hovered, setHovered] = useState(false);
  const [clickPos, setClickPos] = useState(null);

  const handleClick = (e) => {
    setClickPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-rose-200 via-violet-100 via-40% to-teal-100 dark:from-rose-950 dark:via-violet-950 dark:via-40% dark:to-teal-950 text-gray-900 dark:text-white transition-colors duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Full-page particle layer */}
      <ParticleBackground hovered={hovered} clickPos={clickPos} />

      {/* All content sits above the particle layer */}
      <div className="relative" style={{ zIndex: 1 }}>
        <ScrollIndicator />
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

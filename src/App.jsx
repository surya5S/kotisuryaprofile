import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import ScrollIndicator from "./components/ScrollIndicator";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <ScrollIndicator />

      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

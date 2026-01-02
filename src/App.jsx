import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Background from "./components/Background";
import "./index.css";

function App() {
  return (
    <div className="container min-w-full flex flex-col items-center gap-[100px] relative font-outfit">
      <Background />
      <Navbar />
      <Hero />
      <InfoSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default App;

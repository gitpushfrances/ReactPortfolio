import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import TargetCursor from "./components/TargetCursor/TargetCursor";
import CursorTrail from "./components/CursorTrail/CursorTrail";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App">
      <CursorTrail color={theme === "dark" ? "#ffffff" : "#000000"} />
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor={theme === "dark" ? "#ffffff" : "#000000"}
      />
      <Navbar />
      <main className="lg:pl-56">
        <div className="max-w-2xl px-6 mx-auto">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>
      <Toaster />
    </div>
  );
}

export default App;
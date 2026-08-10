import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import TargetCursor from "./components/TargetCursor/TargetCursor";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor={theme === "dark" ? "#ffffff" : "#000000"}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
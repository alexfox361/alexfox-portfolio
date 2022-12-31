import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function App() {
  return (
    <main className="text-red-400 bg-black-900 body-font"> 
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className=""> 
      <Navbar />
      <About />
      <Experience />
    </main>
  );
}

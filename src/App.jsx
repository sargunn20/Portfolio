import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { LatestAccomplishments } from "./components/LatestAccomplishments/LatestAccomplishments";
import { AcademicUpdates } from "./components/AcademicUpdates/AcademicUpdates";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "./components/Hero/particles-config.js"; // adjust the path if needed

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className={styles.App}>
      <Particles id="tsparticles" init={particlesInit} options={particleConfig} className={styles.particles} />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <LatestAccomplishments />
      <AcademicUpdates />
      <Contact />
    </div>
  );
}

export default App;

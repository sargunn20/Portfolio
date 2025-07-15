import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { LatestAccomplishments } from "./components/LatestAccomplishments/LatestAccomplishments";
import { AcademicUpdates } from "./components/AcademicUpdates/AcademicUpdates";

function App() {
  return (
    <div className={styles.App}>
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
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
// ADD: Import tools from Framer Motion
import { motion, useScroll, useSpring } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ADD: Framer Motion hook to track scroll progress
  const { scrollYProgress } = useScroll();
  
  // ADD: useSpring for a smoother animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* ADD: The motion.div element that will be our progress bar */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? "/assets/nav/closeIcon.png"
              : "/assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#accomplishments">Accomplishments</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
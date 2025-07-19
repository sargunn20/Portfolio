import React, { useCallback, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// ADD: More imports from Framer Motion and useRef from React
import { motion, useScroll } from "framer-motion";
import styles from "./Hero.module.css";
import particleConfig from "./particles-config.js";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const [text] = useTypewriter({
    words: ["Hi, I'm Sargun"],
    typeSpeed: 120,
    deleteSpeed: 150,
  });

  // ADD: A ref to target this section for the scroll animation
  const ref = useRef(null);
  // ADD: A hook to track scroll progress relative to the hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animate while section is in view
  });

  return (
    // CHANGE: Added the ref to the section
    <section ref={ref} className={styles.heroWrapper}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleConfig}
        className={styles.particles}
      />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {text}
            <Cursor cursorStyle="|" />
          </h1>
          <p className={styles.description}>
            I’m an Electronics & Communication Engineering student specializing in{" "}
            <b>IoT networks</b>, <b>wireless communication systems</b>, and{" "}
            <b>AI-based data pipelines</b>. I design end-to-end solutions that
            integrate sensors, cloud, and intelligent analytics. Let’s connect!
          </p>
          <div className={styles.actionContainer}>
            <a href="mailto:sargun1273@gmail.com" className={styles.contactBtn}>
              Contact Me
            </a>
            <div className={styles.socialIcons}>
              <a href="#">
                <FaLinkedin className={styles.icon} />
              </a>
              <a href="#">
                <FaGithub className={styles.icon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.heroImgContainer}>
          {/* ADD: The SVG for the animated progress ring */}
          <svg className={styles.progressRing} viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              pathLength="1"
              className={styles.progressRingIndicator}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <img
            src="/assets/hero/heroImage.png"
            alt="Hero image of me"
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
};
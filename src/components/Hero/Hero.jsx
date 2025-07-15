import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sargun</h1>
        <p className={styles.description}>
        I’m an Electronics & Communication Engineering student specializing in IoT networks, wireless communication systems, and AI-based data pipelines. I design end-to-end solutions that integrate sensors, cloud, and intelligent analytics. Let’s connect if you’re interested in impactful tech!
        </p>
        <a href="mailto:sargun1273@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/assets/hero/heroImage.png"  
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

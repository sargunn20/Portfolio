import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src="/assets/about/cursorIcon.png"
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Full-stack Developer</h3>
              <p>
                I build intuitive and responsive web interfaces using modern
                frameworks, ensuring seamless user experience and performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="/assets/about/serverIcon.png"
              alt="Server icon"
            />
            <div className={styles.aboutItemText}>
              <h3>ETL & API Developer</h3>
              <p>
                I design scalable back-end systems, ETL pipelines, and APIs,
                integrating IoT data and AI-driven analytics for real-world applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="/assets/about/cursorIcon.png"
              alt="UI icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Tech Innovator</h3>
              <p>
                I create impactful solutions combining IoT, communication systems,
                and smart data models to solve practical problems in fields like smart farming.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact me!</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:sargun1273@gmail.com">MY EMAIL</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/sargun-3b13b6298/">LINKEDIN</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/sargunn20">GITHUB</a>
        </li>
      </ul>
    </footer>
  );
};

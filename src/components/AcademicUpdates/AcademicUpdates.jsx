import React from "react";
import styles from "./AcademicUpdates.module.css";

export const AcademicUpdates = () => {
  return (
    <section className={styles.container} id="academic-updates">
      <h2 className={styles.title}> Updates</h2>
      <ul className={styles.list}>
        <li>Completed 2nd year with AGPA:9.46 and CGPA:9.03</li>
        <li>Successfully completed my internship at Deftsoft</li>
      </ul>
    </section>
  );
};

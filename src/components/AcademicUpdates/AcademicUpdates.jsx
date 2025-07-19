import React from "react";
import styles from "./AcademicUpdates.module.css";

const updates = [
  "Completed 2nd year with AGPA: 9.46 and CGPA: 9.03",
  "Successfully completed my internship at Deftsoft",
];

export const AcademicUpdates = () => {
  return (
    <section className={styles.container} id="academic-updates">
      <h2 className={styles.title}>Updates</h2>
      {/* ADD: A wrapper for the ticker viewport */}
      <div className={styles.tickerContainer}>
        {/* ADD: The list that will scroll */}
        <ul className={styles.tickerList}>
          {updates.map((update, index) => (
            <li key={index}>{update}</li>
          ))}
          {/* DUPLICATE: We add the list again for a seamless loop */}
          {updates.map((update, index) => (
            <li key={`duplicate-${index}`} aria-hidden="true">
              {update}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
import React from "react";
import styles from "./LatestAccomplishments.module.css";

export const LatestAccomplishments = () => {
  return (
    <section className={styles.container} id="accomplishments">
      <h2 className={styles.title}>Accomplishments</h2>
      <div className={styles.rows}>
        <a
          href="https://ieeexplore.ieee.org/document/10881174"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.row}
        >
          <img src="/assets/accomplishments/paper.png" alt="Publishment" />
          <div className={styles.details}>
            <h3>Published Conference Paper</h3>
            <p>Title:  ‘Data-Driven Cloud-Based Soil Nutrient Prediction System for Precision Agriculture’
                , published in 3rd International Conference on Modelling, Simulation & Intelligent Computing (MoSICom 2024).
</p>
          </div>
          <img
            src="/assets/accomplishments/paper-photo.png"
            alt="Publishment Screenshot"
            className={styles.extraImage}
          />
        </a>

        <div className={styles.row}>
          <img src="/assets/accomplishments/hackathon.png" alt="Hackathon" />
          <div className={styles.details}>
            <h3>1st Runner-Up position at HACKTU </h3>
            <p>SWe built a project focused on sustainable fertilizer use and an AI-powered farming assistant to support and empower farmers with real-time insights, crop-specific recommendations, and predictive analytics. Our solution aims to enhance productivity, reduce waste, and promote eco-friendly farming practices.</p>
          </div>
          <img
            src="/assets/accomplishments/hackathon-photo.png"
            alt="Hackathon Photo"
            className={styles.extraImage}
          />
        </div>
      </div>
    </section>
  );
};

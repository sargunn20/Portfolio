import React, { useState } from "react";
import styles from "./LatestAccomplishments.module.css";

const accomplishmentsData = [
  {
    id: 1,
    title: "Published Conference Paper",
    description: "Title: ‘Data-Driven Cloud-Based Soil Nutrient Prediction System for Precision Agriculture’, published in 3rd International Conference on Modelling, Simulation & Intelligent Computing (MoSICom 2024).",
    iconSrc: "/assets/accomplishments/paper.png",
    extraImgSrc: "/assets/accomplishments/paper-photo.png",
    link: "https://ieeexplore.ieee.org/document/10881174",
  },
  {
    id: 2,
    title: "1st Runner-Up position at HACKTU",
    description: "We built a project focused on sustainable fertilizer use and an AI-powered farming assistant to support and empower farmers with real-time insights, crop-specific recommendations, and predictive analytics. Our solution aims to enhance productivity, reduce waste, and promote eco-friendly farming practices.",
    iconSrc: "/assets/accomplishments/hackathon.png",
    extraImgSrc: "/assets/accomplishments/hackathon-photo.png",
    link: null,
  },
];

export const LatestAccomplishments = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className={styles.container} id="accomplishments">
      <h2 className={styles.title}>Accomplishments</h2>
      <div className={styles.rows}>
        {accomplishmentsData.map((item) => {
          const content = (
            <>
              <img src={item.iconSrc} alt={item.title} />
              <div className={styles.details}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <img
                src={item.extraImgSrc}
                alt="Accomplishment Screenshot"
                className={styles.extraImage}
              />
            </>
          );

          const props = {
            className: `${styles.row} ${hoveredId === item.id ? styles.hovered : ""}`,
            onMouseEnter: () => setHoveredId(item.id),
            onMouseLeave: () => setHoveredId(null),
          };

          return item.link ? (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {content}
            </a>
          ) : (
            <div key={item.id} {...props}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
};
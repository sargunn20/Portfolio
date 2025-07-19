import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={`/assets/projects/${imageSrc}`}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      {/* ADD: A new wrapper for the content that will be revealed */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          <a href={source} className={styles.link}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
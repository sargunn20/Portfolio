import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  const handleSkillClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div
              key={id}
              className={styles.skill}
              onClick={() => handleSkillClick(skill.wikiUrl)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.skillImageContainer}>
                <img
                  src={`/assets/skills/${skill.imageSrc}`}
                  alt={skill.title}
                />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={`/assets/history/${historyItem.imageSrc}`}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

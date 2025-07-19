import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  // RE-ADDED: State to manage the skill highlighting feature
  const [highlightedSkills, setHighlightedSkills] = useState([]);

  const handleSkillClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* The skills container now checks for highlighted skills to dim others */}
        <div className={`${styles.skills} ${highlightedSkills.length > 0 ? styles.dimmed : ""}`}>
          {skills.map((skill, id) => (
            <div
              key={id}
              // The individual skill checks if it should be highlighted
              className={`${styles.skill} ${
                highlightedSkills.includes(skill.title) ? styles.highlighted : ""
              }`}
              onClick={() => handleSkillClick(skill.wikiUrl)}
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
            <li
              key={id}
              className={styles.historyItem}
              // RE-ADDED: Event handlers to trigger skill highlighting
              onMouseEnter={() => setHighlightedSkills(historyItem.technologies)}
              onMouseLeave={() => setHighlightedSkills([])}
            >
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
import React, { useState } from "react";
import styles from "./LatestAccomplishments.module.css";
import accomplishmentsData from "../../data/accomplishments.json";


const AccomplishmentCard = ({ item, openModal }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const cardContent = (
    <>
      <div className={styles.glow} />
      <div className={styles.details}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <img
        src={item.extraImgSrc}
        alt="Accomplishment visual"
        className={`${styles.extraImage} ${item.isCertificate ? styles.clickableImage : ""}`}
        onClick={(e) => {
          if (item.isCertificate) {
            e.preventDefault();
            e.stopPropagation();
            openModal(item); 
          }
        }}
      />
    </>
  );

  return item.link ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.row}
      onMouseMove={handleMouseMove}
      style={{ animationDelay: `${item.id * 0.15}s` }}
    >
      {cardContent}
    </a>
  ) : (
    <div
      className={styles.row}
      onMouseMove={handleMouseMove}
      style={{ animationDelay: `${item.id * 0.15}s` }}
    >
      {cardContent}
    </div>
  );
};

export const LatestAccomplishments = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (item) => setModalData(item);
  const closeModal = () => setModalData(null);

  return (
    <section className={styles.container} id="accomplishments">
      <h2 className={styles.title}>Accomplishments</h2>
      <div className={styles.rows}>
        {accomplishmentsData.map((item) => (
          <AccomplishmentCard key={item.id} item={item} openModal={openModal} />
        ))}
      </div>

      {modalData && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={modalData.extraImgSrc} alt="Enlarged view" className={styles.modalImage} />
            <p className={styles.modalCaption}>{modalData.title}</p>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}
    </section>
  );
};
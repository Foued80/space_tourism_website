import React from "react";
import styles from "../styles/CrewComp.module.css";

export default function CrewComp({ crewData }) {
  return (
    <div className={styles.container}>
      <img src={crewData.url} alt="crew image" className={styles.hero} />
      <div className={styles.crew}>
        <div className={styles.crew_nav}>
          <div
            className={`${styles.crew_link} ${styles.crew_linkActive}`}
          ></div>
          <div className={styles.crew_link}></div>
          <div className={styles.crew_link}></div>
          <div className={styles.crew_link}></div>
        </div>
        <div className={styles.crew_role}>{crewData.role}</div>
        <div className={styles.crew_name}>{crewData.name}</div>
        <p className={styles.crew_bio}>{crewData.bio}</p>
      </div>
    </div>
  );
}

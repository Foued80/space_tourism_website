import React from "react";
import styles from "../styles/CrewComp.module.css";
import Link from "next/link";

export default function CrewComp({ crewData }) {
  return (
    <div className={styles.container}>
      <img src={crewData.url} alt="crew image" className={styles.hero} />
      <div className={styles.crew}>
        <div className={styles.crew_nav}>
          <Link href="/crew/douglas_hurley">
            <div
              className={`${styles.crew_link} ${
                crewData.index == 0 ? styles.crew_linkActive : ""
              }`}
            ></div>
          </Link>
          <Link href="/crew/mark_shuttleworth">
            <div
              className={`${styles.crew_link} ${
                crewData.index == 1 ? styles.crew_linkActive : ""
              }`}
            ></div>
          </Link>
          <Link href="/crew/victor_glover">
            <div
              className={`${styles.crew_link} ${
                crewData.index == 2 ? styles.crew_linkActive : ""
              }`}
            ></div>
          </Link>
          <Link href="/crew/anousheh_ansari">
            <div
              className={`${styles.crew_link} ${
                crewData.index == 3 ? styles.crew_linkActive : ""
              }`}
            ></div>
          </Link>
        </div>
        <div className={styles.crew_role}>{crewData.role}</div>
        <div className={styles.crew_name}>{crewData.name}</div>
        <p className={styles.crew_bio}>{crewData.bio}</p>
      </div>
    </div>
  );
}

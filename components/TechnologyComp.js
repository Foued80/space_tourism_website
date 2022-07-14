import Image from "next/image";
import React from "react";
import styles from "../styles/TechnologyComp.module.css";
import Link from "next/link";

export default function TechnologyComp({ tech_data }) {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image src={tech_data.url} alt="technology image" layout="fill" />
      </div>
      <div className={styles.technology}>
        <div className={styles.technology_nav}>
          <Link href="/technology/launch_vehicle">
            <div
              className={`${styles.technology_link} ${
                tech_data.index == 0 ? styles.technology_linkActive : ""
              }`}
            >
              1
            </div>
          </Link>
          <Link href="/technology/spaceport">
            <div
              className={`${styles.technology_link} ${
                tech_data.index == 1 ? styles.technology_linkActive : ""
              }`}
            >
              2
            </div>
          </Link>
          <Link href="/technology/space_capsule">
            <div
              className={`${styles.technology_link} ${
                tech_data.index == 2 ? styles.technology_linkActive : ""
              }`}
            >
              3
            </div>
          </Link>
        </div>
        <div className={styles.technology_content}>
          <h2 className={styles.technology_heading}>THE TERMINOLOGY…</h2>
          <div className={styles.technology_name}>{tech_data.name}</div>
          <p className={styles.technology_description}>
            {tech_data.description}
          </p>
        </div>
      </div>
    </div>
  );
}

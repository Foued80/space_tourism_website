import React from "react";
import styles from "../styles/DestinationComp.module.css";
import Link from "next/link";

export default function DestinationComp({ dest_data }) {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h5 className={styles.heading}>
          <span>01</span>Pick your destination
        </h5>
        <div className={styles.img_wrapper}>
          <img className={styles.img} src={dest_data.url} alt="" />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.details_navLinks}>
          <Link href="/destination/moon">
            <a
              className={`${dest_data.active === "moon" ? styles.active : ""}`}
            >
              moon
            </a>
          </Link>
          <Link href="/destination/mars">
            <a
              className={`${dest_data.active === "mars" ? styles.active : ""}`}
            >
              mars
            </a>
          </Link>
          <Link href="/destination/europa">
            <a
              className={`${
                dest_data.active === "europa" ? styles.active : ""
              }`}
            >
              europa
            </a>
          </Link>
          <Link href="/destination/titan">
            <a
              className={`${dest_data.active === "titan" ? styles.active : ""}`}
            >
              titan
            </a>
          </Link>
        </div>
        <h1 className={styles.details_location}>{dest_data.name}</h1>
        <p className={styles.details_description}>{dest_data.text}</p>
        <hr className={styles.details_hr} />
        <div className={styles.details_stats}>
          <div className={styles.details_dist}>
            <h2 className={styles.details_dist_title}>AVG. DISTANCE</h2>
            <h1 className={styles.details_dist_km}>{dest_data.avg}</h1>
          </div>
          <div className={styles.details_est}>
            <h2 className={styles.details_est_title}>Est. travel time</h2>
            <h1 className={styles.details_est_km}>{dest_data.est} </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

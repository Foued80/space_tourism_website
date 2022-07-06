import React from "react";
import styles from "../styles/DestinationComp.module.css";
import Link from "next/link";

export default function DestinationComp() {
  const moon = {
    url: "/assets/destination/image-moon.webp",
    active: "moon",
    name: "moon",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avg: "384,400",
    est: "3 days",
  };
  return (
    <div className={styles.container}>
      <div className="hero">
        <h5 className={styles.heading}>
          <span>01</span>Pick your destination
        </h5>
        <img className={styles.img} src={moon.url} alt="" />
      </div>
      <div className="details">
        <div className={styles.navLinks}>
          <Link href="/destination/moon">
            <a className={`${moon.active === "moon" ? styles.active : ""}`}>
              moon
            </a>
          </Link>
          <Link href="/destination/mars">mars</Link>
          <Link href="/destination/europa">europa</Link>
          <Link href="/destination/titan">titan</Link>
        </div>
      </div>
      Destination
    </div>
  );
}

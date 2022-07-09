import React from "react";
import styles from "../../styles/Destination.module.css";
import DestinationComp from "../../components/DestinationComp";

export default function moon() {
  const dest_data = {
    url: "/assets/destination/image-moon.webp",
    active: "moon",
    name: "moon",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avg: "384,400 KM",
    est: "3 days",
  };
  return (
    <div className={styles.destination}>
      <DestinationComp dest_data={dest_data} />
    </div>
  );
}

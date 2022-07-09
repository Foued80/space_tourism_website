import React from "react";
import DestinationComp from "../../components/DestinationComp";
import styles from "../../styles/Destination.module.css";

export default function mars() {
  const dest_data = {
    url: "/assets/destination/image-mars.webp",
    active: "mars",
    name: "mars",
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avg: "225 MIL. km",
    est: "9 months",
  };
  return (
    <div className={styles.destination}>
      <DestinationComp dest_data={dest_data} />
    </div>
  );
}

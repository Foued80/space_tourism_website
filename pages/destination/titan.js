import React from "react";
import styles from "../../styles/Destination.module.css";
import DestinationComp from "../../components/DestinationComp";
import Head from "next/head";

export default function titan() {
  const dest_data = {
    url: "/assets/destination/image-titan.webp",
    active: "titan",
    name: "titan",
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avg: "1.6 BIL. km",
    est: "7 years",
  };
  return (
    <>
      <Head>
        <meta name="description" content="destination titan" />
      </Head>
      <div className={styles.destination}>
        <DestinationComp dest_data={dest_data} />
      </div>
    </>
  );
}

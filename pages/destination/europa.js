import styles from "../../styles/Destination.module.css";
import DestinationComp from "../../components/DestinationComp";
import Head from "next/head";

export default function europa() {
  const dest_data = {
    url: "/assets/destination/image-europa.webp",
    active: "europa",
    name: "europa",
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avg: "628 MIL. km",
    est: "3 years",
  };
  return (
    <>
      <Head>
        <meta name="description" content="destination europa" />
      </Head>
      <div className={styles.destination}>
        <DestinationComp dest_data={dest_data} />
      </div>
    </>
  );
}

import styles from "../../styles/Crew.module.css";
import CrewComp from "../../components/CrewComp";
import Head from "next/head";

export default function victor_glover() {
  const crewData = {
    url: "/assets/crew/image-victor-glover.webp",
    index: "2",
    role: "PILOT",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  };
  return (
    <>
      <Head>
        <meta name="description" content=" pilot victor glover" />
      </Head>

      <div className={styles.crew}>
        <h5 className={styles.heading}>
          <span>02</span>meet your crew
        </h5>
        <CrewComp crewData={crewData} />
      </div>
    </>
  );
}

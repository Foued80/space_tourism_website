import styles from "../../styles/Crew.module.css";
import CrewComp from "../../components/CrewComp";
import Head from "next/head";

export default function douglas_hurley() {
  const crewData = {
    url: "/assets/crew/image-douglas-hurley.webp",
    index: "0",
    role: "commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  };
  return (
    <>
      <Head>
        <meta name="description" content="commander douglas hurley " />
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

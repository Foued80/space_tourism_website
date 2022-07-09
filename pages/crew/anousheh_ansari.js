import styles from "../../styles/Crew.module.css";
import CrewComp from "../../components/CrewComp";

export default function anousheh_ansari() {
  const crewData = {
    url: "/assets/crew/image-anousheh-ansari.webp",
    index: "3",
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  };
  return (
    <div className={styles.crew}>
      <h5 className={styles.heading}>
        <span>02</span>meet your crew
      </h5>
      <CrewComp crewData={crewData} />
    </div>
  );
}

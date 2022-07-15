import styles from "../../styles/Crew.module.css";
import CrewComp from "../../components/CrewComp";
import Head from "next/head";
export default function MARK_SHUTTLEWORTH() {
  const crewData = {
    url: "/assets/crew/image-mark-shuttleworth.webp",
    index: "1",
    role: "Mission Specialist ",
    name: "Mark Shuttleworth",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  };
  return (
    <>
      <Head>
        <meta
          name="description"
          content=" mission specialist MARK SHUTTLEWORTH"
        />
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

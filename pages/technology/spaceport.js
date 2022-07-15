import TechnologyComp from "../../components/TechnologyComp";
import styles from "../../styles/Technology.module.css";
import Head from "next/head";

export default function spaceport() {
  const tech_data = {
    url: "/assets/technology/image-spaceport-portrait.jpg",
    index: "1",
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  };
  return (
    <>
      <Head>
        <meta name="description" content="spaceport" />
      </Head>
      <div className={styles.technology}>
        <h5 className={styles.heading}>
          <span>03</span>space launch 101
        </h5>
        <TechnologyComp tech_data={tech_data} />
      </div>
    </>
  );
}

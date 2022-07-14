import TechnologyComp from "../../components/TechnologyComp";
import styles from "../../styles/Technology.module.css";

export default function space_capsule() {
  const tech_data = {
    url: "/assets/technology/image-space-capsule-portrait.jpg",
    index: "2",
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  };
  return (
    <div className={styles.technology}>
      <h5 className={styles.heading}>
        <span>03</span>space launch 101
      </h5>
      <TechnologyComp tech_data={tech_data} />
    </div>
  );
}

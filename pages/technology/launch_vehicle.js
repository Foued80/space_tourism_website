import TechnologyComp from "../../components/TechnologyComp";
import styles from "../../styles/Technology.module.css";

export default function launch_vehicle() {
  const tech_data = {
    url: "/assets/technology/image-launch-vehicle-landscape.jpg",
    index: "0",
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
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

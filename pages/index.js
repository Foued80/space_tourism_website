import styles from "../styles/Home.module.css";
function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.jumbotron}>
        <div className="jumbotron_main">
          <h5 className={styles.jumbotron_main_call}>
            so, you want to travel to
          </h5>
          <h1 className={styles.jumbotron_main_space}>space</h1>
          <p className={styles.jumbotron_main_lead}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className={styles.jumbotron_explore}>explore</div>
      </div>
    </div>
  );
}

export default Home;

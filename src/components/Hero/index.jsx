import { useNav } from "../../hooks/useNav";
import styles from "./Hero.module.css";

export default function Hero() {
  const homePageRef = useNav("home");
  return (
    <aside className={styles.hero} id="homeSection" ref={homePageRef}>
      <div className={styles["hero-bg"]}></div>
      <div className={styles["hero-overlay"]}>
        <div className={styles.grids}>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
        </div>
      </div>
      <div className={styles.container}>
        <section>
          <h1>
            Building the future of small retail{" "}
            <span className="text-gradient">with the power of data</span>
          </h1>
          <p className={styles.text}>
            Revealing what billions of consumers buy so the right <br />
            inventory can be ordered, stocked, positioned and delivered
          </p>
        </section>
      </div>
    </aside>
  );
}

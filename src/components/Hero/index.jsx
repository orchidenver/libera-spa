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
          <h1 className={styles["hero-header"]}>
            Making invisible commerce visible{" "}
            <span className="text-gradient">with the power of AI</span>
          </h1>
          <p className={styles.text}>
            Transform your retail strategy and unlock the power of data:
            Libera's AI-Powered Platform Maximizes Operational Efficiency with
            Data Driven Insights
          </p>
        </section>
      </div>
    </aside>
  );
}

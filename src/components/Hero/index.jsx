import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <aside className={styles.hero}>
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
          <p>
            Revealing what billions of consumers buy so the right <br />
            inventory can be ordered, stocked, positioned and delivered
          </p>
        </section>
      </div>
    </aside>
  );
}

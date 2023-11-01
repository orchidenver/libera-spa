import { useNav } from "../../hooks/useNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./AboutApp.module.css";
import appDemo from "../../assets/app-demo.png";
import appBtn from "../../assets/app-btn.png";

export default function AboutApp() {
  const liberaAppRef = useNav("libera app");
  const mobileSize = useMediaQuery("(max-width: 800px)");

  return (
    <section id="liberaappSection" className={styles.app} ref={liberaAppRef}>
      <div className={styles["app-overlay"]}></div>
      <div
        className={`${styles.container} ${
          mobileSize ? styles.col : styles.row
        }`}
      >
        <div className={styles["app__info"]}>
          <h3 className={styles["app__header"]}>LIBERA APP</h3>
          <p className={styles["app__description"]}>
            An essential tool to strengthen traditional trade with cutting edge
            technology
          </p>
          <p className={styles["app__text"]}>
            {mobileSize
              ? "Revealing what billions of consumers buy so the right inventory can be ordered, stocked, positioned and delivered"
              : "Our easy-to-use POS and order management system aggregates data directly from brands and distributors, ensures competitive prices and thus better margins. Libera is allowing small entrepreneurs to take advantage of their sales data and increase their take home by up to 100%. Thanks to constantly expanding assortment, we provide store owners with an opportunity to scale their business"}
          </p>
          <a href="#" className={styles["app__link"]}>
            <img src={appBtn} alt="Google Play application link" />
          </a>
        </div>
        <img
          src={appDemo}
          alt="App demonstration"
          className={styles["app__img"]}
        />
      </div>
    </section>
  );
}

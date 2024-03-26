import { useNav } from "../../hooks/useNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./AboutApp.module.css";
import appDemo from "../../assets/app-demo.webp";
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
            An ultimate solution to strengthen traditional trade with cutting
            edge technology
          </p>
          <p className={styles["app__text"]}>
            {mobileSize
              ? "Finance application that enables local shops to grow their business with enhanced tools for inventory management, digital payments, and AI driven data insights"
              : "Finance application that enables local shops to grow their business with enhanced tools for inventory management, digital payments, and AI driven data insights. With Libera, small businesses can order their stock directly from FMCG agents and distributors, avoiding the trouble of personally buying them from wholesalers at retail prices which guarantees better margins. Moreover, Libera is creating an unprecedented opportunity for entrepreneurs to monetize their sales data and increase their take home."}
          </p>
          <a
            href="https://play.google.com/store/"
            className={styles["app__link"]}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={appBtn}
              alt="Google Play application link"
              loading="lazy"
            />
          </a>
        </div>
        <img
          loading="lazy"
          src={appDemo}
          alt="App demonstration"
          className={styles["app__img"]}
        />
      </div>
    </section>
  );
}

import { useRef, useEffect, useState } from "react";
import { useNav } from "../../hooks/useNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Tooltip } from "react-tooltip";
import styles from "./AboutApp.module.css";
import appDemo from "../../assets/app-demo.webp";
import appBtn from "../../assets/app-btn.png";
import unitImg1 from "../../assets/lib_app_img_1.svg";
import unitImg2 from "../../assets/lib_app_img_2.svg";
import unitImg3 from "../../assets/lib_app_img_3.svg";
import unitImg4 from "../../assets/lib_app_img_4.svg";

export default function AboutApp() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const liberaAppRef = useNav("libera app");
  const mobileSize = useMediaQuery("(max-width: 800px)");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });

    observer.observe(ref.current);
  }, []);

  return (
    <section id="liberaappSection" className={styles.app} ref={liberaAppRef}>
      <div className={styles["app-overlay"]}></div>
      <div
        className={`${styles.container} ${
          mobileSize ? styles.col : styles.row
        }`}
      >
        <div className={styles["app__info"]} ref={ref}>
          <h3 className={styles["app__header"]}>LIBERA APP</h3>
          <p className={styles["app__description"]}>
            An essential tool to strengthen traditional trade with cutting edge
            technology
          </p>
          <div className={styles["app__features"]}>
            <div className={visible ? styles.animate1 : styles["app__unit"]}>
              <img
                src={unitImg1}
                alt="Order management"
                data-tooltip-id="order-management"
                data-tooltip-content="Access to good deals"
              />
            </div>
            <div className={visible ? styles.animate2 : styles["app__unit"]}>
              <img
                src={unitImg2}
                alt="Digital payments"
                data-tooltip-id="digital-payments"
                data-tooltip-content="Digital payments"
              />
            </div>
            <div className={visible ? styles.animate3 : styles["app__unit"]}>
              <img
                src={unitImg3}
                alt="AI insights"
                data-tooltip-id="ai-insights"
                data-tooltip-content="Сonversational Assistant"
              />
            </div>
            <div className={visible ? styles.animate4 : styles["app__unit"]}>
              <img
                src={unitImg4}
                alt="Financial services"
                data-tooltip-id="financial-services"
                data-tooltip-content="Micro credit"
              />
            </div>
          </div>
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
      <Tooltip
        id="order-management"
        style={{ backgroundColor: "#152D51E5", color: "#01C5FF" }}
      />
      <Tooltip
        id="digital-payments"
        style={{ backgroundColor: "#152D51E5", color: "#01C5FF" }}
      />
      <Tooltip
        id="ai-insights"
        style={{ backgroundColor: "#152D51E5", color: "#01C5FF" }}
        place={mobileSize ? "bottom" : "top"}
      />
      <Tooltip
        id="financial-services"
        style={{ backgroundColor: "#152D51E5", color: "#01C5FF" }}
        place={mobileSize ? "bottom" : "top"}
      />
    </section>
  );
}

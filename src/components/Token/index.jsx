import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./Token.module.css";
import Token1 from "../../assets/token-1.webp";
import Token2 from "../../assets/token-2.webp";
import Tokens from "../../assets/tokens.webp";

export default function Token() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const mobileSize = useMediaQuery("(max-width: 800px)");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });

    observer.observe(ref.current);
  }, []);

  return (
    <section className={styles.token} ref={ref}>
      <div className={styles.container}>
        <div className={styles["token__info"]}>
          <h3 className={styles["token__header"]}>
            <span>libe</span>
            <span>token</span>
          </h3>
          <div className={styles["token__imgs"]}>
            <img
              src={Token1}
              alt="token-big"
              className={
                visible && mobileSize
                  ? styles["token__animation"]
                  : styles["token__img-big"]
              }
            />
            <img
              src={Token2}
              alt="token-small"
              className={styles["token__img-small"]}
            />
            <img src={Tokens} alt="token-small" className={styles["tokens"]} />
          </div>
          <a href="#" className={styles["token__link"]}>
            Explore Libe
          </a>
        </div>
      </div>
    </section>
  );
}

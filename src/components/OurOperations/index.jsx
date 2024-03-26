import { useNav } from "../../hooks/useNav";
import styles from "./OurOperations.module.css";
import operation1 from "../../assets/operation-1.svg";
import operation2 from "../../assets/operation-2.svg";
import operation3 from "../../assets/operation-3.svg";

export default function OurOperations() {
  const operationsRef = useNav("what we do");

  return (
    <section
      id="whatwedoSection"
      ref={operationsRef}
      className={styles.operations}
    >
      <div className={styles.container}>
        <h3 className={styles["operations__header"]}>WHAT WE DO</h3>
        <p className={styles["operations__description"]}>
          Libera is untapping the largest data layers of retail in Emerging
          Markets by acquiring data directly from various users for market
          insights and optimized supply chains
        </p>
        <div className={styles["operations__block"]}>
          <div className={styles["operation__item"]}>
            <img
              src={operation1}
              alt="Image"
              className={styles["operations__img"]}
              loading="lazy"
            />
            <h4 className={styles["operations__title"]}>
              Recommendation engine
            </h4>
            <ul className={styles["operations__list"]}>
              <li className={styles.text}>Real time analytics</li>
              <li className={styles.text}>Product recommendations</li>
              <li className={styles.text}>Increased sales</li>
            </ul>
          </div>
          <div className={styles["operation__item"]}>
            <img
              src={operation2}
              alt="Image"
              className={styles["operations__img"]}
              loading="lazy"
            />
            <h4 className={styles["operations__title"]}>
              Inventory & order management
            </h4>
            <ul className={styles["operations__list"]}>
              <li className={styles.text}>Variety of purchasing options</li>
              <li className={styles.text}>Complete control of the stock</li>
              <li className={styles.text}>Competitive prices</li>
            </ul>
          </div>
          <div className={styles["operation__item"]}>
            <img
              src={operation3}
              alt="Image"
              className={styles["operations__img"]}
              loading="lazy"
            />
            <h4 className={styles["operations__title"]}>Digitalization</h4>
            <ul className={styles["operations__list"]}>
              <li className={styles.text}>Access to working capital</li>
              <li className={styles.text}>Data monetization</li>
              <li className={styles.text}>End-to-end visibility</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

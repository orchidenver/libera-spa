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
          Libera is transforming traditional trade in Emerging Markets,
          acquiring the data directly from the end users with our AI software
          for demand forecasting and predictable analytics
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
              <li className={styles.text}>Increase sales</li>
              <li className={styles.text}>
                Analyze customer preferences for actionable insights
              </li>
              <li className={styles.text}>Reduce waste</li>
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
              Inventory management
            </h4>
            <ul className={styles["operations__list"]}>
              <li className={styles.text}>
                Faster access to a wide variety of products
              </li>
              <li className={styles.text}>Complete control of the stock</li>
              <li className={styles.text}>Access to working capital</li>
            </ul>
          </div>
          <div className={styles["operation__item"]}>
            <img
              src={operation3}
              alt="Image"
              className={styles["operations__img"]}
              loading="lazy"
            />
            <h4 className={styles["operations__title"]}>Predict demand</h4>
            <ul className={styles["operations__list"]}>
              <li className={styles.text}>
                Increase revenue through product recommendations
              </li>
              <li className={styles.text}>Predict Inventory needs</li>
              <li className={styles.text}>Reduce lost sales</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

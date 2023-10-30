import { useNav } from "../../hooks/useNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./OurOperations.module.css";

export default function OurOperations() {
  const OperationsRef = useNav("what we do");
  const mobileSize = useMediaQuery("(max-width: 800px)");

  return (
    <section
      id="whatwedoSection"
      className={styles.operations}
      ref={OperationsRef}
    >
      <div className={styles.container}>
        <h3 className={styles["operations__header"]}>our mission</h3>
        <p className={styles["operations__description"]}>
          Inspired by the power of people, data, and technology
        </p>
        <div className={styles["operations__list"]}>
          <div className={styles["operations__item"]}>
            {!mobileSize && (
              <div className={styles.marker}>
                <div className={styles.square}></div>
              </div>
            )}
            <div className={styles.number}>1</div>
            <div className={styles.description}>
              We stive to improve lives and ensure financial inclusion for more
              people (100s of millions) than ever before across the emerging
              markets. Using retail data to remove the friction in supply
              chains, Liber will create a social, financial, and environmental
              change in Emerging Asia
            </div>
          </div>
          <div className={styles["operations__item"]}>
            {!mobileSize && (
              <div className={styles.marker}>
                <div className={styles.square}></div>
              </div>
            )}
            <div className={styles.number}>2</div>
            <div className={styles.description}>
              Libera aims to bridge a crucial gap in data visibility for small
              mom-and-pop shops that form the backbone of daily commerce. By
              enabling digital transactions and data insights, Libera is poised
              to transform the way business is conducted in this region, which
              has far-reaching implications for economic growth
            </div>
          </div>
          <div className={styles["operations__item"]}>
            {!mobileSize && (
              <div className={styles.marker}>
                <div className={styles.square}></div>
              </div>
            )}
            <div className={styles.number}>3</div>
            <div className={styles.description}>
              Libera offers a B2B solution to solve problems that plague large
              enterprises whose goods travel through Emerging Markets — by
              creating a provenance trail supported by validated data reported
              directly from the people who form the foundation of every
              country’s supply chains
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

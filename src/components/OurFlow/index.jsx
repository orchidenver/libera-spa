import { useNav } from "../../hooks/useNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./OurFlow.module.css";
import flow1 from "../../assets/flow1.webp";
import flow2 from "../../assets/flow2.webp";
import flow3 from "../../assets/flow3.webp";
import flow4 from "../../assets/flow4.webp";

export default function OurFlow() {
  const ourFlowRef = useNav("our flow");
  const mobileSize = useMediaQuery("(max-width: 800px)");

  return (
    <section className={styles.flow}>
      <div className={mobileSize ? "" : styles.container}>
        <h3
          className={styles["flow__header"]}
          id="ourflowSection"
          ref={ourFlowRef}
        >
          our flow
        </h3>
        <p className={styles["flow__description"]}>
          Connecting the Dots Between Consumers, Brands, and Retail with AI
        </p>
        <div className={styles["flow__container"]}>
          <picture>
            <source media="(max-width: 800px)" srcSet={flow1} />
            <source media="(max-width: 1280px)" srcSet={flow1} />
            <source media="(max-width: 1920px)" srcSet={flow1} />
            <img
              loading="lazy"
              src={flow1}
              alt="Water example"
              className={styles["flow__img"]}
            />
          </picture>
          <div
            className={`${styles["flow__text"]} ${styles["flow__text-right"]}`}
          >
            <h4
              className={`${styles["flow__description"]} ${styles.subheader}`}
            >
              Order and inventory management
            </h4>
            <p className={styles.content}>
              We offer store owners an opportunity to order directly from brands
              and distributors which ensures best deals on the market
            </p>
          </div>
        </div>
        <div
          className={`${styles["flow__container"]} ${
            mobileSize ? "" : styles.reverse
          }`}
        >
          <picture>
            <source media="(max-width: 800px)" srcSet={flow2} />
            <source media="(max-width: 1280px)" srcSet={flow2} />
            <source media="(max-width: 1920px)" srcSet={flow2} />
            <img
              loading="lazy"
              src={flow2}
              alt="Water example"
              className={styles["flow__img-crop"]}
            />
          </picture>

          <div
            className={`${styles["flow__text"]} ${
              mobileSize ? "" : styles["flow__text-left"]
            }`}
          >
            <h4
              className={`${styles["flow__description"]} ${styles.subheader}`}
            >
              Data dividend
            </h4>
            <p className={styles.content}>
              An incentive mechanism created to make an impact and return to the
              community. We value our users above all and want to build strong
              and trustworthy relationships with constantly increasing
              collaboration
            </p>
          </div>
        </div>
        <div className={styles["flow__container"]}>
          <picture>
            <source media="(max-width: 800px)" srcSet={flow3} />
            <source media="(max-width: 1280px)" srcSet={flow3} />
            <source media="(max-width: 1920px)" srcSet={flow3} />
            <img
              loading="lazy"
              src={flow3}
              alt="Water example"
              className={styles["flow__img"]}
            />
          </picture>
          <div
            className={`${styles["flow__text"]} ${styles["flow__text-right"]}`}
          >
            <h4
              className={`${styles["flow__description"]} ${styles.subheader}`}
            >
              Increased sales
            </h4>
            <p className={styles.content}>
              By acquiring sales data directly from the POS, we can forecast
              demand for small entrepreneurs and big brands. This allows us to
              identify the trajectory of the consumption to fulfill the needs of
              most of 1 Billion people
            </p>
          </div>
        </div>
        <div
          className={`${styles["flow__container"]} ${
            mobileSize ? "" : styles.reverse
          }`}
        >
          <picture>
            <source media="(max-width: 800px)" srcSet={flow4} />
            <source media="(max-width: 1280px)" srcSet={flow4} />
            <source media="(max-width: 1920px)" srcSet={flow4} />
            <img
              loading="lazy"
              src={flow4}
              alt="Water example"
              className={styles["flow__img"]}
            />
          </picture>

          <div
            className={`${styles["flow__text"]} ${
              mobileSize ? "" : styles["flow__text-left"]
            }`}
          >
            <h4
              className={`${styles["flow__description"]} ${styles.subheader}`}
            >
              Financing
            </h4>
            <p className={styles.content}>
              Many store owners lack access to much needed working capital for
              their day-to-day needs. Thanks to Libera – every shop will become
              visible to capital providers which will guarantee an additional
              boost to the retail scene in Emerging Markets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useNav } from "../../hooks/useNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
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
          {mobileSize ? (
            <>
              <img
                loading="lazy"
                src={flow1}
                alt="Water example"
                className={styles["flow__img"]}
              />
              <div
                className={`${styles["flow__text"]} ${styles["flow__text-right"]}`}
              >
                <h4
                  className={`${styles["flow__description"]} ${styles.subheader}`}
                >
                  Order and inventory management
                </h4>
                <p className={styles.content}>
                  We offer store owners an opportunity to order directly from
                  brands and distributors which ensures best deals on the market
                  With billions of US dollars of inventory produced but never
                  sold - understanding what is needed and where is key. We offer
                  store owners an opportunity to follow client’s needs and order
                  directly from brands and distributors which ensures best deals
                  on the market
                </p>
              </div>
            </>
          ) : (
            <>
              <motion.img
                loading="lazy"
                src={flow1}
                alt="Water example"
                className={styles["flow__img"]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              />
              <motion.div
                className={`${styles["flow__text"]} ${styles["flow__text-right"]}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: "-35%", y: "-50%" },
                  visible: { opacity: 1, x: "-50%", y: "-50%" },
                }}
              >
                <h4
                  className={`${styles["flow__description"]} ${styles.subheader}`}
                >
                  Order and inventory management
                </h4>
                <p className={styles.content}>
                  With billions of US dollars of inventory produced but never
                  sold - understanding what is needed and where is key. We offer
                  store owners an opportunity to follow client’s needs and order
                  directly from brands and distributors which ensures best deals
                  on the market
                </p>
              </motion.div>
            </>
          )}
        </div>
        <div
          className={`${styles["flow__container"]} ${
            mobileSize ? "" : styles.reverse
          }`}
        >
          {mobileSize ? (
            <>
              <img
                loading="lazy"
                src={flow2}
                alt="Water example"
                className={styles["flow__img-crop"]}
              />
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
                  An incentive mechanism created to make an impact and return to
                  the community of our users who form the key pillar of retail
                  scene in Emerging Markets. Increase your home takeaway by
                  sharing the sales data
                </p>
              </div>
            </>
          ) : (
            <>
              <motion.img
                loading="lazy"
                src={flow2}
                alt="Water example"
                className={styles["flow__img-crop"]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              />

              <motion.div
                className={`${styles["flow__text"]} ${
                  mobileSize ? "" : styles["flow__text-left"]
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: "-65%", y: "-50%" },
                  visible: { opacity: 1, x: "-50%", y: "-50%" },
                }}
              >
                <h4
                  className={`${styles["flow__description"]} ${styles.subheader}`}
                >
                  Data dividend
                </h4>
                <p className={styles.content}>
                  An incentive mechanism created to make an impact and return to
                  the community of our users who form the key pillar of retail
                  scene in Emerging Markets. Increase your home takeaway by
                  sharing the sales data
                </p>
              </motion.div>
            </>
          )}
        </div>
        <div className={styles["flow__container"]}>
          {mobileSize ? (
            <>
              <img
                loading="lazy"
                src={flow3}
                alt="Water example"
                className={styles["flow__img"]}
              />
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
                  demand for small entrepreneurs and big brands. This allows us
                  to identify the trajectory of the consumption to fulfill the
                  needs of most of 1 Billion people
                </p>
              </div>
            </>
          ) : (
            <>
              <motion.img
                loading="lazy"
                src={flow3}
                alt="Water example"
                className={styles["flow__img"]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              />
              <motion.div
                className={`${styles["flow__text"]} ${styles["flow__text-right"]}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: "-35%", y: "-50%" },
                  visible: { opacity: 1, x: "-50%", y: "-50%" },
                }}
              >
                <h4
                  className={`${styles["flow__description"]} ${styles.subheader}`}
                >
                  Increased sales
                </h4>
                <p className={styles.content}>
                  By acquiring sales data directly from the POS, we can forecast
                  demand for small entrepreneurs and big brands. This allows us
                  to identify the trajectory of the consumption to fulfill the
                  needs of most of 1 Billion people
                </p>
              </motion.div>
            </>
          )}
        </div>
        <div
          className={`${styles["flow__container"]} ${
            mobileSize ? "" : styles.reverse
          }`}
        >
          {mobileSize ? (
            <>
              <img
                loading="lazy"
                src={flow4}
                alt="Water example"
                className={styles["flow__img"]}
              />

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
                  Many store owners lack access to much needed working capital
                  for their day-to-day needs. Thanks to Libera – every shop will
                  become visible to capital providers which will guarantee an
                  additional boost to the retail scene in Emerging Markets
                </p>
              </div>
            </>
          ) : (
            <>
              <motion.img
                loading="lazy"
                src={flow4}
                alt="Water example"
                className={styles["flow__img"]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              />

              <motion.div
                className={`${styles["flow__text"]} ${
                  mobileSize ? "" : styles["flow__text-left"]
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: "-65%", y: "-50%" },
                  visible: { opacity: 1, x: "-50%", y: "-50%" },
                }}
              >
                <h4
                  className={`${styles["flow__description"]} ${styles.subheader}`}
                >
                  Financing
                </h4>
                <p className={styles.content}>
                  Many store owners lack access to much needed working capital
                  for their day-to-day needs. Thanks to Libera – every shop will
                  become visible to capital providers which will guarantee an
                  additional boost to the retail scene in Emerging Markets
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

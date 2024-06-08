import { useNav } from "../../hooks/useNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import styles from "./OurCapabilities.module.css";
import flow1 from "../../assets/flow1.webp";
import flow2 from "../../assets/flow2.webp";
import flow3 from "../../assets/flow3.webp";
import flow4 from "../../assets/flow4.webp";
import aiassistant from "../../assets/aiassistant.webp";

export default function OurCapabilities() {
  const ourCapRef = useNav("our capabilities");
  const mobileSize = useMediaQuery("(max-width: 800px)");

  return (
    <section className={styles.flow}>
      <div className={mobileSize ? "" : styles.container}>
        <h3
          className={styles["flow__header"]}
          id="ourcapabilitiesSection"
          ref={ourCapRef}
        >
          our capabilities
        </h3>
        <p className={styles["flow__description"]}>
          Connecting the Dots Between Consumers, Brands, and Retail with AI
        </p>
        <div className={styles["flow__container"]}>
          {mobileSize ? (
            <>
              <img
                loading="lazy"
                src={flow3}
                alt="Water example"
                className={styles["flow__img-crop"]}
              />
              <div
                className={`${styles["flow__text"]} ${styles["flow__text-right"]}`}
              >
                <h4
                  className={`${styles["flow__description"]} ${styles.subheader}`}
                >
                  Digital transactions
                </h4>
                <p className={styles.content}>
                  With billions of US dollars of inventory produced but never
                  sold - understanding what is needed and where is key. By
                  applying AI to sales and distribution data, we can build
                  visibility across the entire supply chain and forecast demand
                  for both small entrepreneurs and big brands which enables them
                  to better manage their client’s needs
                </p>
              </div>
            </>
          ) : (
            <>
              <motion.img
                loading="lazy"
                src={flow3}
                alt="Water example"
                className={styles["flow__img-crop"]}
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
                  Digital transactions
                </h4>
                <p className={styles.content}>
                  With billions of US dollars of inventory produced but never
                  sold - understanding what is needed and where is key. By
                  applying AI to sales and distribution data, we can build
                  visibility across the entire supply chain and forecast demand
                  for both small entrepreneurs and big brands which enables them
                  to better manage their client’s needs
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
                src={aiassistant}
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
                  AI Assistant
                </h4>
                <p className={styles.content}>
                  We believe in the power of informed decision making. Access
                  real time analysis of consumer behavior to optimize inventory
                  and sales strategies to increase profit
                </p>
              </div>
            </>
          ) : (
            <>
              <motion.img
                loading="lazy"
                src={aiassistant}
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
                  AI Assistant
                </h4>
                <p className={styles.content}>
                  We believe in the power of informed decision making. Access
                  real time analysis of consumer behavior to optimize inventory
                  and sales strategies to increase profit
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
                src={flow2}
                alt="Water example"
                className={styles["flow__img-crop"]}
              />
              <div
                className={`${styles["flow__text"]} ${styles["flow__text-right"]}`}
              >
                <h4
                  className={`${styles["flow__description"]} ${styles.subheader}`}
                >
                  MICRO INCENTIVES
                </h4>
                <p className={styles.content}>
                  Users can now capitalize on their sales data and open
                  additional features like dashboards or monthly analytics by
                  simply using our app. Libera strives to make an impact and
                  return to the community of our users who form the key pillar
                  of retail scene in Emerging Markets
                </p>
              </div>
            </>
          ) : (
            <>
              <motion.img
                loading="lazy"
                src={flow2}
                alt="Water example"
                className={`${styles["flow__img-crop"]} ${styles["flip"]}`}
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
                  MICRO INCENTIVES
                </h4>
                <p className={styles.content}>
                  Users can now capitalize on their sales data and open
                  additional features like dashboards or monthly analytics by
                  simply using our app. Libera strives to make an impact and
                  return to the community of our users who form the key pillar
                  of retail scene in Emerging Markets
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
                src={flow1}
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
                  ORDER AND INVENTORY MANAGEMENT
                </h4>
                <p className={styles.content}>
                  Digital inventory management and online ordering not only
                  increase efficiency but create a data trail which can be
                  leveraged for AI implementation. We offer store owners an
                  opportunity to order inventory directly from brands and
                  distributors which ensures best deals on the market
                </p>
              </div>
            </>
          ) : (
            <>
              <motion.img
                loading="lazy"
                src={flow1}
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
                  ORDER AND INVENTORY MANAGEMENT
                </h4>
                <p className={styles.content}>
                  Digital inventory management and online ordering not only
                  increase efficiency but create a data trail which can be
                  leveraged for AI implementation. We offer store owners an
                  opportunity to order inventory directly from brands and
                  distributors which ensures best deals on the market
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
                src={flow4}
                alt="Water example"
                className={styles["flow__img-crop"]}
              />
              <div
                className={`${styles["flow__text"]} ${styles["flow__text-right"]}`}
              >
                <h4
                  className={`${styles["flow__description"]} ${styles.subheader}`}
                >
                  EMBEDDED FINANCE
                </h4>
                <p className={styles.content}>
                  Despite many Mom-and-Pop shops providing credit to their
                  customers, very few actually have the access to working
                  capital needed to buy new inventory or expand the existing
                  one. Libera is using store data to eliminate risk for capital
                  providers, while nurturing a burgeoning Fintech environment
                  and ensuring a rapid growth of Emerging Markets retail scene
                </p>
              </div>
            </>
          ) : (
            <>
              <motion.img
                loading="lazy"
                src={flow4}
                alt="Water example"
                className={`${styles["flow__img-crop"]} ${styles["flip"]}`}
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
                  EMBEDDED FINANCE
                </h4>
                <p className={styles.content}>
                  Despite many Mom-and-Pop shops providing credit to their
                  customers, very few actually have the access to working
                  capital needed to buy new inventory or expand the existing
                  one. Libera is using store data to eliminate risk for capital
                  providers, while nurturing a burgeoning Fintech environment
                  and ensuring a rapid growth of Emerging Markets retail scene
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

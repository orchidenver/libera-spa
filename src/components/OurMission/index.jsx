import { useNav } from "../../hooks/useNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import styles from "./OurMission.module.css";

const MOTION_CHILD_VARIANT = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const MOTION_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function OurMission() {
  const missionRef = useNav("our mission");
  const mobileSize = useMediaQuery("(max-width: 800px)");

  return (
    <section id="ourmissionSection" className={styles.mission} ref={missionRef}>
      <div className={styles.container}>
        <h3 className={styles["mission__header"]}>our mission</h3>
        <p className={styles["mission__description"]}>
          Inspired by the power of people, data, and technology
        </p>
        <motion.div
          className={styles["mission__list"]}
          variants={MOTION_CONTAINER}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div
            className={styles["mission__item"]}
            variants={MOTION_CHILD_VARIANT}
          >
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
          </motion.div>
          <motion.div
            className={styles["mission__item"]}
            variants={MOTION_CHILD_VARIANT}
          >
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
          </motion.div>
          <motion.div
            className={styles["mission__item"]}
            variants={MOTION_CHILD_VARIANT}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

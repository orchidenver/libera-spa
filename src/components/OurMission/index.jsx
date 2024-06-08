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
              Libera is creating a social, financial, and environmental impact
              in Emerging Asia by providing micro retailers with the knowledge
              and technology to leverage their data and strengthen local
              communities
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
              We are transforming the retail landscape in emerging markets by
              leveraging AI and blockchain technology to digitize small stores,
              seize billions of uncaptured transactions and bridge data streams
              to create a comprehensive view of the ecosystem
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
              The Libera Global AI ecosystem includes a secure data-sharing
              platform, a micro-incentive system for merchants and consumers,
              and a suite of AI-powered analytics tools for brands and
              retailers, creating a virtuous cycle of growth and value creation
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { useNav } from "../../hooks/useNav";
import styles from "./OurInvestors.module.css";
import investor1 from "../../assets/investor-1.jpg";
import investor2 from "../../assets/investor-2.jpg";
import investor3 from "../../assets/investor-3.jpg";
import investor4 from "../../assets/investor-4.jpg";
import investor6 from "../../assets/investor-6.jpg";

export default function OurInvestors() {
  const ourInvestorsRef = useNav("our investors");
  return (
    <section
      id="ourinvestorsSection"
      className={styles.investors}
      ref={ourInvestorsRef}
    >
      <div className={styles.container}>
        <h3 className={styles["investors__header"]}>our investors</h3>
        <p className={styles["investors__description"]}>
          LIBERA IS LUCKY TO BE A PART OF THE MOST BRILLIANT STRATEGIC
          PARTNERSHIPS AND HAVE THE INGENIOUS MINDS AS OUR INVESTORS AND
          ADVISORS
        </p>
        <div className={styles["investors__grid"]}>
          <div className={styles.investor}>
            <img
              src={investor1}
              alt="GAINS Associates"
              className={styles["investor__img"]}
            />
            <a className={styles["investor__description"]} href="#">
              GAINS Associates
            </a>
          </div>
          <div className={styles.investor}>
            <img
              src={investor2}
              alt="Baltic Sandbox Ventures"
              className={styles["investor__img"]}
            />
            <a className={styles["investor__description"]} href="#">
              Baltic Sandbox Ventures
            </a>
          </div>
          <div className={styles.investor}>
            <img
              src={investor3}
              alt="Animoca Brands"
              className={styles["investor__img"]}
            />
            <a className={styles["investor__description"]} href="#">
              Animoca Brands
            </a>
          </div>
          <div className={styles.investor}>
            <img
              src={investor4}
              alt="Wolfgang Lehmacher (World Economic Forum)"
              className={styles["investor__img"]}
            />
            <a className={styles["investor__description"]} href="#">
              World Economic Forum
            </a>
          </div>
          <div className={styles.investor}>
            <img
              src={investor6}
              alt="Asymmetrica Ventures"
              className={styles["investor__img"]}
            />
            <a className={styles["investor__description"]} href="#">
              Asymmetrica Ventures
            </a>
          </div>
          <div className={styles.investor}>
            <img
              src={investor6}
              alt="ArtesianVC"
              className={styles["investor__img"]}
            />
            <a className={styles["investor__description"]} href="#">
              ArtesianVC
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useNav } from "../../hooks/useNav";
import styles from "./OurInvestors.module.css";
import investor1 from "../../assets/investor-1.webp";
import investor2 from "../../assets/investor-2.webp";
import investor3 from "../../assets/investor-3.webp";
import investor4 from "../../assets/investor-4.webp";
import investor5 from "../../assets/investor-5.webp";
import investor6 from "../../assets/investor-6.webp";

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
              src={investor2}
              alt="Baltic Sandbox Ventures"
              className={styles["investor__img"]}
              loading="lazy"
            />
            <a
              className={styles["investor__description"]}
              href="https://balticsandbox.ventures/"
              target="_blank"
              rel="noreferrer"
            >
              Baltic Sandbox Ventures
            </a>
          </div>
          <div className={styles.investor}>
            <img
              src={investor3}
              alt="Animoca Brands"
              className={styles["investor__img"]}
              loading="lazy"
            />
            <a
              className={styles["investor__description"]}
              href="https://www.animocabrands.com/"
              target="_blank"
              rel="noreferrer"
            >
              Animoca Brands
            </a>
          </div>
          <div className={styles.investor}>
            <img
              src={investor5}
              alt="Asymmetrica Ventures"
              className={styles["investor__img"]}
              loading="lazy"
            />
            <a
              className={styles["investor__description"]}
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Asymmetrica Ventures
            </a>
          </div>
          <div className={styles.investor}>
            <img
              src={investor6}
              alt="ArtesianVC"
              className={styles["investor__img"]}
              loading="lazy"
            />
            <a
              className={styles["investor__description"]}
              href="https://www.artesianinvest.com/"
              target="_blank"
              rel="noreferrer"
            >
              ArtesianVC
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

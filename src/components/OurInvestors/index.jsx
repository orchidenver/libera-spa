import { useNav } from "../../hooks/useNav";
import styles from "./OurInvestors.module.css";

export default function OurInvestors() {
  const ourInvestorsRef = useNav("our investors");
  return (
    <section
      id="ourinvestorsSection"
      className={styles.investors}
      ref={ourInvestorsRef}
    >
      OurInvestors
    </section>
  );
}

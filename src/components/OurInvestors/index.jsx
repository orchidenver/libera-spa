import { useNav } from "../../hooks/useNav";
import ScrollCarousel from "scroll-carousel-react";
import styles from "./OurInvestors.module.css";
import { CAROUSEL_DATA } from "../../utils/data";

function investors() {
  return CAROUSEL_DATA.map((el) => {
    return (
      <div className={styles.investor} key={el.text}>
        <a className={styles["investor__description"]} href={el.href}>
          <img
            src={el.src}
            alt={el.text}
            className={styles["investor__img"]}
            loading="lazy"
          />
        </a>
      </div>
    );
  });
}

export default function OurInvestors() {
  const ourInvestorsRef = useNav("our investors");
  const content = investors();

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
        <ScrollCarousel autoplay speed={0} margin={50} autoplaySpeed={1}>
          {content}
        </ScrollCarousel>
      </div>
    </section>
  );
}

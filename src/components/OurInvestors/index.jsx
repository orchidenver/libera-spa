import { useNav } from "../../hooks/useNav";
import styles from "./OurInvestors.module.css";
import { CAROUSEL_DATA } from "../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function investors() {
  return CAROUSEL_DATA.map((el) => {
    return (
      <SwiperSlide className={styles.investor} key={el.text}>
        <a
          className={styles["investor__description"]}
          href={el.href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={el.src}
            alt={el.text}
            className={styles["investor__img"]}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader" />
        </a>
      </SwiperSlide>
    );
  });
}

function Slider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
      }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
    >
      {investors()}
    </Swiper>
  );
}

export default function OurInvestors() {
  const ourInvestorsRef = useNav("our investors");
  const content = investors();
  console.log(content);

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
        <Slider />
      </div>
    </section>
  );
}

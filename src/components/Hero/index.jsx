import { useNav } from "../../hooks/useNav";
import video from "../../assets/hero-video-mob.webm";
import styles from "./Hero.module.css";

export default function Hero() {
  const homePageRef = useNav("home");
  return (
    <aside className={styles.hero} id="homeSection" ref={homePageRef}>
      <div className={styles["hero-bg"]}></div>
      {/* <video autoPlay muted loop className={styles["hero-bg"]}>
        <source src={video} type="video/mp4" />
      </video> */}
      {/* <iframe
        className={styles["bg-video"]}
        src="https://www.youtube.com/embed/nyWFX9qsmbM?autoplay=1&mute=1&controls=0&loop=1&playlist=nyWFX9qsmbM"
        allowFullScreen
        allow="autoplay"
        frameBorder={0}
      /> */}
      <div className={styles["hero-overlay"]}>
        <div className={styles.grids}>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
          <div className={styles.grid}></div>
        </div>
      </div>
      <div className={styles.container}>
        <section>
          <h1 className={styles["hero-header"]}>
            Making invisible commerce visible{" "}
            <span className="text-gradient">with the power of AI</span>
          </h1>
          <p className={styles.text}>
            Revolutionizing the retail landscape in emerging markets by
            incentivizing data sharing and empowering small merchants with
            AI-powered tools
          </p>
        </section>
      </div>
    </aside>
  );
}

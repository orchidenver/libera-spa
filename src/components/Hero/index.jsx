import { useNav } from "../../hooks/useNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
// import video from "../../assets/hero-video-mob.webm";
import styles from "./Hero.module.css";

export default function Hero() {
  const homePageRef = useNav("home");
  const mobileSize = useMediaQuery("(max-width: 800px)");

  return (
    <aside className={styles.hero} id="homeSection" ref={homePageRef}>
      {mobileSize ? (
        <iframe
          className={styles["bg-video"]}
          src="https://www.youtube.com/embed/OKkUalOPyzQ?autoplay=1&mute=1&controls=0&loop=1&playlist=OKkUalOPyzQ"
          allowFullScreen
          allow="autoplay"
          frameBorder={0}
        />
      ) : (
        <iframe
          className={styles["bg-video"]}
          src="https://www.youtube.com/embed/o8BSFLMsQ1o?autoplay=1&mute=1&controls=0&loop=1&playlist=o8BSFLMsQ1o"
          allowFullScreen
          allow="autoplay"
          frameBorder={0}
        />
      )}
      {/* <div className={styles["hero-bg"]}></div> */}
      {/* <video autoPlay muted loop className={styles["hero-bg"]}>
        <source src={video} type="video/mp4" />
      </video> */}

      {/* https://www.youtube.com/embed/nyWFX9qsmbM?autoplay=1&mute=1&controls=0&loop=1&playlist=nyWFX9qsmbM */}

      {/* <div className={styles["hero-overlay"]}>
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
      </div> */}
      <div className={styles.container}>
        <section>
          <h1 className={styles["hero-header"]}>
            Making invisible commerce visible{" "}
            <span className="text-gradient">with the power of AI</span>
          </h1>
          {/* <p className={styles.text}>
            Revolutionizing the retail landscape in emerging markets by
            incentivizing data sharing and empowering small merchants with
            AI-powered tools
          </p> */}
        </section>
      </div>
    </aside>
  );
}

import styles from "./Footer.module.css";
import x from "../../assets/x.svg";
import mail from "../../assets/mail.svg";
import tg from "../../assets/tg.svg";
import fb from "../../assets/fb.svg";
import li from "../../assets/li.svg";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.flex}`}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.media}>
          <div className={styles.item}>
            <a href="#">
              <img src={fb} alt="Facebook" />
            </a>
          </div>
          <div className={styles.item}>
            <a href="#">
              <img src={li} alt="LinkedIn" />
            </a>
          </div>
          <div className={styles.item}>
            <a href="#">
              <img src={tg} alt="Telegram" />
            </a>
          </div>
          <div className={styles.item}>
            <a href="#">
              <img src={x} alt="X" />
            </a>
          </div>
          <div className={styles.item}>
            <a href="#">
              <img src={mail} alt="Mail" />
            </a>
          </div>
        </div>
        <p className={styles.copyright}>
          {`Copyright © ${new Date().getFullYear()} Libera artificial Intelligence, Inc.`}
        </p>
      </div>
    </footer>
  );
}

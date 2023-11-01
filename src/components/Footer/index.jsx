import styles from "./Footer.module.css";
import x from "../../assets/x.svg";
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
            <a
              href="https://www.facebook.com/LiberaTechAI/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fb} alt="Facebook" />
            </a>
          </div>
          <div className={styles.item}>
            <a
              href="https://www.linkedin.com/company/31540905/admin/feed/posts/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={li} alt="LinkedIn" />
            </a>
          </div>
          <div className={styles.item}>
            <a
              href="https://t.me/libera_foundation"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tg} alt="Telegram" />
            </a>
          </div>
          <div className={styles.item}>
            <a
              href="https://twitter.com/LIBERA_GLOBAL?t=s64jqugzj6B-AsI4ipH-PQ&s=08"
              target="_blank"
              rel="noreferrer"
            >
              <img src={x} alt="X" />
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

import { useNav } from "../../hooks/useNav";
import styles from "./Contacts.module.css";
import office1 from "../../assets/office1.jpg";
import office2 from "../../assets/office2.jpg";
import office3 from "../../assets/office3.jpg";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";

export default function Contacts() {
  const contactsRef = useNav("contacts");

  return (
    <section id="contactsSection" className={styles.contacts} ref={contactsRef}>
      <div className={styles.container}>
        <h3 className={styles["contacts__header"]}>contacts</h3>
        <div className={styles.offices}>
          <div className={styles.office}>
            <img src={office1} alt="USA" className={styles["office__img"]} />
            <h4 className={styles["office__subtitle"]}>head office</h4>
            <h4 className={styles["office__title"]}>
              united states of america
            </h4>
            <div className={styles["office__location"]}>
              <img src={location} alt="location" className="icon" />
              <span className="address">
                600 Congress Ave, Austin, TX 78701
              </span>
            </div>
            <div className={styles["office__contact"]}>
              <img src={phone} alt="contact" className="icon" />
              <span className="contact">(+1) 512 998 1584</span>
            </div>
          </div>
          <div className={styles.office}>
            <img src={office2} alt="USA" className={styles["office__img"]} />
            <h4 className={styles["office__title"]}>indonesia</h4>
            <div className={styles["office__location"]}>
              <img src={location} alt="location" className="icon" />
              <span className="address">
                CoHive 101 Jl. Mega Kuningan Barat Blok E.4.7 No. 1 RT. 5/RW. 2
                Kawasan Mega Kuningan, Kel. Kuningan Timur, Kec. Setiabudi,
                Jakarta Selatan 12950
              </span>
            </div>
          </div>
          <div className={styles.office}>
            <img src={office3} alt="USA" className={styles["office__img"]} />
            <h4 className={styles["office__title"]}>lithuania</h4>
            <div className={styles["office__location"]}>
              <img src={location} alt="location" className="icon" />
              <span className="address">
                601 Congress Ave, Austin, TX 78701
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

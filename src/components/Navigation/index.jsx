/* eslint-disable react/prop-types */
import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Link from "./Link";
import styles from "./Navigation.module.css";
import logo from "../../assets/logo.svg";
import fb from "../../assets/fb-icon.svg";
import tg from "../../assets/tg-icon.svg";
import x from "../../assets/x-icon.svg";
import mail from "../../assets/mail-icon.svg";
import li from "../../assets/li-icon.svg";

export default function Navigation({ selectedPage, setSelectedPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [burgerMenuClass, setBurgerMenuClass] = useState(
    `${styles["burger-bar"]} ${styles.unclicked}`
  );
  const mobileScreen = useMediaQuery("(max-width: 800px)");
  const activeMenuStyles = styles.active;

  function updateBurgerMenuClass() {
    if (!mobileMenuOpen) {
      setBurgerMenuClass(`${styles["burger-bar"]} ${styles.clicked}`);
    } else {
      setBurgerMenuClass(`${styles["burger-bar"]} ${styles.unclicked}`);
    }
  }

  return (
    <header>
      <img src={logo} alt="logo" className={styles.logo} />
      <nav
        className={`${styles.menu} ${mobileMenuOpen ? activeMenuStyles : ""}`}
      >
        <ul className={styles.navigation}>
          <li className={styles.nav_link}>
            <Link
              page="home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
          <li className={styles.nav_link}>
            <Link
              page="our flow"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
          <li className={styles.nav_link}>
            <Link
              page="libera app"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
          <li className={styles.nav_link}>
            <Link
              page="what we do"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
          <li className={styles.nav_link}>
            <Link
              page="our mission"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
          <li className={styles.nav_link}>
            <Link
              page="our team"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
          <li className={styles.nav_link}>
            <Link
              page="our investors"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
          <li className={styles.nav_link}>
            <Link
              page="contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
        </ul>
        <ul className={styles.media}>
          <li className={styles.soc_link}>
            <a href="#">
              <img src={fb} alt="facebook" />
            </a>
          </li>
          <li className={styles.soc_link}>
            <a href="#">
              <img src={li} alt="linkedin" />
            </a>
          </li>
          <li className={styles.soc_link}>
            <a href="#">
              <img src={tg} alt="telegram" />
            </a>
          </li>
          <li className={styles.soc_link}>
            <a href="#">
              <img src={x} alt="x (twitter)" />
            </a>
          </li>
          <li className={styles.soc_link}>
            <a href="#">
              <img src={mail} alt="mail" />
            </a>
          </li>
        </ul>
      </nav>
      <button
        className={styles["burger-menu"]}
        onClick={() => {
          updateBurgerMenuClass();
          setMobileMenuOpen((prevState) => !prevState);
        }}
      >
        <div className={burgerMenuClass}></div>
        <div className={burgerMenuClass}></div>
        <div className={burgerMenuClass}></div>
      </button>
    </header>
  );
}

import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./Navigation.module.css";
import logo from "../../assets/logo.svg";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [burgerMenuClass, setBurgerMenuClass] = useState(
    `${styles["burger-bar"]} ${styles.unclicked}`
  );
  const mobileScreen = useMediaQuery("(max-width: 800px)");

  function updateBurgerMenuClass() {
    if (!mobileMenuOpen) {
      setBurgerMenuClass(`${styles["burger-bar"]} ${styles.clicked}`);
    } else {
      setBurgerMenuClass(`${styles["burger-bar"]} ${styles.unclicked}`);
    }
  }

  return (
    <header>
      <img src={logo} alt="logo" />
      {mobileMenuOpen && (
        <nav>
          <ul>
            <li>home</li>
            <li>our flow</li>
            <li>libera app</li>
            <li>what we do</li>
            <li>our mission</li>
            <li>our team</li>
            <li>our investors</li>
            <li>contacts</li>
          </ul>
        </nav>
      )}
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

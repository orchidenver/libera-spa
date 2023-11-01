/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { NavContext } from "../../context/NavContext";
import styles from "./Navigation.module.css";
import { navLinks } from "../../utils/data.js";
import logo from "../../assets/logo.svg";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [burgerMenuClass, setBurgerMenuClass] = useState(
    `${styles["burger-bar"]} ${styles.unclicked}`
  );
  const { activeLinkId } = useContext(NavContext);
  const activeMenuStyles = styles.active;

  function updateBurgerMenuClass() {
    if (!mobileMenuOpen) {
      setBurgerMenuClass(`${styles["burger-bar"]} ${styles.clicked}`);
    } else {
      setBurgerMenuClass(`${styles["burger-bar"]} ${styles.unclicked}`);
    }
  }

  function handleClickLogo() {
    document
      .getElementById("homeSection")
      .scrollIntoView({ behavior: "smooth" });
  }

  function renderNavLink(content) {
    const scrollToId = `${content.toLowerCase().replace(/ /g, "")}Section`;
    function handleClickNav() {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setBurgerMenuClass(`${styles["burger-bar"]} ${styles.unclicked}`);
    }

    return (
      <li
        className={
          activeLinkId === content
            ? `${styles["active-link"]} ${styles.nav_link}`
            : styles.nav_link
        }
        key={content}
        onClick={handleClickNav}
      >
        {content}
      </li>
    );
  }

  return (
    <header>
      <img
        src={logo}
        alt="logo"
        className={styles.logo}
        onClick={handleClickLogo}
        loading="lazy"
      />
      <nav
        className={`${styles.menu} ${mobileMenuOpen ? activeMenuStyles : ""}`}
      >
        <ul className={styles.navigation}>
          {navLinks.map((link) => renderNavLink(link))}
        </ul>
      </nav>
      <button
        aria-label="Open / close menu"
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

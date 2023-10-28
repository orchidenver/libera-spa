import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./Navigation.module.css";
import logo from "../../assets/logo.svg";

export default function Navigation() {
  const mobileScreen = useMediaQuery("(max-width: 800px)");
  return (
    <header>
      <img src={logo} alt="logo" />
      {!mobileScreen && (
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

      {mobileScreen && <button>OPEN</button>}
    </header>
  );
}

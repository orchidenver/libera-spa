/* eslint-disable react/prop-types */
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "../../components/Navigation/Navigation.module.css";

export default function Link({ page, selectedPage, setSelectedPage }) {
  return (
    <AnchorLink
      className={
        selectedPage === page.toLowerCase().replace(/ /g, "")
          ? styles["active-link"]
          : styles.nav_link
      }
      href={`#${page.toLowerCase().replace(/ /g, "")}`}
      onClick={() => setSelectedPage(page.toLowerCase().replace(/ /g, ""))}
    >
      {page}
    </AnchorLink>
  );
}

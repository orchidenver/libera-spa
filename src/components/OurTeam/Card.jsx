/* eslint-disable react/prop-types */
import styles from "./OurTeam.module.css";
import linkImg from "../../assets/li-icon.svg";

export default function Card({
  photo,
  name,
  lastName,
  position,
  link,
  onClickCardHandler,
}) {
  return (
    <div className={styles.card} onClick={onClickCardHandler}>
      <img
        src={photo}
        alt={`photo of ${name} ${lastName}`}
        className={styles["card__img"]}
      />
      <h4 className={styles["card__title"]}>{name}</h4>
      <h4 className={styles["card__title"]}>{lastName}</h4>
      <p className={styles["card__text"]}>{position}</p>
      <a
        href={link}
        className={styles["card__link"]}
        target="_blank"
        rel="noreferrer"
      >
        <a href="#">
          <img src={linkImg} alt="linkedin" />
        </a>
      </a>
    </div>
  );
}

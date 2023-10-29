import { useNav } from "../../hooks/useNav";
import Card from "./Card";
import { TEAM } from "../../utils/data";
import styles from "./OurTeam.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function OurTeam() {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const ourTeamRef = useNav("our team");

  function onModalHandler(cardContent) {
    setToggleModal(true);
    setModalContent(cardContent);
  }

  return (
    <section id="ourteamSection" className={styles.ourteam} ref={ourTeamRef}>
      <div className={styles.container}>
        <h3 className={styles["team__header"]}>our team</h3>
        <p className={styles["team__description"]}>
          We gathered an international team of not only seasoned professionals,
          but people who are truly inspired to make a change
        </p>

        <div className={styles.team}>
          {TEAM.map((member) => (
            <Card
              key={member.lastName}
              photo={member.photo}
              name={member.name}
              lastName={member.lastName}
              position={member.position}
              link={member.link}
              onClickCardHandler={() => onModalHandler(member)}
            />
          ))}
        </div>
      </div>
      <Modal
        open={toggleModal}
        onClose={() => setToggleModal(false)}
        content={modalContent}
      />
    </section>
  );
}

import { useNav } from "../../hooks/useNav";
import Card from "./Card";
import { TEAM } from "../../utils/data";
import styles from "./OurTeam.module.css";
import { useState } from "react";
import Modal from "../Modal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
        <div className={styles["description-wrapper"]}>
          <p className={styles["team__description"]}>
            We gathered an international team of not only seasoned
            professionals, but people who are truly inspired to make a change
          </p>
        </div>

        <div className={styles.team}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1360: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {TEAM.map((member) => (
              <SwiperSlide
                className={styles["team__member"]}
                key={member.lastName}
              >
                <Card
                  photo={member.photo}
                  name={member.name}
                  lastName={member.lastName}
                  position={member.position}
                  link={member.link}
                  onClickCardHandler={() => onModalHandler(member)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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

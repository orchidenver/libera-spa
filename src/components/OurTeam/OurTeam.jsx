import Card from "./Card";
import { TEAM } from "../../utils/data";
import styles from "./OurTeam.module.css";

export default function OurTeam() {
  return (
    <section id="#ourteam" className={styles.ourteam}>
      <div className={styles.container}>
        <h3 className={styles["team__header"]}>our team</h3>
        <p className={styles["team__description"]}>
          We gathered an international team of not only seasoned professionals,
          but people who are truly inspired to make a change
        </p>

        <div className={styles.team}>
          {TEAM.map((member) => (
            <Card
              key={member.link}
              photo={member.photo}
              name={member.name}
              lastName={member.lastName}
              position={member.position}
              link={member.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

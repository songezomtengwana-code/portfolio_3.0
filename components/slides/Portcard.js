import Image from "next/image";
import styles from "../../styles/Portfolio.module.css";

const Portcard = ({ title, sub, text, link }) => {
  return (
    <div className={styles.container}>
      <section className={styles.ill}>
        <Image src="/public/project/scholarfy.png" height={436} width={212} />
      </section>
      <section className={styles.text}>
        <header className={styles.title}>
          <h1>{title}</h1>
          <p>{sub}</p>
        </header>
        <p>{text}</p>
        <button className={styles.btn}>
          <i className="bi bi-link-45deg" /> Visit Site
        </button>
      </section>
    </div>
  );
};

Portcard.defaultProps = {
  title: "scholar-fy",
  sub: "school based web app",
  text:
    "an web app designed for students for them to access thier educational needs , they can access textbooks , get recent exam papers , careerguide & a series of videos in youtube .",
};

export default Portcard;

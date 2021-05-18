import styles from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <section className={styles.landing}>
      <section className={styles.ad}>
        <div>
          <span>frontend developer</span>
          <h1>
            Design & development excellence at it <span>best</span> .
          </h1>
        </div>
      </section>
    </section>
  );
};

export default Landing;

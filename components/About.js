import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section className={styles.section}>
      <section className={styles.left}>
        <header className={styles.headPair}>
          <h1>Hey im Songezo</h1>
          <p>FrontEnd Developer</p>
        </header>
        <p className={styles.text}>
          I am a frontend developer based in the eastern cape in fort beaufort
          with a high level of fronted development knowledge . i strated design
          & develop in 2020 and have managed to learn and get familiar with some
          of the languges and know how to use them for development . i make use
          of javascript frameworks such as react & angular for developing and i
          also do design & prototyping in figma .
        </p>
      </section>
      <section className={styles.right} style={{ margin: "auto 30px" }}>
        <Image src="/favicon.svg" height="ss500px" width="100%" />
      </section>
    </section>
  );
};

export default About;

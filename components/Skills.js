import React, { Component } from "react";
import styles from "../styles/Skills.module.css";
import Card from "./Skillcard";
import App from "./slides/Application";
import AwesomeSlider from "react-awesome-slider";

const Skills = () => {
  return (
    <section className={styles.section}>
      <header className={styles.head}>
        <h1>Skillset</h1>
      </header>
      <AwesomeSlider>
        <div>
          <Card />
        </div>
        <div>
          <App />
        </div>
      </AwesomeSlider>
    </section>
  );
};

export default Skills;

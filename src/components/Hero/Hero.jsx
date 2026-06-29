import styles from "./Hero.module.css";
import { personalInfo } from "../../data/portfolioData";
import { contact } from "../../data/contact";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.location}>📍 {personalInfo.location}</p>

          <h1>{personalInfo.name}</h1>

          <h2>{personalInfo.title}</h2>

          <p className={styles.description}>{personalInfo.heroDescription}</p>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.primary}>
              View Projects
            </a>

            <a href={contact.resume} download className={styles.primary}>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

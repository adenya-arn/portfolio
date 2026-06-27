import styles from "./About.module.css";
import { personalInfo, highlights } from "../../data/portfolioData";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>

        <p className="section-subtitle">
          Get to know who I am, what I enjoy building, and the journey that has
          shaped me as a software developer.
        </p>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>{personalInfo.about}</p>
          </div>

          <div className={styles.cards}>
            {highlights.map((card) => (
              <article key={card.title} className={styles.card}>
                <span>{card.icon}</span>

                <h3>{card.title}</h3>

                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

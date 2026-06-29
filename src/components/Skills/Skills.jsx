import styles from "./Skills.module.css";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className="section-title">
          Technical <span className="highlight">Skills</span>
        </h2>

        <p className="section-subtitle">
          Technologies and tools I use to build modern, scalable web
          applications.
        </p>

        <div className={styles.grid}>
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article key={skill.title} className={styles.card}>
                <h3>
                  <Icon /> {skill.title}
                </h3>

                <div className={styles.badges}>
                  {skill.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;

import styles from "./Skills.module.css";
import { skills } from "../../data/skills";

function Skills() {
  {
    skills.map((skill) => {
      const Icon = skill.icon;

      return (
        <article key={skill.title} className={styles.card}>
          <Icon className={styles.icon} />

          <h3>{skill.title}</h3>

          <div className={styles.badges}>
            {skill.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </article>
      );
    });
  }
}

export default Skills;

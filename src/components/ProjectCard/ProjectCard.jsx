import styles from "./ProjectCard.module.css";
import Button from "../Button/Button";

function ProjectCard({ project, reverse }) {
  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.image}>
        <div className={styles.placeholder}>Project Screenshot</div>
      </div>

      <div className={styles.content}>
        <span className={styles.tag}>{project.tag}</span>

        <h3>{project.title}</h3>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.tech}>
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <h4>What I Learned</h4>

        <ul>
          {project.learnings.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>

        <div className={styles.buttons}>
          <Button href={project.live}>Live Demo</Button>

          <Button href={project.github} variant="secondary">
            GitHub
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

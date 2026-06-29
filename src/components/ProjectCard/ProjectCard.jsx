import styles from "./ProjectCard.module.css";
import Button from "../Button/Button";

function ProjectCard({ project, reverse }) {
  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.image}>
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className={styles.projectImage}
        />
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
          {project.live.length > 0 &&
            project.live.map((demo) => (
              <Button key={demo.label} href={demo.url}>
                {demo.label}
              </Button>
            ))}

          {project.github.map((repo) => (
            <Button key={repo.label} href={repo.url} variant="secondary">
              {repo.label === "Repository" ? "GitHub" : `GitHub ${repo.label}`}
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

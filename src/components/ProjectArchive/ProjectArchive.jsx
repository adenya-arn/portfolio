import styles from "./ProjectArchive.module.css";
import { archiveProjects } from "../../data/archiveProjects";
import { FaGithub } from "react-icons/fa";

function ProjectArchive() {
  return (
    <section id="archive" className={styles.archive}>
      <div className="container">
        <h2 className="section-title">
          Project <span className="highlight">Archive</span>
        </h2>

        <p className="section-subtitle">
          A collection of projects completed throughout my learning journey.
          Each one helped me develop new skills and strengthen my understanding
          of software development.
        </p>

        {archiveProjects.map((group) => (
          <div key={group.category} className={styles.category}>
            <h3>{group.category}</h3>

            <div className={styles.projects}>
              {group.projects.map((project) => (
                <a
                  key={project.name}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.project}
                >
                  <span>{project.name}</span>

                  <FaGithub />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectArchive;

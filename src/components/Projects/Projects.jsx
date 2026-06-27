import styles from "./Projects.module.css";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="highlight">Projects</span>
        </h2>

        <p className="section-subtitle">
          Some of my favorite projects that demonstrate my experience building
          full-stack applications.
        </p>

        <div className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

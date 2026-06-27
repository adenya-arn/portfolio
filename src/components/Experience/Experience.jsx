import styles from "./Experience.module.css";
import { timeline } from "../../data/timeline";

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">
          Experience & <span className="highlight">Journey</span>
        </h2>

        <p className="section-subtitle">
          My path into software development and the milestones that have shaped
          my growth.
        </p>

        <div className={styles.timeline}>
          {timeline.map((item) => (
            <div key={item.year} className={styles.item}>
              <div className={styles.dot}></div>

              <div className={styles.content}>
                <span>{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

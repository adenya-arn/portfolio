import styles from "./Journey.module.css";
import { journey } from "../../data/journey";

function Journey() {
  return (
    <section id="journey">
      <div className="container">
        <h2 className="section-title">
          Learning <span className="highlight">Journey</span>
        </h2>

        <p className="section-subtitle">
          Every project has taught me something new. Here's a snapshot of the
          technologies and concepts I've explored so far.
        </p>

        <div className={styles.grid}>
          {journey.map((item) => (
            <div key={item} className={styles.card}>
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;

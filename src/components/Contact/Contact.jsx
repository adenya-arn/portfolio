import styles from "./Contact.module.css";
import { contact } from "../../data/contact";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.heading}>{contact.heading}</h2>

        <p className={styles.description}>{contact.description}</p>

        <div className={styles.contactGrid}>
          <a href={`mailto:${contact.email}`} className={styles.card}>
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>{contact.email}</p>
            </div>
          </a>

          <a href={`tel:${contact.phone}`} className={styles.card}>
            <FaPhone />
            <div>
              <h3>Call</h3>
              <p>{contact.phone}</p>
            </div>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <FaGithub />
            <div>
              <h3>GitHub</h3>
              <p>View my repositories</p>
            </div>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <FaLinkedin />
            <div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </div>
          </a>

          <a href={contact.resume} download className={styles.card}>
            <FaFileDownload />
            <div>
              <h3>Download CV</h3>
              <p>PDF Resume</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import styles from "./Contact.module.css";
import { contact } from "../../data/contact";
import Button from "../Button/Button";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.heading}>{contact.heading}</h2>

        <p className={styles.description}>{contact.description}</p>

        <Button href={`mailto:${contact.email}`}>Email Me</Button>

        <div className={styles.links}>
          <a href={contact.github}>GitHub</a>

          <a href={contact.linkedin}>LinkedIn</a>

          <a href={contact.resume}>Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Arnold Adenya</p>

        <a href="#home">Back to Top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;

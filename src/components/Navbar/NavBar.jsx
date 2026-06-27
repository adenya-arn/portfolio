import styles from "./Navbar.module.css";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Archive", href: "#archive" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="#home" className={styles.logo}>
          Arnold<span>.</span>
        </a>

        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <a href="/CURRICULUM_VITAE.pdf" className={styles.resume}>
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;

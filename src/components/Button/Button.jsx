import styles from "./Button.module.css";

function Button({ children, href, variant = "primary" }) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </a>
  );
}

export default Button;

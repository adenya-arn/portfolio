import styles from "./Button.module.css";

function Button({
  children,
  href = "#",
  variant = "primary",
  download = false,
  target,
  rel,
}) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]}`}
      download={download}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
    >
      {children}
    </a>
  );
}

export default Button;

import styles from "../css/Footer.module.css";
export default function Footer() {
  return (
    <footer
      style={{fontWeight: "bold" }}
      className={styles.footer}
    >
      <a style={{color:"black",textDecoration:"none"}} target="_blank" href={"https://mauryasoni.vercel.app/"}>
        © MAURYA SONI
      </a>
    </footer>
  );
}

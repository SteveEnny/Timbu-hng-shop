import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo({ footer }) {
  return (
    <Link to="/" className={styles.img_link}>
      {footer === "footer" ? (
        <img
          src="/footerlogo.png"
          alt="WorldWise logo"
          className={styles.logo}
        />
      ) : (
        <img src="/logo.jpg" alt="WorldWise logo" className={styles.logo} />
      )}
    </Link>
  );
}

export default Logo;

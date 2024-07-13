import { Link } from "react-router-dom";
import Logo from "../component/Logo";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Link to="/" className={styles.logo}>
          <img
            src="/footerlogo.png"
            alt="WorldWise logo"
            className={styles.logo}
          />
        </Link>
        <p>
          Top off your style with our caps. Quality, comfort, and fashion
          combined.
        </p>
      </div>
      <div>
        <h5>Social</h5>
        <ul>
          <li>
            <Link>Instagram</Link>
          </li>
          <li>
            <Link>Twitter</Link>
          </li>
          <li>
            <Link>Tiktok</Link>
          </li>
          <li>
            <Link>Facebook</Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>Customer Care</h5>
        <ul>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Shipping</Link>
          </li>
          <li>
            <Link>Order Status</Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>Legal</h5>
        <ul>
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <Link>Terms of Service</Link>
          </li>
          <li>
            <Link>Return Policy</Link>
          </li>
          <li>
            <Link>Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

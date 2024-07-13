import Logo from "../component/Logo";
import Menu from "../component/Menu";
import Search from "../component/Search";
import styles from "./Header.module.css";

function Header({ totalCart }) {
  return (
    <div className={styles.header}>
      <Logo />
      <Search />
      <Menu totalCart={totalCart} />
    </div>
  );
}

export default Header;

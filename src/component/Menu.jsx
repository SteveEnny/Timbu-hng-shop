import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { useSelector } from "react-redux";
// import store from "../store";
function Menu({ totalCart }) {
  const { totalCartItem } = useSelector((store) => store.cart);
  return (
    <div className={styles.menu}>
      <Link className={styles.cart} to="/cart">
        <img src="/shopping-cart.svg" alt="" />
        <span>{totalCartItem}</span>
      </Link>
      <img src="/account.png" alt="" />
      <img src="/menu.png" alt="" />
    </div>
  );
}

export default Menu;

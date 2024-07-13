import { useSelector } from "react-redux";
import styles from "./CartSummary.module.css";

function CartSummary() {
  const { subTotalPrice, delivery, totalPrice } = useSelector(
    (store) => store.cart
  );
  return (
    <div className={styles.order}>
      <h3>Order Total</h3>
      <div className={styles.subTotal}>
        <span>Sub-Total</span>
        <span>
          {/* <span>45</span> */}$ <span>{subTotalPrice}</span>
        </span>
      </div>
      <div className={styles.subTotal}>
        <span>Delivery</span>
        <span>
          {/* <span>45</span> */}$ <span>{delivery}</span>
        </span>
      </div>
      <div className={styles.total}>
        <span className={styles.subTotal}>Total</span>
        <span>
          <span className={styles.totalNum}>${totalPrice}</span>
        </span>
      </div>
    </div>
  );
}

export default CartSummary;

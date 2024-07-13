import { useSelector } from "react-redux";
import styles from "./OrderItem.module.css";
import { useNavigate } from "react-router-dom";
function OrderItem() {
  const { cart, totalPrice, delivery } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  console.log(cart, totalPrice);
  return (
    <div className={styles.OrderItems}>
      <h3>Your Order(s)</h3>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.id} className={styles.OrderItem}>
            <p>
              <span className={styles.itemQuantity}>
                {cartItem.quantity} &times;
              </span>
              <span> {cartItem.name}</span>
            </p>
            <span>
              {cartItem.current_price[0]
                ? cartItem.current_price[0].NGN[0]
                : cartItem.current_price}
            </span>
          </li>
        ))}
      </ul>
      <div className={styles.itemPrice}>
        <span>total price: N{totalPrice}</span>
        <span className={styles.totalPrice}>
          To pay on delivery: N{totalPrice}
        </span>
      </div>
      <div className={styles.goToCart}>
        <button onClick={() => navigate("/cart")}>Back to home page</button>
      </div>
    </div>
  );
}

export default OrderItem;

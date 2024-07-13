import { useSelector } from "react-redux";
import styles from "./CheckoutForm.module.css";
import CartSummary from "../component/CartSummary";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  // cart: [],
  // totalCartItem: 0,
  // subTotalPrice: 0,
  // totalPrice: 0,
  const navigate = useNavigate();

  const { delivery, subTotalPrice, totalPrice } = useSelector(
    (store) => store.cart
  );

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/order");

    console.log("order");
  }
  return (
    <div>
      <h2 className={styles.heading}>Checkout</h2>
      <div className={styles.checkout}>
        <div className={styles.forms}>
          <div action="#" className={styles.form}>
            <h3>Delivery</h3>
            <div className={styles.formSelect}>
              <select id="country" name="country" placeholder="Country">
                <option value="">country</option>
                <option value="AF">Afghanistan</option>
                <option value="AX">Åland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="NG">Nigeria</option>
                <option value="US">United States</option>
              </select>
              <span>County/Region</span>
            </div>
            <div className={styles.formInput}>
              <input
                type="text"
                name="First name"
                placeholder="First name"
                id=""
              />
              <input
                type="text"
                name="last name"
                placeholder="Last name"
                id=""
              />
            </div>
            <input type="address" name="" placeholder="Address" />
            <div className={styles.formInput}>
              <input type="text" placeholder="City" id="" />
              <input type="text" placeholder="State" id="" />
              <input type="text" name="Zip" placeholder="ZIP code" id="" />
            </div>
            <div className={styles.phoneInput}>
              <span>
                <img src="/phone.png" alt="phone" className={styles.phoneImg} />
              </span>
              <input type="number" name="" placeholder="08142763474" />
              <span className={styles.phonePlaceholder}>
                Phone (to track your order)
              </span>
            </div>
          </div>
          <div className={styles.orderItemMobile}>
            <CartSummary />
          </div>
          <div action="#" className={styles.form}>
            <h3>Card Details</h3>
            <input type="text" name="card" placeholder="Card Number" />

            <div className={styles.formInput}>
              <input type="text" name="exp date" placeholder="MM/YY" id="" />
              <input type="text" name="card cvv" placeholder="CVV" id="" />
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              className={styles.checkoutBtn}
            >
              Pay now
            </button>
          </div>
        </div>
        <div className={styles.orderItem}>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;

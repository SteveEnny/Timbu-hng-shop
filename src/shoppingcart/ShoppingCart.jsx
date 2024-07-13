// import styles from "./Footer.module.css";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ShoppingCart.module.css";
import ShoppingCartList from "./ShoppingCartList";
import { Link } from "react-router-dom";
import { addDeliveryPrice, clearCart } from "../features/cartSlice";

function ShoppingCart() {
  const {
    cart: cartItems,
    totalPrice,
    subTotalPrice,
    totalCartItem,
  } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.shoppngCart}>
        <h3 className={styles.heading}>Shopping Cart</h3>
        <button
          className={styles.clearCart}
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
      <div className={styles.cart}>
        {totalCartItem ? (
          <ul className={styles.cartItems}>
            {cartItems.map((item) => {
              return <ShoppingCartList key={item.unique_id} item={item} />;
            })}
          </ul>
        ) : (
          <div className={styles.cartItem}>Add Item to cart</div>
        )}

        <div className={styles.checkout}>
          <h3>Cart Summary</h3>
          <div className={styles.subTotal}>
            <span>Sub-Total</span>
            <span>
              $ <span>{subTotalPrice}</span>
            </span>
          </div>
          <div className={styles.total}>
            <span>Total</span>
            <span>
              $ <span>{totalPrice}</span>
            </span>
          </div>
          <Link to="/checkout" className={styles.checkoutLink}>
            <button
              onClick={() => dispatch(addDeliveryPrice(5))}
              // disabled={totalCartItem === 0}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

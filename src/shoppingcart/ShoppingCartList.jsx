import { useDispatch, useSelector } from "react-redux";
import styles from "./ShoppingCartList.module.css";
import { decItem, incItem, removeItem } from "../features/cartSlice";

function ShoppingCartList({ item }) {
  const { name, photos, unique_id, current_price: price, quantity } = item;
  console.log(quantity);
  const { totalCartItem } = useSelector((store) => store.cart);
  // console.log(cart);
  const dispatch = useDispatch();
  if (totalCartItem === 0) {
    console.log(totalCartItem);
    return <div className={styles.cartItem}>Add Item to cart</div>;
  }
  return (
    <li className={styles.cartListItem}>
      <div className={styles.cartItem}>
        <div className={styles.cartImg}>
          <img src={`https://api.timbu.cloud/images/${photos[0].url}`} alt="" />
        </div>
        <div className={styles.cartDetail}>
          <div>
            <h4>{name}</h4>
            <span className={styles.cartAvalability}>In Stock</span>
            <span className={styles.ItemPrice}>
              ${price[0] ? price[0].NGN[0] : price}
            </span>
          </div>
          <div>
            <div className={styles.itemColor}>
              <span className={styles.itemInfo}>Color</span>
              <span></span>
            </div>
            <div className={styles.itemColor}>
              <span className={styles.itemInfo}>Size</span>: One Size fits all
              <span></span>
            </div>
          </div>
          <button
            className={styles.cartBtn}
            onClick={() => dispatch(removeItem({ id: unique_id, quantity }))}
          >
            Remove
          </button>
        </div>
        <div className={styles.cartAdd}>
          <div>
            <button
              className={styles.decItem}
              onClick={() => dispatch(decItem(unique_id))}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className={styles.incItem}
              onClick={() => {
                dispatch(incItem(unique_id));
              }}
            >
              +
            </button>
          </div>
          <div className={styles.itemAmount}>
            <span> N{price[0] ? price[0].NGN[0] : price}</span>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <button
          className={styles.cartBtnMobile}
          onClick={() =>
            dispatch(removeItem({ id: item.id, quantity: item.quantity }))
          }
        >
          Remove
        </button>
        <div className={styles.cartAddMobile}>
          <div>
            <button
              className={styles.decItem}
              onClick={() => dispatch(decItem(unique_id))}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className={styles.incItem}
              onClick={() => {
                dispatch(incItem(unique_id));
              }}
            >
              +
            </button>
          </div>
          <div className={styles.itemAmount}></div>
        </div>
      </div>
    </li>
  );
}

export default ShoppingCartList;

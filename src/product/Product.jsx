import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  addToCart,
  decItem,
  incItem,
  removeItem,
} from "../features/cartSlice";
function ProductItem() {
  const [product, setProduct] = useState([]);
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const params = useParams();
  const cartItem = cart.find((item) => item.id === product.id);
  //   console.log(params.id);
  console.log(cart);
  useEffect(
    function () {
      async function fetchProduct() {
        const res = await fetch(
          `https://api.timbu.cloud/products/${params.id}?organization_id=0cdfaafcf9064527a6a0e05d35b161df&Appid=XCEV4MQUBFHCJ46&Apikey=ca14a63f7af247b4a8ad77fa48b0d1e220240712220815901012&`
        );

        // console.log(res);
        const data = await res.json();
        setProduct({ ...data });
        console.log(data);
      }
      fetchProduct();
    },
    [params.id]
  );
  return (
    <div className={styles.productItem}>
      <div className={styles.cartListItem}>
        <div className={styles.cartItem}>
          <div className={styles.cartImg}>
            {/* <img src="/Flat cap.png" alt"" /> */}
            {product.photos ? (
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt="productImage"
              />
            ) : (
              <img src="" alt="produt" />
            )}
          </div>
          <div className={styles.cartDetail}>
            <div>
              <h4>{product.name}</h4>
              <span className={styles.cartAvalability}>In Stock</span>
              <span className={styles.ItemPrice}>${product.current_price}</span>
              {/* <span className={styles.ItemPrice}>$30000</span> */}
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
              onClick={() =>
                dispatch(
                  removeItem({
                    id: product.unique_id,
                    quantity: product.quantity,
                  })
                )
              }
            >
              Remove
            </button>
          </div>
          <div className={styles.cartAdd}>
            <div>
              <button
                disabled={!cartItem?.quantity}
                className={styles.decItem}
                onClick={() => dispatch(decItem(product.unique_id))}
              >
                -
              </button>
              <span>{cartItem ? cartItem.quantity : 0}</span>
              {/* <span>3</span> */}
              <button
                className={styles.incItem}
                onClick={() => {
                  if (!cartItem) {
                    dispatch(addCart(product));
                    console.log(cart);
                  } else {
                    dispatch(incItem(product.unique_id));
                  }
                }}
              >
                +
              </button>
            </div>
            <div className={styles.itemAmount}>
              {/* $<span>30000</span> */}$<span>{product.current_price}</span>
            </div>
          </div>
        </div>
        <div className={styles.mobile}>
          <button
            className={styles.cartBtnMobile}
            onClick={() =>
              dispatch(
                removeItem({
                  id: product.unique_id,
                  quantity: product.quantity,
                })
              )
            }
          >
            Remove
          </button>
          <div className={styles.cartAddMobile}>
            <div>
              <button
                className={styles.decItem}
                onClick={() => dispatch(decItem(product.unique_id))}
              >
                -
              </button>
              {/* <span>3</span> */}
              <span>{product.quantity}</span>
              <button
                className={styles.incItem}
                onClick={() => {
                  dispatch(incItem(product.unique_id));
                }}
              >
                +
              </button>
            </div>
            <div className={styles.itemAmount}></div>
          </div>
        </div>
      </div>
      <div className={styles.productDescription}>
        <div className={styles.description}>Product Description :</div>
        <div className={styles.details}>{product.description}</div>
      </div>
    </div>
  );
}

export default ProductItem;

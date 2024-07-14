import { useDispatch, useSelector } from "react-redux";
// import { productList } from "../../data/Product";
import styles from "./Products.module.css";
import { addToCart, removeItem } from "../features/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../component/Spinner";
// const products = productList;

function Product() {
  const [products, setProducts] = useState([]);
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fecthItem() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.timbu.cloud/products?organization_id=0cdfaafcf9064527a6a0e05d35b161df&reverse_sort=false&page=${pageNum}&size=12&Appid=XCEV4MQUBFHCJ46&Apikey=ca14a63f7af247b4a8ad77fa48b0d1e220240712220815901012&`
          );
          console.log(res);
          if (!res) throw new Error("fail to fetch ");
          const data = await res.json();
          setIsLoading(false);

          setProducts(data.items);
          console.log(data.items[0].photos[0].url);
        } catch (err) {
          alert(err.message);
        }
      }
      fecthItem();
    },
    [pageNum, setProducts, setIsLoading]
  );

  function handleAddItem(event, item) {
    event.preventDefault();

    const cartItem = cart.find(
      (cartItem) => cartItem.unique_id === item.unique_id
    );
    if (cartItem) {
      dispatch(
        removeItem({ unique_id: item.unique_id, quantity: cartItem.quantity })
      );
    } else {
      dispatch(addToCart(item));
    }
  }

  function handlePrev(pageNumu) {
    const currentPage = pageNum === 1 ? pageNum : pageNum - 1;
    setPageNum(currentPage);
  }
  function handleNext(pageNumu) {
    const currentPage = pageNum + 1;
    setPageNum(currentPage);
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.productPage}>
          <div className={styles.productList}>
            {products.map((item) => {
              return (
                <div className={styles.productItem} key={item.unique_id}>
                  <Link
                    className={styles.productItem}
                    key={item.unique_id}
                    to={`product/${item.id}`}
                  >
                    <div className={styles.productImg}>
                      {!item.photos[0] ? (
                        <img src="" alt="" />
                      ) : (
                        <img
                          src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className={styles.productDetails}>
                      <div className={styles.productName}>
                        <span>{item.name}</span>
                        <span className={styles.price}>
                          ${item.current_price[0].NGN[0]}
                        </span>
                      </div>
                      <button
                        className={styles.addProduct}
                        onClick={(event) => {
                          handleAddItem(event, item);
                        }}
                      >
                        {!cart.find(
                          (cartItem) => cartItem.unique_id === item.unique_id
                        ) ? (
                          <img src="/add-to-cart.svg" alt="#" />
                        ) : (
                          <img src="/inCart.svg" alt="#" />
                        )}
                      </button>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className={styles.pagination}>
            <button onClick={() => handlePrev(pageNum)}>Prev</button>
            <span>{pageNum}</span>
            <button onClick={() => handleNext(pageNum)}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;

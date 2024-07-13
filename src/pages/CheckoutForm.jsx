// import { useSelector } from "react-redux";
// import styles from "./CheckoutForm.module.css";
// import Order from "../component/CartSummary";
// import { Link, useNavigate } from "react-router-dom";

// function CheckoutForm() {
//   // cart: [],
//   // totalCartItem: 0,
//   // subTotalPrice: 0,
//   // totalPrice: 0,
//   const navigate = useNavigate();
//   const { delivery, subTotalPrice, totalPrice } = useSelector(
//     (store) => store.cart
//   );

//   function handleSubmit(e) {
//     e.preventDefault();
//     navigate("/order");

//     console.log("order");
//   }
//   return (
//     <div>
//       <h2>Checkout</h2>
//       <div className={styles.checkout}>
//         <div className={styles.forms}>
//           <div action="#" className={styles.form}>
//             <h3>Delivery</h3>
//             <div className={styles.formSelect}>
//               <select id="country" name="country" placeholder="Country">
//                 <option value="">country</option>
//                 <option value="AF">Afghanistan</option>
//                 <option value="AX">Åland Islands</option>
//                 <option value="AL">Albania</option>
//                 <option value="DZ">Algeria</option>
//                 <option value="NG">Nigeria</option>
//                 <option value="US">United States</option>
//               </select>
//               <span>County/Region</span>
//             </div>
//             <div className={styles.formInput}>
//               <input
//                 type="text"
//                 name="First name"
//                 placeholder="First name"
//                 id=""
//               />
//               <input
//                 type="text"
//                 name="First name"
//                 placeholder="Last name"
//                 id=""
//               />
//             </div>
//             <input type="address" name="" placeholder="Address" />
//             <div className={styles.formInput}>
//               <input type="text" placeholder="City" id="" />
//               <input type="text" placeholder="State" id="" />
//               <input
//                 type="text"
//                 name="First name"
//                 placeholder="ZIP code"
//                 id=""
//               />
//             </div>
//             <div className={styles.phoneInput}>
//               <span>
//                 <img src="/phone.png" alt="phone" className={styles.phoneImg} />
//               </span>
//               <input type="number" name="" placeholder="9123456789" />
//               <span className={styles.phonePlaceholder}>
//                 Phone (to track your order)
//               </span>
//             </div>
//           </div>
//           <div className={styles.orderItemMobile}>
//             <Order />
//           </div>
//           <div action="#" className={styles.form}>
//             <h3>Card Details</h3>
//             <input type="address" name="" placeholder="Card Number" />

//             <div className={styles.formInput}>
//               <input type="text" name="exp date" placeholder="MM/YY" id="" />
//               <input type="text" name="card cvv" placeholder="CVV" id="" />
//             </div>

//             <button
//               onClick={(e) => handleSubmit(e)}
//               className={styles.checkoutBtn}
//             >
//               Pay now
//             </button>
//           </div>
//         </div>
//         <div className={styles.orderItem}>
//           <Order />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CheckoutForm;

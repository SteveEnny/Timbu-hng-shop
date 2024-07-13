import Footer from "../ui/Footer";
import Header from "../ui/Header";

import styles from "./AppLayout.module.css";
import { Outlet } from "react-router-dom";

function AppLayout({ productList, dispatch }) {
  // // console.log(product);
  // const totalCart = productList.cart.length;
  return (
    <div className={styles.appLayout}>
      <div className={styles.container}>
        {/* <Header totalCart={cartItems.length} /> */}
        <Header />
        <Outlet />
        {/* <div className={styles.childContainer}>/
      </div> */}
      </div>
      <Footer />
    </div>
  );

  // return (
  //   <PageContainer>
  //     <Product productList={productList} dispatch={dispatch} />
  //   </PageContainer>
  // );
}

export default AppLayout;

// @media screen and (max-width: 600px) {
//   .search {
//     order: 3;
//     flex: 1 0 100%;
//     align-self: center;
//     width: 350px;
//     margin: 0 auto;
//     grid-row: 2 / span 3;
//     grid-column: 1 / span 2;
//     /* margin-left: 20%; */
//     /* j */
//   }

//   .search__input {
//     width: 350px;
//     margin: 0;

//     max-width: 100%;

//     /* padding-right: 6rem; */
//   }

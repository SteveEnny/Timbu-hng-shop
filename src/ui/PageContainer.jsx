import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./PageContainer.module.css";

function PageContainer({ children }) {
  const cartItems = useSelector((store) => store.cart.cart);

  return (
    <div className={styles.container}>
      <Header totalCart={cartItems.length} />
      <div className={styles.childContainer}>{children}</div>
      <Footer />
    </div>
  );
}

export default PageContainer;

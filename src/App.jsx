import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CheckoutForm from "./";
import ShoppingCart from "./shoppingcart/ShoppingCart";
import Products from "./product/Products";
import AppLayout from "./pages/AppLayout";
import Product from "./product/Product";
import CheckoutForm from "./checkout/CheckoutForm";
import OrderItem from "./orders/OrderItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Products />} />
          <Route path="product" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/order" element={<OrderItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

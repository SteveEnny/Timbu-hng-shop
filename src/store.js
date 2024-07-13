// import { combineReducers, createStore } from "redux";
// import { productList } from "../data/Product";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

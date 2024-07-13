import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalCartItem: 0,
  subTotalPrice: 0,
  totalPrice: 0,
  delivery: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      // state.cart.quantity = 1;
      const cartItem = { ...action.payload, quantity: 1 };
      console.log(cartItem);
      state.cart.push(cartItem);
      state.totalCartItem = state.totalCartItem + 1;
      if (action.payload.current_price[0]) {
        state.subTotalPrice += action.payload.current_price[0].NGN[0];
        state.totalPrice += action.payload.current_price[0].NGN[0];
      } else {
        state.subTotalPrice += action.payload.current_price;
        state.totalPrice += action.payload.current_price;
      }
    },
    addCart(state, action) {
      console.log(action.payload);
      // state.cart.quantity = 1;
      const cartItem = { ...action.payload, quantity: 1 };
      console.log(cartItem);
      state.cart.push(cartItem);
      state.totalCartItem = state.totalCartItem + 1;

      state.subTotalPrice += action.payload.current_price;
      state.totalPrice += action.payload.current_price;
    },
    removeItem(state, action) {
      console.log(state.cart);
      console.log(action.payload);
      console.log(typeof action.payload.quantity);
      state.cart = state.cart.filter(
        (itemId) => itemId.unique_id !== action.payload.unique_id
      );
      state.totalCartItem -= action.payload.quantity;
      state.subTotalPrice -= state.subTotalPrice * action.payload.quantity;
      state.totalPrice -= state.totalPrice * action.payload.quantity;
    },
    incItem(state, action) {
      console.log(state.cart);
      const item = state.cart.find((item) => item.unique_id === action.payload);
      console.log(item);
      item.quantity++;
      state.totalCartItem = state.totalCartItem + 1;
      // state.subTotalPrice += item.current_price[0].NGN[0];
      // state.totalPrice += item.current_price[0].NGN[0];
      if (item.current_price[0]) {
        state.subTotalPrice += item.current_price[0].NGN[0];
        state.totalPrice += item.current_price[0].NGN[0];
        // state.subTotalPrice += action.payload.current_price[0].NGN[0];
        // state.totalPrice += action.payload.current_price[0].NGN[0];
      } else {
        state.subTotalPrice += item.current_price;
        state.totalPrice += item.current_price;
        // state.subTotalPrice += action.payload.current_price;
        // state.totalPrice += action.payload.current_price;
      }
      //   item.totalPrice = item.quantity * item.unitPrice;
    },
    decItem(state, action) {
      console.log("decinn");
      const item = state.cart.find((item) => item.unique_id === action.payload);
      // state.totalPrice -= item.current_price[0].NGN[0];
      // state.subTotalPrice -= item.current_price[0].NGN[0];
      if (item.current_price[0]) {
        state.subTotalPrice -= item.current_price[0].NGN[0];
        state.totalPrice -= item.current_price[0].NGN[0];
        // state.subTotalPrice += action.payload.current_price[0].NGN[0];
        // state.totalPrice += action.payload.current_price[0].NGN[0];
      } else {
        state.subTotalPrice -= item.current_price;
        state.totalPrice -= item.current_price;
        // state.subTotalPrice += action.payload.current_price;
        // state.totalPrice += action.payload.current_price;
      }
      state.totalCartItem = state.totalCartItem - 1;

      if (item.quantity === 1) {
        state.cart = state.cart.filter(
          (itemId) => itemId.id !== action.payload
        );
      }

      item.quantity--;
    },

    addDeliveryPrice(state, action) {
      console.log(action.payload);
      state.totalPrice += action.payload;
      state.delivery += action.payload;
    },
    clearCart(state, action) {
      state.cart = [];
      state.totalCartItem = 0;
      state.subTotalPrice = 0;
      state.totalPrice = 0;
      state.delivery = 0;
    },
  },
});
//
// console.log(cartSlice);

export const {
  addToCart,
  incItem,
  decItem,
  removeItem,
  clearCart,
  addDeliveryPrice,
  addCart,
} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    deleteItem(state, action) {
      // payload = pizzaId
      // state.cart.splice(action.payload, 1);
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const currCart = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      currCart.quantity = currCart.quantity + 1;
      currCart.totalPrice = currCart.unitPrice * currCart.quantity;
    },
    decreaseItemQuantity(state, action) {
      const currCart = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      currCart.quantity = currCart.quantity - 1;
      currCart.totalPrice = currCart.unitPrice * currCart.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

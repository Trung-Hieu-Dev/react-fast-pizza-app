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
      currCart.quantity--;
      currCart.totalPrice = currCart.unitPrice * currCart.quantity;

      if (currCart.quantity === 0)
        return cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);

export const getCart = (state) => {
  return state.cart.cart;
};

export const getCurrentQuantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [], // array of cart items
  amount: 0, // total quantity of cart items
  total: 0, // total price of cart items
  tax: 0, // total tax of cart items
  shippingFees: 0, // total shipping of cart items
  orderTotal: 0, // total grand total of cart items
};
const getCartLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((item) => item.id === product.id);
      if (item) {
        item.amount += product.amount;
        item.itemTotal = item.amount * item.price; // total price
      } else {
        state.cartItems.push({
          ...product,
          itemTotal: product.amount * product.price,
        });
      }
      state.amount += product.amount; // total quantity
      state.total += product.amount * product.price; // total price
      cartSlice.caseReducers.calculateTotals(state);
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success(`${product.name} added to cart`, { autoClose: 1000 });
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.amount -= item.amount;
        state.total -= item.amount * item.price;
        cartSlice.caseReducers.calculateTotals(state);
      }
    },

    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.amount = amount;
        item.itemTotal = item.amount * item.price; // total price

        state.amount = state.cartItems.reduce(
          (total, item) => total + item.amount,
          0
        ); // total quantity
        state.total = state.cartItems.reduce(
          (total, item) => total + item.amount * item.price,
          0
        ); // total price
        cartSlice.caseReducers.calculateTotals(state);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
      state.tax = 0;
      state.shippingFees = 0;
      state.orderTotal = 0;
      localStorage.removeItem("cart");
    },
    calculateTotals: (state) => {
      state.tax = state.total * 0.1; // total tax
      state.shippingFees = state.total > 2000 ? 0 : 50; // total shipping
      state.total === 0 ? (state.shippingFees = 0) : state.shippingFees;
      state.orderTotal = state.total + state.tax + state.shippingFees; // total grand total
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export const { addToCart, removeItem, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

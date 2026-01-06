import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishItems: [],
  amount: 0,
};
const getWishListFromLocal = () => {
  return JSON.parse(localStorage.getItem("wishList")) || initialState;
};

const wishSlice = createSlice({
  name: "wishList",
  initialState: getWishListFromLocal(),
  reducers: {
    toggleWish: (state, action) => {
      const { product } = action.payload;
      const item = state.wishItems.find((item) => item.id === product.id);
      if (item) {
        state.wishItems = state.wishItems.filter(
          (item) => item.id !== product.id
        );

        state.amount -= 1;
        toast.success(`${product.name} removed from wishlist`, {
          autoClose: 1000,
        });
      } else {
        state.wishItems.push({ ...product, wish: true });
        state.amount += 1;
        toast.success(`${product.name} added to wishlist`, { autoClose: 1000 });
      }
      localStorage.setItem("wishList", JSON.stringify(state));
    },
  },
});

export const { toggleWish } = wishSlice.actions;
export default wishSlice.reducer;

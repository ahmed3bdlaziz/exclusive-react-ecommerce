import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/CartSlice'
import wishReducer from './features/wish/WishSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
  },
})

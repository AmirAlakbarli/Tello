import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

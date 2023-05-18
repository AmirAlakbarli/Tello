import { createSlice } from "@reduxjs/toolkit";
import {
  getCreateCart,
  getUserCartAsync,
  getAddToCartAsync,
} from "../actions/cart";

const initialState = {
  loading: false,
  error: null,
  cart: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [getCreateCart.pending]: (state) => {
      state.loading = true;
    },
    [getCreateCart.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getCreateCart.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cart = payload;
    },
    [getUserCartAsync.pending]: (state) => {
      state.loading = true;
    },
    [getUserCartAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getUserCartAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cart = payload;
    },
    [getAddToCartAsync.pending]: (state) => {
      state.loading = true;
    },
    [getAddToCartAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getAddToCartAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cart = payload;
    },
  },
});

export default cartReducer.reducer;

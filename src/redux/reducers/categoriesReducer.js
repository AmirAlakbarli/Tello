import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesAsync } from "../actions/categories";

const initialState = {
  loading: false,
  error: null,
  categories: [],
};

const categoriesReducer = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [getCategoriesAsync.pending]: (state) => {
      state.loading = true;
    },
    [getCategoriesAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getCategoriesAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
    },
  },
});

export default categoriesReducer.reducer;

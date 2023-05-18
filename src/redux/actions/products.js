import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/https";

export const getProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async (slug) => {
    try {
      const result = await api.getProducts(slug);

      return result.data.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
    }
  }
);

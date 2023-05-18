import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/https";
const { REACT_APP_CHEC_PUBLIC_KEY } = process.env;

export const getCreateCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const result = await api.createCart();
    localStorage.setItem("cartId", result.data.id);
    return result.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
  }
});

export const getUserCartAsync = createAsyncThunk(
  "cart/fetchCart",
  async (id) => {
    try {
      const result = await api.getUserCart(id);
      return result.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
    }
  }
);

export const getAddToCartAsync = createAsyncThunk('cart/fetchCart', async (data) => {
  const obj = {}

  obj[data.variant_color_id] = data.activeColor.id;
  obj[data.variant_size_id] = data.activeSize.id;

  const body = {
      "id": data.product_id,
      "quantity": data.count,
      "options": obj
  }

  try {
      const result = await fetch(`https://api.chec.io/v1/carts/${data.cart_id}`, {
          method: "POST",
          headers: {
              "X-Authorization": REACT_APP_CHEC_PUBLIC_KEY,
              "Accept": "application/json",
              "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
      })

      const response = await result.json();
      return response.cart

  } catch (error) {
      if (!error.response) {
          throw error
      }
  }
})




export const updateCart = createAsyncThunk('cart/fetchCart', async (data) => {
  const body = {
      "quantity": data.count,
  }
  try {
      const result = await fetch(`https://api.chec.io/v1/carts/${data.cart_id}/items/${data.line_item_id}`, {
          method: "PUT",
          headers: {
              "X-Authorization": REACT_APP_CHEC_PUBLIC_KEY,
              "Accept": "application/json",
              "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
      })

      const response = await result.json();
      return response.cart

  } catch (error) {
      if (!error.response) {
          throw error
      }
  }
})

export const deleteCartItem = createAsyncThunk('cart/fetchCart', async (data) => {
  try {
      const result = await fetch(`https://api.chec.io/v1/carts/${data.cart_id}/items/${data.line_item_id}`, {
          method: "DELETE",
          headers: {
              "X-Authorization": REACT_APP_CHEC_PUBLIC_KEY,
              "Accept": "application/json",
              "Content-Type": "application/json",
          },
      })

      const response = await result.json();
      return response.cart

  } catch (error) {
      if (!error.response) {
          throw error
      }
  }
})
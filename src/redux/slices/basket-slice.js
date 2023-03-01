import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

const getBasketProduct = createAsyncThunk(
  "orders/getOrderPrdoducts",
  async () => {
    try {
      const response = axiosInstance.get("userBasket");

      return (await response).data;
    } catch (error) {
      throw new Error();
    }
  }
);

const initialState = {
  data: [],
};

const basketProducts = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBasketProduct.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const ActionBasket = basketProducts.actions;
export { basketProducts, getBasketProduct };

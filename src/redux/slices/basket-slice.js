import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

const postProductToBasket = createAsyncThunk(
  "basket/postProductToBasket",
  async (params, { dispatch }) => {
    try {
      const response = await axiosInstance.post(
        "userBasket",
        {},
        {
          params,
        }
      );

      const result = await response.data;

      dispatch(getBasketProduct());

      return result;
    } catch (error) {
      return error;
    }
  }
);

const getBasketProduct = createAsyncThunk(
  "basket/getOrderPrdoducts",
  async () => {
    try {
      const response = await axiosInstance.get("userBasket");

      return response;
    } catch (error) {
      return error;
    }
  }
);

const postProductToFavorite = createAsyncThunk(
  "basket/postProductToFavorite",
  async (data, { dispatch }) => {
    try {
      const response = await axiosInstance.post("userBasket/move", data);
      const result = await response.data;
      console.log(result);
      dispatch(getBasketProduct());

      return result;
    } catch (error) {
      return error;
    }
  }
);

const deleteProductBasket = createAsyncThunk(
  "basket/deleteProduct",
  async (data, { dispatch }) => {
    const response = await axiosInstance.delete("userBasket", { data });
    const result = await response.data;

    dispatch(getBasketProduct());

    return result;
  }
);

const initialState = {
  data: [],
  isLoading: false,
};

const basketProducts = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasketProduct.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.isLoading = false;
      })

      .addCase(getBasketProduct.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getBasketProduct.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const ActionBasket = basketProducts.actions;
export {
  basketProducts,
  postProductToBasket,
  getBasketProduct,
  postProductToFavorite,
  deleteProductBasket,
};

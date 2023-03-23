import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";
import { getProductDetailThunk } from "./product-details-slice";
import {
  fetchDiscountProduct,
  fetchNewProduct,
  fetchRecomendationProduct,
} from "./product-slice";

const getFavoriteProducts = createAsyncThunk(
  "favorite/getFavoriteProducts",
  async () => {
    try {
      const response = await axiosInstance.get("users");
      const data = await response.data;

      return data;
    } catch (error) {
      return error;
    }
  }
);

const postFavoriteProducts = createAsyncThunk(
  "favorite/postFavoriteProducts",
  async (params, { dispatch }) => {
    try {
      const response = await axiosInstance.post(
        "users",
        {},
        {
          params: {
            productId: params.productId,
          },
        }
      );

      const data = await response.data;

      dispatch(getFavoriteProducts());

      dispatch(
        getProductDetailThunk({
          product: params.productId,
          attribute:
            params.attribute === "characteristics"
              ? "Характеристики"
              : params.attribute === "description"
              ? "Описание"
              : "Отзывы",
        })
      );

      dispatch(fetchDiscountProduct(params.size.discount));
      dispatch(fetchNewProduct(params.size.news));
      dispatch(fetchRecomendationProduct(params.size.recomendation));

      return data;
    } catch (error) {
      return error;
    }
  }
);

const deleteFavoriteAllProducts = createAsyncThunk(
  "favorite,deleteFavoriteAllProducts",
  async (_, { dispatch }) => {
    try {
      const response = await axiosInstance.delete("users");
      const data = await response.data;

      dispatch(getFavoriteProducts());

      return data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  data: [],
  isLoading: false,
};

const favoriteProducts = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })

      .addCase(getFavoriteProducts.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getFavoriteProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const ActionFavorite = favoriteProducts.actions;
export {
  favoriteProducts,
  getFavoriteProducts,
  postFavoriteProducts,
  deleteFavoriteAllProducts,
};

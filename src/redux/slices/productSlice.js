import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

const initialState = {
  newProducts: [],
  recommendationProduct: [],
  discountsProducts: [],
  newStatus: null,
  disStatus: null,
  recStatus: null,
  newError: null,
  discountError: null,
  recomenError: null,
};

export const fetchDiscountProduct = createAsyncThunk(
  "productSlice/fetchDiscountProduct",
  async (size, { rejectWithValue }) => {
    try {
      const { data, status } = await axiosInstance.get(
        `products/discounts`,
        // products/discounts
        {
          params: {
            page: 1,
            size,
          },
        }
      );
      if (!status === 200) {
        throw new Error("Server orror");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNewProduct = createAsyncThunk(
  "productSlice/fetchProduct",
  async (size, { rejectWithValue }) => {
    try {
      const { data, status } = await axiosInstance.get(`products/newProducts`, {
        params: {
          page: 1,
          size,
        },
      });
      if (!status === 200) {
        throw new Error("Server error");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchRecomendationProduct = createAsyncThunk(
  "productSlice/fetchRecomendationProduct",
  async (size, { rejectWithValue }) => {
    try {
      const { data, status } = await axiosInstance.get(
        `products/recommendations`,
        {
          params: {
            page: 1,
            size,
          },
        }
      );
      if (!status === 200) {
        throw new Error("Server orror");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  extraReducers: {
    [fetchNewProduct.pending]: (state) => {
      state.newStatus = "loading";
      state.newError = null;
    },
    [fetchNewProduct.fulfilled]: (state, action) => {
      state.newStatus = "fulfilled";
      state.newProducts = action.payload;
    },
    [fetchNewProduct.rejected]: (state, action) => {
      state.newStatus = "rejected";
      state.newError = action.payload;
    },
    [fetchRecomendationProduct.pending]: (state) => {
      state.recStatus = "loading";
      state.recomenError = null;
    },
    [fetchRecomendationProduct.fulfilled]: (state, action) => {
      state.recStatus = "fulfilled";
      state.recommendationProduct = action.payload;
    },
    [fetchRecomendationProduct.rejected]: (state, action) => {
      state.recStatus = "rejected";
      state.recomenError = action.payload;
    },
    [fetchDiscountProduct.pending]: (state) => {
      state.disStatus = "loading";
      state.discountError = null;
    },
    [fetchDiscountProduct.fulfilled]: (state, action) => {
      state.disStatus = "fulfilled";
      state.discountsProducts = action.payload;
    },
    [fetchDiscountProduct.rejected]: (state, action) => {
      state.disStatus = "rejected";
      state.discountError = action.payload;
    },
  },
});
export const getAllProducts = productSlice.actions;
export { productSlice };

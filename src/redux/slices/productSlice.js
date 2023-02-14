import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SWAGGER_API } from "../../utils/constants/fetch";
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
  async (page, { rejectWithValue }) => {
    try {
      const { data, status } = await axios.get(
        `${SWAGGER_API}/api/products/discountsProducts?page=1&size=${page}`
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
  async (page, { rejectWithValue }) => {
    try {
      const { data, status } = await axios.get(
        `${SWAGGER_API}/api/products/newProducts?page=1&size=${page}`
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
export const fetchRecomendationProduct = createAsyncThunk(
  "productSlice/fetchRecomendationProduct",
  async (page, { rejectWithValue }) => {
    try {
      const { data, status } = await axios.get(
        `${SWAGGER_API}/api/products/recommendationsProducts?page=1&size=${page}`
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

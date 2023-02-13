import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SWAGGER_API } from "../../utils/constants/fetch";
const initialState = {
  newProducts: [],
  recommendationProduct: [],
  discountsProducts: [],
  status: null,
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
      state.status = "loading";
      state.newError = null;
    },
    [fetchNewProduct.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.newProducts = action.payload;
    },
    [fetchNewProduct.rejected]: (state, action) => {
      state.tatus = "rejected";
      state.newError = action.payload;
    },
    [fetchRecomendationProduct.pending]: (state) => {
      state.status = "loading";
      state.recomenError = null;
    },
    [fetchRecomendationProduct.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.recommendationProduct = action.payload;
    },
    [fetchRecomendationProduct.rejected]: (state, action) => {
      state.status = "rejected";
      state.recomenError = action.payload;
    },
    [fetchDiscountProduct.pending]: (state) => {
      state.status = "loading";
      state.discountError = null;
    },
    [fetchDiscountProduct.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.discountsProducts = action.payload;
    },
    [fetchDiscountProduct.rejected]: (state, action) => {
      state.status = "rejected";
      state.discountError = action.payload;
    },
  },
});
export const getAllProducts = productSlice.actions;
export { productSlice };

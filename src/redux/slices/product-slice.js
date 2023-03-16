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
      const { data, status } = await axiosInstance.get(`products/discounts`, {
        params: {
          page: 1,
          size,
        },
      });
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
  extraReducers: (builder) => {
    builder

      .addCase(fetchNewProduct.pending, (state) => {
        state.newStatus = "loading";
        state.newError = null;
      })

      .addCase(fetchNewProduct.fulfilled, (state, action) => {
        state.newStatus = "fulfilled";
        state.newProducts = action.payload;
      })

      .addCase(fetchNewProduct.rejected, (state, action) => {
        state.newStatus = "rejected";
        state.newError = action.payload;
      })

      .addCase(fetchRecomendationProduct.pending, (state) => {
        state.recStatus = "loading";
        state.recomenError = null;
      })

      .addCase(fetchRecomendationProduct.fulfilled, (state, action) => {
        state.recStatus = "fulfilled";
        state.recommendationProduct = action.payload;
      })

      .addCase(fetchRecomendationProduct.rejected, (state, action) => {
        state.recStatus = "rejected";
        state.recomenError = action.payload;
      })

      .addCase(fetchDiscountProduct.pending, (state) => {
        state.disStatus = "loading";
        state.discountError = null;
      })

      .addCase(fetchDiscountProduct.fulfilled, (state, action) => {
        state.disStatus = "fulfilled";
        state.discountsProducts = action.payload;
      })

      .addCase(fetchDiscountProduct.rejected, (state, action) => {
        state.disStatus = "rejected";
        state.discountError = action.payload;
      });
  },
});
export const getAllProducts = productSlice.actions;
export { productSlice };

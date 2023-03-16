import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const getProductDetailThunk = createAsyncThunk(
  "productDetail/getProductDetailThunk",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("products/product", {
        params: {
          id: data.product,
          attribute: data.attribute,
        },
      });

      return response.data;
    } catch (error) {
      if (rejectWithValue) {
        return error;
      }
      return error;
    }
  }
);

const initialState = {
  data: {},
  details: {},
  isLoading: false,
  images: [],
  count: 1,
  chooseItem: 0,
};

const productDetailsSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    addImages: (state, action) => {
      state.images = action.payload;
    },
    setChooseItem: (state, action) => {
      state.chooseItem = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    plusCount: (state) => {
      state.count++;
    },
    minusCount: (state) => {
      state.count--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetailThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProductDetailThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductDetailThunk.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const ActionProductDetails = productDetailsSlice.actions;

export default productDetailsSlice;

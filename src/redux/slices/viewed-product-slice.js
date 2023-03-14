import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const fetchViewedProductThunk = createAsyncThunk(
  "viewedProductSlice/fetchViewedProductThunk",
  async (size, { rejectWithValue }) => {
    try {
      const { data, status } = await axiosInstance.get(`products/viewed`);
      if (!status === 200) {
        throw new Error("Server orror");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: {
    viewedProducts: [],
  },
  errors: {
    viewedProductError: null,
    message: null,
  },
  isLoading: false,
};

const viewedProductSlice = createSlice({
  name: "viewedProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchViewedProductThunk.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.data.viewedProducts = action.payload;
          state.errors = null;
        } else {
          state.errors.viewedProductError =
            "Простите пожалуста, что то не так с данными или с серверам";
        }
        state.isLoading = false;
      })
      .addCase(fetchViewedProductThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchViewedProductThunk.rejected, (state, action) => {
        if (action.payload.message) {
          state.errors.message = action.payload.message;
        }
        state.isLoading = false;
      });
  },
});

export const actionViewedProductSlice = viewedProductSlice.actions;

export default viewedProductSlice;

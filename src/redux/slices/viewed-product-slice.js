import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const fetchViewedProductThunk = createAsyncThunk(
  "viewedProductSlice/fetchViewedProductThunk",
  async (size, { rejectWithValue }) => {
    try {
      const { data, status } = await axiosInstance.get(`products/viewed`, {
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

const initialState = {
  data: {},
};

const viewedProductSlice = createSlice({
  name: "viewedProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchViewedProductThunk.fulfilled, () => {})
      .addCase(fetchViewedProductThunk.pending, () => {})
      .addCase(fetchViewedProductThunk.rejected, () => {});
  },
});

export const actionViewedProductSlice = viewedProductSlice.actions;

export default viewedProductSlice;

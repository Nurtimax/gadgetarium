import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const fetchDataCatalog = createAsyncThunk(
  "catalogSlice/fetchDataCatalog",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`products/catalog`, {
        params,
      });
      if (!response.status === 200) {
        throw new Error("Server error");
      }
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  data: {
    products: [],
  },
  isLoading: false,
  errorMessage: null,
};

const catalogSlice = createSlice({
  name: "catalogSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataCatalog.fulfilled, (state, action) => {
      state.data.products = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(fetchDataCatalog.pending, (state) => {
      state.errorMessage = false;
      state.isLoading = true;
    });
    builder.addCase(fetchDataCatalog.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    });
  },
});

export const catalogSliceAction = catalogSlice.actions;
export default catalogSlice;

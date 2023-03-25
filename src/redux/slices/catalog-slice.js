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
export const fetchColorCatalog = createAsyncThunk(
  "catalogSlice/fetchColorCatalog",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`products/getColors`, {
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
    products: {
      productCardResponses: [],
      sizeOfProducts: 0,
    },
  },
  colorResponses: [],
  isLoading: false,
  errorMessage: null,
  filterSlice: [],
};

const catalogSlice = createSlice({
  name: "catalogSlice",
  initialState,
  reducers: {
    resetAllFilters: (state) => {
      state.filterSlice = [];
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchDataCatalog.fulfilled, (state, action) => {
        state.data.products = action.payload.data;
        state.isLoading = false;
      })

      .addCase(fetchDataCatalog.pending, (state) => {
        state.errorMessage = false;
        state.isLoading = true;
      })

      .addCase(fetchDataCatalog.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      })

      .addCase(fetchColorCatalog.fulfilled, (state, action) => {
        state.colorResponses = action.payload.data;
      });
  },
});

export const catalogSliceAction = catalogSlice.actions;
export default catalogSlice;

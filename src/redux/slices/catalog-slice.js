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
    chipsFromFilter: (state, action) => {
      const isHave = state.filterSlice.some(
        (state) => state.id === action.payload.id
      );

      const isTitle = state.filterSlice.some(
        (state) => state.title === action.payload.title
      );

      if (action.payload.id === "colors") {
        state.filterSlice = [...state.filterSlice, action.payload];
      } else {
        if (isTitle) {
          state.filterSlice = state.filterSlice.filter(
            (slice) => slice.id !== action.payload.id
          );
        }
        if (isHave) {
          const updateState = state.filterSlice.map((slice) => {
            if (slice.id === action.payload.id) {
              return action.payload;
            }
            return slice;
          });
          state.filterSlice = updateState;
        } else {
          state.filterSlice = [...state.filterSlice, action.payload];
        }
      }
    },
    chipsFromFilterRemove: (state, action) => {
      console.log(action, "proverka");
      state.filterSlice = state.filterSlice.filter(
        (slice) => slice.title !== action.payload.title
      );
    },
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

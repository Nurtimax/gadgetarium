import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const getSearch = createAsyncThunk(
  "search/getSearch",
  async (params) => {
    try {
      const response = await axiosInstance.get("products/catalog/search", {
        params,
      });
      return response;
    } catch (error) {
      return error;
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
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearch.fulfilled, (state, action) => {
      state.data.products = action.payload.data;
    });
  },
});

export const searchSliceAction = searchSlice.actions;
export default searchSlice;

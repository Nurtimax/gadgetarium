import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const getProductsThunk = createAsyncThunk(
  "getProductsThunk/goodsSlice",
  async (params) => {
    try {
      const response = await axiosInstance.get("adminProducts", { params });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  params: {
    productType: null,
    page: null,
    size: 7,
    endDate: null,
    startDate: null,
    discountField: null,
    fieldToSort: null,
    searchText: null,
  },
  data: {
    pages: null,
    currentPage: null,
    responseList: [],
  },
  localParams: {
    tabs: null,
    endDate: null,
    startDate: null,
    search: null,
    chooseItem: [],
    sort: null,
  },
  isLoading: false,
};

const goodsSlice = createSlice({
  name: "goodsSlice",
  initialState,
  reducers: {
    changeParams: (state, action) => {
      state.params = {
        ...state.params,
        [action.payload.key]: action.payload.value,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const actionGoodSlice = goodsSlice.actions;
export default goodsSlice;

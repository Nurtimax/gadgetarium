import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";
import {
  fetchDiscountProduct,
  fetchNewProduct,
  fetchRecomendationProduct,
} from "./product-slice";

export const getAllCompareProducts = createAsyncThunk(
  "compare/getAllCompareProducts",
  async () => {
    try {
      const response = await axiosInstance.get(`userCompare/get`);

      const result = response.data;
      return result;
    } catch (error) {
      return error;
    }
  }
);
export const getCompareProductByCategoryId = createAsyncThunk(
  "compare/getCompareProductByCategoryId",
  async (params) => {
    console.log(params, "rabotau");

    try {
      const response = await axiosInstance.get(`userCompare`, { params });

      const result = await response.data;

      console.log(result, "resultttt");
      return result;
    } catch (error) {
      return error;
    }
  }
);
export const getCountCompareProduct = createAsyncThunk(
  "compare/getCountCompareProduct",
  async () => {
    try {
      const response = await axiosInstance.get(`userCompare/count`);

      const result = await response.data;
      return result;
    } catch (error) {
      return error;
    }
  }
);

export const postCompareProducts = createAsyncThunk(
  "compare/postCompareProducts",
  async ({ params }, { dispatch }) => {
    try {
      const response = await axiosInstance.post(
        "userCompare",
        {},
        {
          params,
        }
      );
      const result = response.data;
      dispatch(getAllCompareProducts());

      dispatch(fetchDiscountProduct(params.size));
      dispatch(fetchNewProduct(params.size));
      dispatch(fetchRecomendationProduct(params.size));

      return result;
    } catch (error) {
      return error;
    }
  }
);

export const deleteCompareProductsByCategoryId = createAsyncThunk(
  "compare/deleteCompareProduct",
  async ({ params, getProducts }, { dispatch }) => {
    console.log("worked");
    console.log(params, "paraaaaams");
    try {
      const response = await axiosInstance.delete(`userCompare`, {
        params: { id: params.categoryId },
      });
      const data = await response.data;

      dispatch(getCompareProductByCategoryId(getProducts));
      dispatch(getAllCompareProducts());

      return data;
    } catch (error) {
      return error;
    }
  }
);
export const deleteCompareProductsById = createAsyncThunk(
  "compare/deleteCompareProductsById",
  async ({ id, params }, { dispatch }) => {
    console.log(id, "hello world ");
    if (params === undefined) {
      try {
        console.log("work card delete");
        const response = await axiosInstance.delete(`userCompare/${id}`);
        const data = response.data;
        dispatch(getAllCompareProducts());
        return data;
      } catch (error) {
        return error;
      }
    } else {
      try {
        console.log("work delete with params");
        const response = await axiosInstance.delete(`userCompare/${id}`);
        const data = await response.data;
        dispatch(getCompareProductByCategoryId(params));
        dispatch(getAllCompareProducts());
        return data;
      } catch (error) {
        return error;
      }
    }
  }
);

const initialState = {
  compare: [],
  compareByCategoryId: [],
  productCategoryName: [],
  isLoading: false,
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllCompareProducts.fulfilled, (state, action) => {
        state.compare = action.payload;
      })

      .addCase(getCompareProductByCategoryId.fulfilled, (state, action) => {
        state.compareByCategoryId = action.payload;
        state.isLoading = false;
      })
      .addCase(getCompareProductByCategoryId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountCompareProduct.fulfilled, (state, action) => {
        state.productCategoryName = [
          ...state.productCategoryName,
          action.payload,
        ];
      })
      .addCase(deleteCompareProductsById.fulfilled, (state, action) => {
        console.log(action.payload, "delete");
      });
  },
});

export const compareSliceAction = compareSlice.actions;
export default compareSlice;

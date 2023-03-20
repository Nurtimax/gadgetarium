import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";
import {
  fetchDiscountProduct,
  fetchNewProduct,
  fetchRecomendationProduct,
} from "./product-slice";

export const getCompareProduct = createAsyncThunk(
  "compare/getCompareProduct",
  async (params) => {
    console.log(params, "parrmass");
    try {
      const response = await axiosInstance.get(`userCompare`, { params });

      const result = await response.data;
      console.log(result, "ressssult");
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
  async ({ params, getProducts }, { dispatch }) => {
    try {
      const response = await axiosInstance.post(
        "userCompare",
        {},
        {
          params: {
            productId: params.productId,
          },
        }
      );
      const result = await response.data;

      dispatch(fetchDiscountProduct(params.size.discount));
      dispatch(fetchNewProduct(params.size.news));
      dispatch(fetchRecomendationProduct(params.size.recomendation));

      dispatch(getCompareProduct(getProducts));
      return result;
    } catch (error) {
      return error;
    }
  }
);
export const deleteCompareProductsByCategoryId = createAsyncThunk(
  "compare/deleteCompareProduct",
  async (_, { dispatch }) => {
    try {
      const response = await axiosInstance.delete(`userCompare`);
      const data = await response.data;

      dispatch(getCompareProduct());

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
    try {
      const response = await axiosInstance.delete(`userCompare/${id}`);
      const data = await response.data;
      dispatch(getCompareProduct(params));
      return data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  compare: [],
  productCategoryName: [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getCompareProduct.fulfilled, (state, action) => {
        state.compare = action.payload;
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

export const catalogSliceAction = compareSlice.actions;
export default compareSlice;

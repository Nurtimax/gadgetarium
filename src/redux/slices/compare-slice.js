import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";
import { getBasketProduct } from "./basket-slice";
import { fetchDataCatalog } from "./catalog-slice";
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
  async (params, { dispatch }) => {
    try {
      const response = await axiosInstance.get(`userCompare`, { params });

      const result = await response.data;
      dispatch(getAllCompareProducts());
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
  async (params, { dispatch }) => {
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
      const result = response.data;
      dispatch(getAllCompareProducts());

      dispatch(fetchDataCatalog(params.dataCatalog));
      dispatch(fetchDiscountProduct(params.size.discount));
      dispatch(fetchNewProduct(params.size.news));
      dispatch(fetchRecomendationProduct(params.size.recomendation));
      dispatch(getBasketProduct());

      return result;
    } catch (error) {
      return error;
    }
  }
);

export const deleteCompareProductsByCategoryId = createAsyncThunk(
  "compare/deleteCompareProduct",
  async ({ params, getProducts }, { dispatch }) => {
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
    if (params === undefined) {
      try {
        const response = await axiosInstance.delete(`userCompare/${id}`);
        const data = response.data;
        dispatch(getAllCompareProducts());
        return data;
      } catch (error) {
        return error;
      }
    } else {
      try {
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
        state.isLoading = false;
        state.compare = action.payload;
      })
      .addCase(getAllCompareProducts.pending, (state) => {
        state.isLoading = true;
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
      });
  },
});

export const compareSliceAction = compareSlice.actions;
export default compareSlice;

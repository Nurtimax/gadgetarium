import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const postProductToCompare = createAsyncThunk(
  "compare/postProductToCompare",
  async (params, { dispatch }) => {
    try {
      const response = await axiosInstance.post(
        "userCompare",
        {},
        {
          params,
        }
      );

      const result = await response.data;

      dispatch(getCompareProduct);

      return result;
    } catch (error) {
      return error;
    }
  }
);

export const getCompareProduct = createAsyncThunk(
  "compare/getComparePrdoduct",
  async () => {
    try {
      const response = await axiosInstance.get("userCompare");

      return response;
    } catch (error) {
      return error;
    }
  }
);
const initialState = {};
export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {},
  extraReducers: {},
});

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const addProductThunk = createAsyncThunk(
  "addProductSlice/addProductThunk",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("products", data);
      const result = response.data;
      return result;
    } catch (error) {
      if (rejectWithValue) {
        return error;
      }
      return error;
    }
  }
);

export const getBrandThunkApi = createAsyncThunk(
  "addProductSlice/getBrandThunkApi",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("brands");
      const result = response.data;
      return result;
    } catch (error) {
      if (rejectWithValue) {
        return error;
      }
      return error;
    }
  }
);

export const postBrandThunkApi = createAsyncThunk(
  "addProductSlice/postBrandThunkApi",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("brands");
      const result = response.data;
      return result;
    } catch (error) {
      if (rejectWithValue) {
        return error;
      }
      return error;
    }
  }
);

const initialState = {
  data: {},
  Productbrand: [],
};

const addProductSlice = createSlice({
  name: "addProductSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [addProductThunk.fulfilled]: (state, action) => {
      const { email, roleName, token } = action.payload;
      if (email && roleName && token) {
        state.data = action.payload;
      }
      state.isLoading = false;
    },
    [getBrandThunkApi.fulfilled]: (state, action) => {
      state.Productbrand = action.payload;
    },
  },
});
export const ActionAddProductSlice = addProductSlice.actions;

export default addProductSlice;

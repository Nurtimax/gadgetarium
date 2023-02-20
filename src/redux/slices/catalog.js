import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GADJEDTARIUM_LOGIN_INFO,
  SWAGGER_API,
} from "../../utils/constants/fetch";

const USER_INFO = JSON.parse(localStorage.getItem(GADJEDTARIUM_LOGIN_INFO));

export const fetchDataCatalog = createAsyncThunk(
  "catalogSlice/fetchDataCatalog",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${SWAGGER_API}/api/products/catalog`, {
        params,
        headers: {
          Authorization: `Bearer ${USER_INFO?.token}`,
        },
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
  extraReducers: {
    [fetchDataCatalog.fulfilled]: (state, action) => {
      state.data.products = action.payload.data;
      state.isLoading = false;
    },
    [fetchDataCatalog.pending]: (state) => {
      state.errorMessage = false;
      state.isLoading = true;
    },
    [fetchDataCatalog.rejected]: (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
  },
});

export const catalogSliceAction = catalogSlice.actions;
export default catalogSlice;

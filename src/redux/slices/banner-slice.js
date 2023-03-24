import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const getBannerThunk = createAsyncThunk("getBannerThunk", async () => {
  try {
    const response = await axiosInstance.get("banners");
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  isLoading: false,
  banners: [],
  message: null,
};

const bannerSlice = createSlice({
  name: "bannerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBannerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBannerThunk.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.banners = action.payload;
        }
        state.isLoading = false;
        state.message = null;
      })
      .addCase(getBannerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
      });
  },
});
export const actionBannerSlice = bannerSlice.actions;

export default bannerSlice;

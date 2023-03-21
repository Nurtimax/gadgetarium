import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

const initialState = {
  data: {},
  status: null,
  statusText: null,
  isLoading: false,
};

export const postBannerImagesThunk = createAsyncThunk(
  "postBannerImagesThunk/addBannerImageSlice",
  async (images) => {
    try {
      const response = await axiosInstance.post("banners", images);
      const responseData = {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
      return responseData;
    } catch (error) {
      return error;
    }
  }
);

const addBannerImageSlice = createSlice({
  name: "addBannerImage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postBannerImagesThunk.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.status = action.payload.status;
        state.statusText = action.payload.statusText;
        state.isLoading = false;
      })
      .addCase(postBannerImagesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBannerImagesThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const actionAddBannerImageSlice = addBannerImageSlice.actions;

export default addBannerImageSlice;

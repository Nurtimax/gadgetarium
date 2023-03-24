import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const sendMailingThunk = createAsyncThunk(
  "sendMailingThunk/mailingSlice",
  async (data) => {
    try {
      const response = await axiosInstance.post("mailings/message", data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  errors: {
    message: null,
  },
  isLoading: "",
  promiseMessage: null,
};

const mailingSlice = createSlice({
  name: "mailingSlice",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const actionMailingSlice = mailingSlice.actions;

export default mailingSlice;

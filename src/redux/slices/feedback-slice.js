import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";
const initialState = {
  data: {},
  status: null,
  error: null,
};
export const postAddFeedback = createAsyncThunk(
  "addFeedbackSlice/postAddFeedback",
  async (data, { rejectWithValue }) => {
    // console.log(data);
    try {
      const response = await axiosInstance.post("users/review", data);
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
const addFeedbackSlice = createSlice({
  name: "addFeedbackSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postAddFeedback.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(postAddFeedback.fulfilled, (state, action) => {
      console.log(action.payload.response.data.message);
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(postAddFeedback.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});
export const ActionAddFeedbackSlice = addFeedbackSlice.actions;
export default addFeedbackSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

const getUserData = createAsyncThunk("ordering/getUserData", async () => {
  try {
    const response = await axiosInstance.get("userOrders/autofill");
    const result = await response.data;

    return result;
  } catch (error) {
    return error;
  }
});

const initialState = {
  data: {},
  isLoading: false,
};

const orderingSlice = createSlice({
  name: "ordering",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getUserData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })

      .addCase(getUserData.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getUserData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const ActionBasket = orderingSlice.actions;
export { orderingSlice, getUserData };

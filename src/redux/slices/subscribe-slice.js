import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../config/axios-instance";

const postEmail = createAsyncThunk("subscribe,postEmail", async (data) => {
  try {
    const response = await axiosInstance.post("mailings/subscribe", data);

    if (response.status === 200) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }

    return response;
  } catch (error) {
    return error;
  }
});

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState: {},
  reducers: {},
  extraReducers: () => {},
});

export const ActionSubscribe = subscribeSlice.actions;
export { postEmail, subscribeSlice };

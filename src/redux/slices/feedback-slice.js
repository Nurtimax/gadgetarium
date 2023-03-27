import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";
import { getProductDetailThunk } from "./product-details-slice";
import { toast } from "react-toastify";
const initialState = {
  status: null,
  error: null,
};

export const postAddFeedback = createAsyncThunk(
  "addFeedbackSlice/postAddFeedback",
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.post("users/review", params);
      const result = response.data;
      if (response.status === 200) {
        toast.success("Ваш отзыв был успешно отправлен!");
        dispatch(
          getProductDetailThunk({
            product: params.product,
            attribute: "Отзывы",
          })
        );
      }

      return result;
    } catch (error) {
      if (rejectWithValue) {
        return error;
      }
      return error;
    }
  }
);
export const putAddFeedback = createAsyncThunk(
  "addFeedbackSlice/putAddFeedback",
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.put("users/review", params.data);
      const result = response.data;
      if (response.status === 200) {
        toast.success("Ваш отзыв был успешно отредактирован");
        dispatch(
          getProductDetailThunk({
            product: params.product,
            attribute: "Отзывы",
          })
        );
      }

      return result;
    } catch (error) {
      if (rejectWithValue) {
        return error;
      }
      return error;
    }
  }
);
export const deletetFeedback = createAsyncThunk(
  "addFeedbackSlice/deletetFeedback",
  async ({ reviewid, product }, { rejectWithValue, dispatch }) => {
    console.log(reviewid);
    try {
      const response = await axiosInstance.delete(`users/review`, {
        params: { review: reviewid },
      });
      const result = response.data;
      if (response.status === 200) {
        toast.success("Вы  удалили отзыв");

        dispatch(getProductDetailThunk({ product, attribute: "Отзывы" }));
      }

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
    builder
      .addCase(postAddFeedback.pending, (state) => {
        state.status = "pending";
      })

      .addCase(postAddFeedback.fulfilled, (state) => {
        state.status = "success";
      })

      .addCase(postAddFeedback.rejected, (state) => {
        state.status = "error";
      });
  },
});
export const ActionAddFeedbackSlice = addFeedbackSlice.actions;
export default addFeedbackSlice;

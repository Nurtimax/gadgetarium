import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../config/axios-instance";
import { getBasketProduct } from "./basket-slice";

const postCardData = createAsyncThunk("paymant/postCardData", async (data) => {
  try {
    const response = await axiosInstance.post(
      "http://ec2-54-93-236-116.eu-central-1.compute.amazonaws.com/payments/charge",
      data
    );

    if (response.status === 200) {
      toast.success(response.data.message);
    }

    return response;
  } catch (error) {
    return error;
  }
});

const postOrdering = createAsyncThunk(
  "paymant/postOrdering",
  async (params, { dispatch }) => {
    try {
      const response = await axiosInstance.post("userOrders", params);

      if (response.status === 200) {
        toast.success(response.data.message);
      }

      dispatch(getBasketProduct());

      return response;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  personalData: {},
  personalCardData: {},
  status: "",
  data: {},
  dateOrder: "0",
};

const paymantSlice = createSlice({
  name: "paymant",
  initialState,
  reducers: {
    getUserPersonalData: (state, action) => {
      state.personalData = action.payload;
    },

    getUserPersonalCardData: (state, action) => {
      state.personalCardData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(postOrdering.fulfilled, (state, action) => {
      state.status = action.payload.status;
      state.data = action.payload.data;
      state.dateOrder = action.payload?.data?.dateOfOrder
        .split("")
        .splice(0.1)
        .join("");
    });
  },
});

export const ActionsPaymant = paymantSlice.actions;
export { paymantSlice, postCardData, postOrdering };

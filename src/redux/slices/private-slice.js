import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const getHistoryOrders = createAsyncThunk(
  "private/getHistoryOrders",
  async () => {
    try {
      const response = await axiosInstance.get("personals/orders");
      const result = await response.data;

      return result;
    } catch (error) {
      return error;
    }
  }
);
export const getFavorites = createAsyncThunk(
  "private/getFavorites",
  async () => {
    try {
      const response = await axiosInstance.get("personals/favorites");
      const result = await response.data;

      return result;
    } catch (error) {
      return error;
    }
  }
);
export const getById = createAsyncThunk("private/getById", async (id) => {
  try {
    const response = await axiosInstance.get("/personals/getOrder", {
      params: {
        orderId: id,
      },
    });

    const result = await response.data;

    return result;
  } catch (error) {
    return error;
  }
});
export const getProfile = createAsyncThunk("private/getProfile", async () => {
  try {
    const response = await axiosInstance.get(`personals/userInfo`);
    const result = response.data;

    return result;
  } catch (error) {
    return error;
  }
});
export const putProfile = createAsyncThunk(
  "private/putProfile",
  async (param) => {
    try {
      const response = await axiosInstance.put(`personals/updateUser`, param);
      const result = await response.data;
      console.log(response);

      return result;
    } catch (error) {
      return error;
    }
  }
);
const initialState = {
  data: [],
  status: null,
  dataFavorites: [],
  dataDetails: [],
  dataInfoProfile: {},
};

export const privateSlice = createSlice({
  name: "private",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHistoryOrders.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getHistoryOrders.pending, (state) => {
        state.status = "panding";
      })
      .addCase(getHistoryOrders.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.status = "success";
        state.dataFavorites = action.payload;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.status = "success";
        state.dataDetails = action.payload;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = "success";
        state.dataInfoProfile = action.payload;
      });
  },
});

export const privateActions = privateSlice.actions;

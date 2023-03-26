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
  async (param, { dispatch }) => {
    try {
      const response = await axiosInstance.put(`personals/updateUser`, param);
      const result = await response.data;
      dispatch(getProfile());

      return result;
    } catch (error) {
      return error;
    }
  }
);
export const putPassword = createAsyncThunk(
  "private/putPassword",
  async (param) => {
    try {
      const response = await axiosInstance.put(
        "personals/changePassword",
        param
      );
      const result = await response.data;

      return result;
    } catch (error) {
      return error;
    }
  }
);
export const clearHistory = createAsyncThunk(
  "private/clearHistory",
  async (_, { dispatch }) => {
    try {
      const response = await axiosInstance.delete("personals");
      const result = await response.data;

      dispatch(getHistoryOrders());

      return result;
    } catch (error) {
      return error;
    }
  }
);
const initialState = {
  history: {
    status: null,
    error: null,
    data: [],
  },
  details: {
    status: null,
    error: null,
    dataDetails: [],
  },
  favorites: {
    status: null,
    error: null,
    data: [],
  },
  profile: {
    status: null,
    error: null,
    data: {},
  },
  putProfile: {
    dataa: {},
    statuss: null,
    errorr: null,
  },
  password: {
    data: {},
    status: null,
    errorr: null,
  },
};

export const privateSlice = createSlice({
  name: "private",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHistoryOrders.fulfilled, (state, action) => {
        state.history.status = "success";
        state.history.data = action.payload;
      })
      .addCase(getHistoryOrders.pending, (state) => {
        state.history.status = "panding";
      })
      .addCase(getHistoryOrders.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.favorites.status = "success";
        state.favorites.data = action.payload;
      })
      .addCase(getFavorites.rejected, (state) => {
        state.favorites.status = "error";
      })
      .addCase(getFavorites.pending, (state) => {
        state.favorites.status = "pending";
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.details.status = "success";
        state.details.dataDetails = action.payload;
      })
      .addCase(getById.pending, (state) => {
        state.details.status = "panding";
      })
      .addCase(getById.rejected, (state) => {
        state.details.status = "error";
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profile.status = "success";
        state.profile.data = action.payload;
      })
      .addCase(getProfile.pending, (state) => {
        state.profile.status = "pending";
      })
      .addCase(getProfile.rejected, (state) => {
        state.profile.status = "rejected";
      })
      .addCase(putProfile.rejected, (state) => {
        state.profile.status = "rejected";
      })
      .addCase(putProfile.fulfilled, (state, action) => {
        state.profile.status = "fulfilled";
        state.putProfile.dataa = action.payload;
      })
      .addCase(putProfile.pending, (state) => {
        state.profile.status = "pending";
      })
      .addCase(putPassword.pending, (state) => {
        state.password.status = "pending";
      })
      .addCase(putPassword.fulfilled, (state, action) => {
        state.password.status = "fulfilled";
        state.password.data = action.payload;
      });
  },
});

export const privateActions = privateSlice.actions;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";
import { GADJEDTARIUM_LOGIN_INFO } from "../../utils/constants/fetch";

export const fetchDataSignin = createAsyncThunk(
  "authenticationSlice/fetchDataSignin",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`auth/login`, params);
      const data = response.data;
      return data;
    } catch (error) {
      if (rejectWithValue) {
        return error;
      }
      return error;
    }
  }
);

export const fetchDataSignup = createAsyncThunk(
  "authenticationSlice/fetchDataSignup",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`auth/register`, params);
      const data = response.data;
      return data;
    } catch (error) {
      if (rejectWithValue) {
        return error;
      }
      return error;
    }
  }
);

const initialState = {
  data: {},
  isLoading: false,
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: "authenticationSlice",
  initialState,
  reducers: {
    authLogOut: (state) => {
      state.isAuthenticated = false;
      state.data = initialState.data;
      localStorage.removeItem(GADJEDTARIUM_LOGIN_INFO);
    },
    getUserData: (state, action) => {
      state.isAuthenticated = true;
      state.data = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchDataSignin.fulfilled, (state, action) => {
        const { email, roleName, token } = action.payload;
        if (email && roleName && token) {
          localStorage.setItem(
            GADJEDTARIUM_LOGIN_INFO,
            JSON.stringify(action.payload)
          );
        }
        state.data = action.payload;
        state.isLoading = false;
      })

      .addCase(fetchDataSignin.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(fetchDataSignin.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchDataSignup.fulfilled, (state, action) => {
        const { email, roleName, token } = action.payload;
        if (email && roleName && token) {
          localStorage.setItem(
            GADJEDTARIUM_LOGIN_INFO,
            JSON.stringify(action.payload)
          );
          state.data = action.payload;
        }
        state.isLoading = false;
      })

      .addCase(fetchDataSignup.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(fetchDataSignup.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const ActionauthenticationSlice = authenticationSlice.actions;
const reducerAuthenticationSlice = authenticationSlice.reducer;
export default reducerAuthenticationSlice;

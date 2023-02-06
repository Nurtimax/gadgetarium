import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GADJEDTARIUM_LOGIN_INFO,
  SWAGGER_API,
} from "../../utils/constants/fetch";

export const fetchDataSignin = createAsyncThunk(
  "authenticationSlice/fetchDataSignin",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${SWAGGER_API}/api/auth/login`,
        params
      );
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
      const response = await axios.post(
        `${SWAGGER_API}/api/auth/register`,
        params
      );
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
};

const authenticationSlice = createSlice({
  name: "authenticationSlice",
  initialState,
  reducers: {
    authLogOut: (state) => {
      state.data = initialState.data;
      localStorage.removeItem(GADJEDTARIUM_LOGIN_INFO);
    },
    authLogIn: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: {
    [fetchDataSignin.fulfilled]: (state, action) => {
      const { email, roleName, token } = action.payload;
      if (email && roleName && token) {
        localStorage.setItem(
          GADJEDTARIUM_LOGIN_INFO,
          JSON.stringify(action.payload)
        );
      }
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchDataSignin.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchDataSignin.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchDataSignup.fulfilled]: (state, action) => {
      const { email, roleName, token } = action.payload;
      if (email && roleName && token) {
        localStorage.setItem(
          GADJEDTARIUM_LOGIN_INFO,
          JSON.stringify(action.payload)
        );
        state.data = action.payload;
      }
      state.isLoading = false;
    },
    [fetchDataSignup.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchDataSignup.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const ActionauthenticationSlice = authenticationSlice.actions;
export { authenticationSlice };

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GADJEDTARIUM_LOGIN_INFO,
  SWAGGER_API,
} from "../../utils/constants/fetch";

const authRole = JSON.parse(
  localStorage.getItem(GADJEDTARIUM_LOGIN_INFO) || "{}"
);

const fetchOrderProductSlice = createAsyncThunk(
  "orderProductSlice/fetchOrderProductSlice",
  async (params) => {
    try {
      const response = await axios.get(`${SWAGGER_API}/api/orders`, {
        headers: {
          Authorization: `Bearer ${authRole.token}`,
        },
        params,
      });
      return response.data;
    } catch (error) {
      throw new Error();
    }
  }
);

const fetchOrderProductById = createAsyncThunk(
  "orderProductSlice/fetchOrderProductById",
  async (data) => {
    try {
      const response = await axios.get(`${SWAGGER_API}/api/orders/${data.id}`, {
        headers: {
          Authorization: `Bearer ${authRole.token}`,
        },
        params: data.params,
      });
      return response;
    } catch (error) {
      throw new Error();
    }
  }
);

const initialState = {
  data: {},
};

const orderProductSlice = createSlice({
  name: "orderProductSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrderProductSlice.fulfilled]: (state, action) => {
      state.data = action.payload;
    },

    [fetchOrderProductById.fulfilled]: (state, action) => {
      console.log(action);
    },
  },
});

export const ActionOrderProduct = orderProductSlice.actions;
export { orderProductSlice, fetchOrderProductSlice, fetchOrderProductById };

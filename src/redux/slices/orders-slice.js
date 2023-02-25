import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GADJEDTARIUM_LOGIN_INFO,
  SWAGGER_API,
} from "../../utils/constants/fetch";

const authRole = JSON.parse(
  localStorage.getItem(GADJEDTARIUM_LOGIN_INFO) || "{}"
);

const getOrderProducts = createAsyncThunk(
  "orders/getOrderPrdoducts",
  async (params) => {
    try {
      const response = await axios.get(`${SWAGGER_API}adminOrders`, {
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

const getOrderProductsById = createAsyncThunk(
  "orders/getOrderProductsById",
  async (params) => {
    try {
      const response = await axios.get(
        `${SWAGGER_API}adminOrders/paymentInfo`,
        {
          headers: {
            Authorization: `Bearer ${authRole.token}`,
          },
          params,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error();
    }
  }
);

const updateOrderProducts = createAsyncThunk(
  "orders/updateOrderProducts",
  async ({ id, orderStatus, currentStatus, currentPage }, { dispatch }) => {
    try {
      const response = await axios.put(
        `${SWAGGER_API}adminOrders`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authRole.token}`,
          },
          params: {
            id,
            orderStatus,
          },
        }
      );

      dispatch(
        getOrderProducts({
          orderStatus: currentStatus,
          page: currentPage || 1,
          size: 7,
        })
      );

      return response.data;
    } catch (error) {
      throw new Error();
    }
  }
);

const deleteOrderProducts = createAsyncThunk(
  "orders/deleteOrderProducts",
  async ({ id, currentStatus, currentPage }, { dispatch }) => {
    try {
      const response = await axios.delete(`${SWAGGER_API}adminOrders`, {
        headers: {
          Authorization: `Bearer ${authRole.token}`,
        },
        params: {
          id,
        },
      });

      dispatch(
        getOrderProducts({
          orderStatus: currentStatus,
          page: currentPage || 1,
          size: 7,
        })
      );

      return response.data;
    } catch (error) {
      throw new Error();
    }
  }
);

const getOrderInforaphic = createAsyncThunk(
  "orders/getOrderInforaphic",
  async () => {
    try {
      const response = await axios.get(`${SWAGGER_API}adminProducts/inf`, {
        headers: {
          Authorization: `Bearer ${authRole.token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error();
    }
  }
);

const initialState = {
  data: {},
  dataByID: {},
  dataInfo: {},
};

const ordersProduct = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getOrderProducts.fulfilled, (state, action) => {
        state.data = action.payload;
      })

      .addCase(getOrderProductsById.fulfilled, (state, action) => {
        state.dataByID = action.payload;
      })

      .addCase(getOrderInforaphic.fulfilled, (state, action) => {
        state.dataInfo = action.payload;
      });
  },
});

export const ActionOrderProduct = ordersProduct.actions;
export {
  ordersProduct,
  getOrderProducts,
  getOrderProductsById,
  updateOrderProducts,
  deleteOrderProducts,
  getOrderInforaphic,
};

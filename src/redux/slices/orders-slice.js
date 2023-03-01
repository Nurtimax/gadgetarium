import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

const getOrderProducts = createAsyncThunk(
  "orders/getOrderPrdoducts",
  async (params) => {
    try {
      const response = await axiosInstance.get(`adminOrders`, {
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
      const response = await axiosInstance.get(`adminOrders/paymentInfo`, {
        params,
      });

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
      const response = await axiosInstance.put(
        `adminOrders`,
        {},
        {
          params: {
            id,
            orderStatus,
          },
        }
      );

      dispatch(
        getOrderProducts({
          orderStatus: currentStatus || "WAITING",
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
      const response = await axiosInstance.delete(`adminOrders`, {
        params: {
          id,
        },
      });

      dispatch(
        getOrderProducts({
          orderStatus: currentStatus || "WAITING",
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
      const response = await axiosInstance.get(`adminProducts/inf`);

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
  isLoading: false,
  infoIsLoading: false,
};

const ordersProduct = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getOrderProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })

      .addCase(getOrderProducts.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getOrderProducts.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(getOrderProductsById.fulfilled, (state, action) => {
        state.dataByID = action.payload;
        state.isLoading = false;
      })

      .addCase(getOrderProductsById.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getOrderProductsById.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(getOrderInforaphic.fulfilled, (state, action) => {
        state.dataInfo = action.payload;
        state.infoIsLoading = false;
      })

      .addCase(getOrderInforaphic.pending, (state) => {
        state.infoIsLoading = true;
      })

      .addCase(getOrderInforaphic.rejected, (state) => {
        state.infoIsLoading = false;
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

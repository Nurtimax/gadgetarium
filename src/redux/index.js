import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./slices/authentication";
import { ordersProduct } from "./slices/orders-slice";

export const store = configureStore({
  reducer: {
    auth: authenticationSlice.reducer,
    orderProduct: ordersProduct.reducer,
  },
});

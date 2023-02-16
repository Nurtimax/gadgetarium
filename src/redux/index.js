import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./slices/authentication";
import { orderProductSlice } from "./slices/order-product";

export const store = configureStore({
  reducer: {
    auth: authenticationSlice.reducer,
    orderProduct: orderProductSlice.reducer,
  },
});

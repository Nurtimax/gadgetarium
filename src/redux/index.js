import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./slices/authentication";
import { productSlice } from "./slices/productSlice";
export const store = configureStore({
  reducer: {
    auth: authenticationSlice.reducer,
    product: productSlice.reducer,
  },
});

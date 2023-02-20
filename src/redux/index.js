import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./slices/authentication";
import catalogSlice from "./slices/catalog";
import { productSlice } from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    auth: authenticationSlice.reducer,
    catalog: catalogSlice.reducer,
    product: productSlice.reducer,
  },
});

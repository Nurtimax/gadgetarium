import reducerAuthenticationSlice from "./slices/authentication";
import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./slices/catalog";
import addProductSlice from "./slices/add-product";
import { productSlice } from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    catalog: catalogSlice.reducer,
    auth: reducerAuthenticationSlice,
    addProduct: addProductSlice.reducer,
    product: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

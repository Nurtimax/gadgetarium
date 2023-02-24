import reducerAuthenticationSlice from "./slices/authentication";
import { configureStore } from "@reduxjs/toolkit";
import { ordersProduct } from "./slices/orders-slice";
import addProductSlice from "./slices/add-product";
import { productSlice } from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    orderProduct: ordersProduct.reducer,
    auth: reducerAuthenticationSlice,
    addProduct: addProductSlice.reducer,
    product: productSlice.reducer,
  },
});

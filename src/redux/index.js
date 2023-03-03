import reducerAuthenticationSlice from "./slices/authentication";
import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./slices/add-product";
import { productSlice } from "./slices/product-slice";
import { ordersProduct } from "./slices/orders-slice";
import { basketProducts } from "./slices/basket-slice";

export const store = configureStore({
  reducer: {
    auth: reducerAuthenticationSlice,
    addProduct: addProductSlice.reducer,
    product: productSlice.reducer,
    orderProduct: ordersProduct.reducer,
    basket: basketProducts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

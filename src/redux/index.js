import reducerAuthenticationSlice from "./slices/authentication-slice";
import { configureStore } from "@reduxjs/toolkit";
import productDetailsSlice from "./slices/product-details";
import addProductSlice from "./slices/add-product-slice";
import { productSlice } from "./slices/product-slice";
import { ordersProduct } from "./slices/orders-slice";
import { basketProducts } from "./slices/basket-slice";
import catalogSlice from "./slices/catalog-slice";

export const store = configureStore({
  reducer: {
    auth: reducerAuthenticationSlice,
    addProduct: addProductSlice.reducer,
    product: productSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    orderProduct: ordersProduct.reducer,
    basket: basketProducts.reducer,
    catolog: catalogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

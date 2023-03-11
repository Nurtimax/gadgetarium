import reducerAuthenticationSlice from "./slices/authentication";
import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./slices/add-product";
import { productSlice } from "./slices/productSlice";
import { ordersProduct } from "./slices/orders-slice";
import catalogSlice from "./slices/catalog";
import filteredCatalogSlice from "./slices/catalog-filter-slice";

export const store = configureStore({
  reducer: {
    auth: reducerAuthenticationSlice,
    addProduct: addProductSlice.reducer,
    product: productSlice.reducer,
    orderProduct: ordersProduct.reducer,
    catalog: catalogSlice.reducer,
    filteredCatalog: filteredCatalogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

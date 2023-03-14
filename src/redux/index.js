import { configureStore } from "@reduxjs/toolkit";
import reducerAuthenticationSlice from "./slices/authentication-slice";
import addProductSlice from "./slices/add-product-slice";
import { productSlice } from "./slices/product-slice";
import { ordersProduct } from "./slices/orders-slice";
import filteredCatalogSlice from "./slices/catalog-filter-slice";
import { basketProducts } from "./slices/basket-slice";
import catalogSlice from "./slices/catalog-slice";
import { orderingSlice } from "./slices/ordering-slice";
import viewedProductSlice from "./slices/viewed-product-slice";

export const store = configureStore({
  reducer: {
    auth: reducerAuthenticationSlice,
    addProduct: addProductSlice.reducer,
    product: productSlice.reducer,
    orderProduct: ordersProduct.reducer,
    filteredCatalog: filteredCatalogSlice.reducer,
    basket: basketProducts.reducer,
    catalog: catalogSlice.reducer,
    ordering: orderingSlice.reducer,
    viewed: viewedProductSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

import productDetailsSlice from "./slices/product-details";
import reducerAuthenticationSlice from "./slices/authentication-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./slices/add-product-slice";
import { productSlice } from "./slices/product-slice";
import { ordersProduct } from "./slices/orders-slice";
import filteredCatalogSlice from "./slices/catalog-filter-slice";
import { basketProducts } from "./slices/basket-slice";
import catalogSlice from "./slices/catalog-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { orderingSlice } from "./slices/ordering-slice";
import viewedProductSlice from "./slices/viewed-product-slice";

const rootReducer = combineReducers({
  auth: reducerAuthenticationSlice,
  addProduct: addProductSlice.reducer,
  product: productSlice.reducer,
  orderProduct: ordersProduct.reducer,
  basket: basketProducts.reducer,
  catolog: catalogSlice.reducer,
  ordering: orderingSlice.reducer,
  filteredCatalog: filteredCatalogSlice.reducer,
  productDetails: productDetailsSlice.reducer,
  viewed: viewedProductSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

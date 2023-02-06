import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./slices/authentication";

export const store = configureStore({
  reducer: {
    auth: authenticationSlice.reducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slice/modalReducer";

export const store = configureStore({
  reducer: {
    modal: modalReducer.reducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};

export const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateActive: (state) => {
      state.active = !state.active;
    },
  },
});

export const modalAction = modalReducer.actions;

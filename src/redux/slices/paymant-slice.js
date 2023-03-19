import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalData: {},
  personalCardData: {},
};

const paymantSlice = createSlice({
  name: "paymant",
  initialState,
  reducers: {
    getUserPersonalData: (state, action) => {
      state.personalData = action.payload;
    },
    getUserPersonalCardData: (state, action) => {
      state.personalCardData = action.payload;
    },
  },
});

export const ActionsPaymant = paymantSlice.actions;

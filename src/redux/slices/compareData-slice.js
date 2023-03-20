import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 1,
  size: 5,
  page: 1,
};
const compareDataSlice = createSlice({
  name: "compareData",
  initialState,
  reducers: {
    categoryChange: (state, action) => {
      state.categoryId = action.payload.categoryId;
      state.size = state.size + action.payload.size;
      state.page = state.page + action.payload.page;
    },
  },
});

export const compareDataAction = compareDataSlice.actions;
export default compareDataSlice;

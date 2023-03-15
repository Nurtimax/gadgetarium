import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

// export const postProductToCompare = createAsyncThunk(
//   "compare/postProductToCompare",
//   async (params, { dispatch }) => {
//     try {
//       const response = await axiosInstance.post(
//         "userCompare",
//         {},
//         {
//           params,
//         }
//       );

//       const result = await response.data;

//       dispatch(getCompareProduct);

//       return result;
//     } catch (error) {
//       return error;
//     }
//   }
// );

export const getCompareProduct = createAsyncThunk(
  "compare/getComparePrdoduct",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`products/catalog`, {
        params,
      });
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  data: {
    comporeProducts: [],
  },
};
export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompareProduct.fulfilled, (state, action) => {
      console.log(action, "action");
      state.data.comporeProducts = action.payload.data;
    });
  },
});

export const catalogSliceAction = compareSlice.actions;
export default compareSlice;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SWAGGER_API } from "../../utils/constants/fetch";
export const fetchProduct = createAsyncThunk("getAllProducts", async () => {
  const response = await (await axios.get(`${SWAGGER_API}/api/products`)).data;
  console.log(response);
});
const initialState = {
  products: [],
  isLoading: null,
};
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});
export const getAllProducts = productSlice.actions;
export { productSlice };

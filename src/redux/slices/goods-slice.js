import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const getProductsThunk = createAsyncThunk(
  "getProductsThunk/goodsSlice",
  async (params) => {
    try {
      const response = await axiosInstance.get("adminProducts", { params });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
export const removeProductsThunk = createAsyncThunk(
  "removeProductsThunk/goodsSlice",
  async ({ params, id }, { dispatch }) => {
    try {
      const response = await axiosInstance.delete("adminProducts", {
        params: { id },
      });
      dispatch(getProductsThunk(params));
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  params: {
    productType: "Все товары",
    page: 1,
    size: 7,
    endDate: null,
    startDate: null,
    discountField: null,
    fieldToSort: null,
    searchText: null,
  },
  data: {
    pages: null,
    currentPage: null,
    responseList: [],
  },
  localParams: {
    productType: "",
    endDate: "",
    startDate: "",
    searchText: "",
    chooseItem: [],
    sort: "",
  },
  isLoading: false,
  errors: {
    getProductsErrorMessage: null,
    removeProductsErrorMessage: null,
    errorMessage: null,
  },
  localParamsKeys: [
    "productType",
    "endDate",
    "startDate",
    "searchText",
    "chooseItem",
    "fieldToSort",
  ],
  choosedItems: [],
};

const goodsSlice = createSlice({
  name: "goodsSlice",
  initialState,
  reducers: {
    changeParams: (state, action) => {
      state.params = {
        ...state.params,
        [action.payload.key]: action.payload.value,
      };
    },
    changeLocalParams: (state, action) => {
      state.localParams = {
        ...state.localParams,
        [action.payload.key]: action.payload.value,
      };
    },
    changeAllParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    changeChoosedProducts: (state, action) => {
      const value = action.payload.value;
      const prevChoosedItems = state.choosedItems;

      if (!state.choosedItems.includes(value)) {
        state.choosedItems = [...prevChoosedItems, value];
      } else {
        state.choosedItems = prevChoosedItems.filter(
          (state) => state !== value
        );
      }
    },
    resetChoosedProducts: (state) => {
      state.choosedItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsThunk.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(removeProductsThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(removeProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeProductsThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const actionGoodSlice = goodsSlice.actions;
export default goodsSlice;

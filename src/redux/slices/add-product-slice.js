import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios-instance";

export const addProductThunk = createAsyncThunk(
  "addProductSlice/addProductThunk",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("adminProducts", data);
      const result = response.data;
      return result;
    } catch (error) {
      if (rejectWithValue) {
        return error;
      }
      return error;
    }
  }
);

export const getBrandThunkApi = createAsyncThunk(
  "addProductSlice/getBrandThunkApi",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("brands");
      const result = response.data;
      return result;
    } catch (error) {
      if (rejectWithValue) {
        return error;
      }
      return error;
    }
  }
);

export const postBrandThunkApi = createAsyncThunk(
  "addProductSlice/postBrandThunkApi",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("brands", data);
      const result = response.data;
      return result;
    } catch (error) {
      if (rejectWithValue) {
        return error;
      }
      return error;
    }
  }
);

const initialState = {
  data: {},
  Productbrand: [],
  isLoading: false,
  editData: {
    price: "",
    countOfProduct: "",
    isChecked: "price",
    id: 0,
    date: null,
    brand: "",
    errorMessage: null,
    errorPriceId: [],
    errorCountId: [],
  },
  addProductFirstPart: {},
  activeStep: 0,
  values: {},
  error: {},
};

const addProductSlice = createSlice({
  name: "addProductSlice",
  initialState,
  reducers: {
    editData: (state, action) => {
      state.editData = { ...state.editData, ...action.payload };
    },
    editAddProductFirstPart: (state, action) => {
      state.addProductFirstPart = action.payload;
    },
    nextActiveStep: (state) => {
      state.activeStep = state.activeStep + 1;
    },
    editAddProductSecondPart: (state, action) => {
      state.addProductFirstPart = {
        ...state.addProductFirstPart,
        [action.payload.key]: action.payload.value,
      };
    },
    editValues: (state, action) => {
      state.values = action.payload;
    },
    editValuesWithKey: (state, action) => {
      state.values = {
        ...state.values,
        [action.payload.key]: action.payload.value,
      };
    },
    getErrors: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductThunk.fulfilled, (state, action) => {
        const { email, roleName, token } = action.payload;
        if (email && roleName && token) {
          state.data = action.payload;
        }
        state.isLoading = false;
      })

      .addCase(addProductThunk.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(addProductThunk.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(getBrandThunkApi.fulfilled, (state, action) => {
        state.Productbrand = action.payload;
      });
  },
});
export const ActionAddProductSlice = addProductSlice.actions;

export default addProductSlice;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fieldToSort: null,
  discountField: null,
  subCategoryName: null,
  minPrice: 500,
  maxPrice: 250000,
  colors: [],
  memory: null,
  ram: null,
  laptopCPU: null,
  screenSize: null,
  screenResolutionOfLap: null,
  screenDiagonal: null,
  batteryCapacity: null,
  wirelessInterface: null,
  caseShape: null,
  braceletMaterial: null,
  housingMaterial: null,
  gender: null,
  waterProof: null,
  size: 12,
};
const filteredCatalogSlice = createSlice({
  name: "filteredCatalogSlice",
  initialState,
  reducers: {
    sortField: (state, action) => {
      state.fieldToSort = action.payload;
    },

    discountField: (state, action) => {
      state.discountField = action.payload;
    },
    subCategoryName: (state, action) => {
      state.subCategoryName = action.payload.title;
    },
    subCategoryNameElse: (state, action) => {
      state.subCategoryName = action.payload;
    },
    minPriceProduct: (state, action) => {
      state.minPrice = action.payload;
    },
    maxPriceProduct: (state, action) => {
      state.maxPrice = action.payload;
    },
    colors: (state, action) => {
      state.colors = state.colors.filter((color) => color !== action.payload);
    },
    colorsRemove: (state, action) => {
      state.colors = [...state.colors, action.payload];
    },
    sizeProduct: (state, action) => {
      state.size = state.size + action.payload;
    },
    editCharacteristics: (state, action) => {
      if (action.payload.title === state[String(action.payload.key)]) {
        return {
          ...state,
          [action.payload.key]: null,
        };
      }

      return {
        ...state,
        [action.payload.key]: action.payload.title,
      };
    },
    resetState: () => {
      return { ...initialState };
    },
    removeCheckedProduct: (state, action) => {
      if (action.payload.key === "colors") {
        const filteredColors = state[action.payload.key].filter(
          (color) => color !== action.payload.colorCode
        );
        return {
          ...state,
          [action.payload.key]: filteredColors,
        };
      } else {
        return {
          ...state,
          [action.payload.key]: null,
        };
      }
    },
  },
});
export const filteredCatalogSliceAction = filteredCatalogSlice.actions;
export default filteredCatalogSlice;

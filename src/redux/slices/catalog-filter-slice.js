import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fieldToSort: null,
  discountField: null,
  size: 12,
  minPrice: 500,
  maxPrice: 250000,
  subCategoryNames: [],
  colors: [],
  memories: [],
  rams: [],
  laptopCPUs: [],
  screenSizes: [],
  screenResolutions: [],
  screenDiagonals: [],
  batteryCapacities: [],
  wirelessInterfaces: [],
  caseShapes: [],
  braceletMaterials: [],
  housingMaterials: [],
  genders: [],
  waterProofs: [],
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
      state.subCategoryNames = [...state.subCategoryNames, action.payload];
    },
    subCategoryNameElse: (state, action) => {
      state.subCategoryNames = state.subCategoryNames.filter(
        (category) => category !== action.payload
      );
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
      return {
        ...state,
        [action.payload.key]: [
          ...state[action.payload.key],
          action.payload.title,
        ],
      };
    },
    editCharacteristicsElse: (state, action) => {
      return {
        ...state,
        [action.payload.key]: state[action.payload.key].filter(
          (key) => key !== action.payload.title
        ),
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
    removeByChip: (state, action) => {
      state[action.payload.key] = state[action.payload.key].filter(
        (item) => item !== action.payload.title
      );
    },
  },
});
export const filteredCatalogSliceAction = filteredCatalogSlice.actions;
export default filteredCatalogSlice;

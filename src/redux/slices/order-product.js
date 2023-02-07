// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { SWAGGER_API } from "../../utils/constants/fetch";

// const fetchOrderProductSlice = createAsyncThunk(
//   "orderProductSlice/fetchOrderProductSlice",
//   async () => {
//     try {
//       const response = await axios.get(`${SWAGGER_API}/api/orders?`);
//       const data = response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// const initialState = {
//   data: {},
// };

// const orderProductSlice = createSlice({
//   name: "orderProductSlice",
//   initialState,
//   reducers: {},
// });

// export const ActionOrderProduct = orderProductSlice.actions;
// export { orderProductSlice, fetchOrderProductSlice };

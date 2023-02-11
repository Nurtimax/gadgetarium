// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import {
//   GADJEDTARIUM_LOGIN_INFO,
//   // SWAGGER_API,
// } from "../../utils/constants/fetch";

// const authRole = JSON.parse(
//   localStorage.getItem(GADJEDTARIUM_LOGIN_INFO) || "{}"
// );
// console.log(authRole?.token);

// const fetchOrderProductSlice = createAsyncThunk(
//   "orderProductSlice/fetchOrderProductSlice",
//   async (params) => {
//     const order = `${
//       params.orderStatus
//         ? `?orderStatus=${params.orderStatus}${
//             params.page
//               ? `&page=${params.page}${
//                   params.size ? `&size=${params.size}` : ""
//                 }`
//               : ""
//           }`
//         : ""
//     }`;
//     console.log(order);
//     console.log(params);
//     try {
//       const response = await axios.get(
//         `http://ec2-54-93-236-116.eu-central-1.compute.amazonaws.com/api/orders`,
//         {
//           // const response = await axios.get(`${SWAGGER_API}/api/orders${order}`, {
//           headers: {
//             // Authorization: `Bearer ${authRole.token}`,
//           },
//           params,
//         }
//       );
//       return response;
//     } catch (error) {
//       throw new Error();
//     }
//   }
// );

// const initialState = {
//   data: [],
// };

// const orderProductSlice = createSlice({
//   name: "orderProductSlice",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchOrderProductSlice.fulfilled]: (state, action) => {
//       console.log(action);
//     },
//   },
// });

// export const ActionOrderProduct = orderProductSlice.actions;
// export { orderProductSlice, fetchOrderProductSlice };

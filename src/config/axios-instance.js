import axios from "axios";
import { ActionauthenticationSlice } from "../redux/slices/authentication-slice";
import { SWAGGER_API } from "../utils/constants/fetch";

const headers = {
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: SWAGGER_API,
  headers,
});

let store;

export const injectStore = (_store) => {
  store = _store;
};

axiosInstance.interceptors.request.use(
  (config) => {
    const updatedConfig = { ...config };

    const { data } = store.getState().auth;

    if (data?.token) {
      if (updatedConfig.headers) {
        updatedConfig.headers.Authorization = `Bearer ${data?.token}`;
      }
    }
    return updatedConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(ActionauthenticationSlice.authLogOut());
      // logout()
      // remove user from local storage
      // reseeet redux state
      return Promise.reject(new Error("500 unauthorized")); // Return the error as a rejected Promise
    }
    if (error.response?.status === 403) {
      store.dispatch(ActionauthenticationSlice.authLogOut());
      // logout()
      // remove user from local storage
      // reseeet redux state
      return Promise.reject(new Error("403 forbidden")); // Return the error as a rejected Promise
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

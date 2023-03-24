import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../config/axios-instance";

const postContacts = createAsyncThunk(
  "contacts/postContacts",
  async (params) => {
    try {
      const response = await axiosInstance.post("users/feedback", params);

      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error("Ошибка");
      }

      return response;
    } catch (error) {
      return error;
    }
  }
);

const contactsForm = createSlice({
  name: "contacts",
  initialState: {},
  reducers: {},
  extraReducers: {},
});

const ActionContacts = contactsForm.actions;
export { ActionContacts, contactsForm, postContacts };

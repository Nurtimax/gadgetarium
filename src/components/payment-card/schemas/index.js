import * as yup from "yup";

export const basicSchema = yup.object().shape({
  cardNumber: yup.string().required("Поле обязательно для заполнения"),
  expiryDate: yup.date().required("Поле обязательно для заполнения"),
  cvc: yup.number().required("Поле обязательно для заполнения"),
  userName: yup.string().required("Поле обязательно для заполнения"),
});

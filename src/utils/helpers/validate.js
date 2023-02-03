import * as yup from "yup";

const emailRegex = "^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$";

export const LoginSchema = yup.object().shape({
  firstname: yup.string().min(2).max(25).required("имя обязательное поле"),
  lastname: yup.string().min(2).max(25).required("фамилия обязательное поле"),
  phoneNumber: yup
    .string()
    .max(19, "номер телефона должен быть не более 13 символов")
    .min(13)
    .matches(
      /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
      "Номер телефона должен быть в формате +996(XXX)XX-XX-XX"
    )
    .required("Номер телефона обязательное поле"),
  email: yup
    .string()
    .email()
    .matches(
      emailRegex,
      "адрес электронной почты должен быть в формате ...@gmail.com"
    )
    .required("Электронная почта обязательное поле"),

  password: yup
    .string()
    .min(6, "Пароль должен содержать не менее 6 знаков")
    .max(100)
    .required("Поле обязательно для ввода пароля"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
    .required("Подтвердите пароль обязательное поле"),
});

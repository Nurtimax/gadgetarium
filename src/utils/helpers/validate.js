import * as yup from "yup";

const emailRegex = "^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$";
const phoneRegex = /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/;

export const singUpValidateSchema = yup.object().shape({
  firstname: yup.string().min(2).max(25).required("имя обязательное поле"),
  lastname: yup.string().min(2).max(25).required("фамилия обязательное поле"),
  phoneNumber: yup
    .string()
    .max(19, "номер телефона должен быть не более 13 символов")
    .min(13)
    .matches(
      phoneRegex,
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

export const singInValidateSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(emailRegex, "email address must be in the format ...@gmail.com")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(100)
    .required("Password is required"),
});

export const orderingValidateSchema = yup.object().shape({
  firstName: yup.string().required("Имя обязательное поле!"),
  lastName: yup.string().required("Фамилия обязательное поле!"),

  phoneNumber: yup
    .string()
    .max(19, "Номер телефона должен быть не более 13 символов!")
    .min(13)
    .required("Номер телефона обязательное поле!")
    .test("valid-phone", "Неправильный формат номера телефона!", (value) => {
      if (!value) return true;
      const phone = value.replace(/[^0-9]/g, "");
      return phone.length === 12 && phone[0] === "9";
    }),

  email: yup
    .string()
    .email()
    .matches(
      emailRegex,
      "Адрес электронной почты должен быть в формате ...@gmail.com!"
    )
    .required("Электронная почта обязательное поле!"),
});
export const orderingValidateSchemaWithAdreess = yup.object().shape({
  firstName: yup.string().required("Имя обязательное поле!"),
  lastName: yup.string().required("Фамилия обязательное поле!"),

  phoneNumber: yup
    .string()
    .max(19, "Номер телефона должен быть не более 13 символов!")
    .min(13)
    .required("Номер телефона обязательное поле!")
    .test("valid-phone", "Неправильный формат номера телефона!", (value) => {
      if (!value) return true;
      const phone = value.replace(/[^0-9]/g, "");
      return phone.length === 12 && phone[0] === "9";
    }),

  email: yup
    .string()
    .email()
    .matches(
      emailRegex,
      "Адрес электронной почты должен быть в формате ...@gmail.com!"
    )
    .required("Электронная почта обязательное поле!"),

  address: yup.string().required("Имя обязательное поле!"),
});

export const paymantValidateSchema = yup.object().shape({
  cardNumber: yup.string().required("Номер карты обязательное поле!"),
  expiryDate: yup.string().required("Дата обязательное поле!"),
  cvc: yup.string().required("СVC обязательное поле!"),
  userName: yup.string().required("Имя владельца обязательное поле!"),
});

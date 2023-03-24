import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  amountOfDiscount: Yup.number()
    .typeError("Сумма скидки должна быть числом")
    .positive("Сумма скидки должна быть положительным числом")
    .required("Требуется сумма скидки"),
  startDate: Yup.date()
    .typeError("Дата начала должна быть действительной датой")
    .required("Укажите дату начала."),
  endDate: Yup.date()
    .typeError("Дата окончания должна быть действительной датой.")
    .required("Укажите дату окончания.")
    .min(
      Yup.ref("startDate"),
      "Дата окончания должна быть позже или равна дате начала"
    ),
  productId: Yup.array()
    .of(Yup.string())
    .min(1, "Требуется хотя бы один продукт")
    .required("Необходимо выбрать хотя бы один продукт"),
});

export default validationSchema;

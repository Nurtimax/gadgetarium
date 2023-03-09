import { toast } from "react-toastify";
import * as yup from "yup";
import { PRODUCT_FORM_KEYS } from "../constants/add-product";

export const addProductSchema = (keys = []) => {
  const mixedKeys = keys.reduce((key, item) => {
    return { ...key, [item.key]: yup.string().required(item.required) };
  }, {});

  const subProductSchema = yup.object().shape({
    countOfProduct: yup.number().required(),
    color: yup.string().required("Color is a required field"),
    images: yup
      .array()
      .min(2, "Поле изображений должно содержать как минимум 2 элемента")
      .max(10, "Mаксимальное количество - 10 фото")
      .of(yup.string().required()),
    characteristics: yup.object().shape({
      ...mixedKeys,
    }),
  });

  const ADDPRODUCT_INITIALSTATESCHEMA = yup.object().shape({
    productName: yup.string().required("Название товара — обязательное поле"),
    guarantee: yup
      .number()
      .positive()
      .integer()
      .required("Гарантия (месяцев) - обязательное поле"),
    brandId: yup
      .number()
      .positive()
      .min(1, "Брент должен выбрать")
      .required("Брент обязательное поле"),
    categoryId: yup
      .number()
      .positive()
      .min(1, "Категория должен выбрать")
      .required("Категория обязательное поле"),
    subCategoryId: yup
      .number()
      .positive()
      .min(1, "Подкатегория должен выбрать")
      .required("Подкатегория обязательное поле"),
    dateOfIssue: yup.date().required("Дата выдачи обязательное поле"),

    subProductRequests: yup.array().of(subProductSchema),
  });
  return ADDPRODUCT_INITIALSTATESCHEMA;
};

export const catchErrorValidationHandler = (errors) => {
  if (Object.keys(errors).length > 3) {
    toast.error("Пожалуйста, введите необходимое поле");
  } else {
    for (const key in errors) {
      if (key === "subProductRequests") {
        for (const index of errors[key]) {
          for (const itemKey in index) {
            if (itemKey === "characteristics") {
              for (const characterictsKeys in index[itemKey]) {
                toast.error(index[itemKey][characterictsKeys]);
              }
            }
            toast.error(index[itemKey]);
          }
        }
      } else {
        toast.error(errors[key]);
      }
    }
  }
};

export const validationHandler = (categoryId, setKeys, setValues, values) => {
  const findedCharacteristicsKeys = PRODUCT_FORM_KEYS.find(
    (product) => product.id === categoryId
  );
  if (findedCharacteristicsKeys) {
    setKeys(findedCharacteristicsKeys.keys);
    const updatedSubProductRequests = values.subProductRequests.map(
      (subProduct) => {
        const updatedCharacteristics = {};
        findedCharacteristicsKeys.keys.forEach((key) => {
          updatedCharacteristics[key] = "";
        });

        return {
          ...subProduct,
          characteristics: updatedCharacteristics,
        };
      }
    );

    setValues({
      ...values,
      subProductRequests: updatedSubProductRequests,
    });
  }
};

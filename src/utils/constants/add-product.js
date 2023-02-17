import {
  AppleIcon,
  HonorIcon,
  HuaweiIcon,
  SamsungIcon,
  XiaomiIcon,
} from "../../assets";
import * as yup from "yup";

export const PRODUCTBRAND = [
  { id: 1, icon: <SamsungIcon />, brandName: "Samsung" },
  { id: 2, icon: <AppleIcon />, brandName: "Apple" },
  { id: 3, icon: <HuaweiIcon />, brandName: "Huawei" },
  { id: 4, icon: <HonorIcon />, brandName: "Honor" },
  { id: 5, icon: <XiaomiIcon />, brandName: "Xiaomi" },
];

export const PRODUCT_INITIALSTATE = {
  productName: "",
  productVendorCode: 11111,
  guarantee: "",
  videoReview: "productVideoReview1",
  description: "new Iphone",
  brandId: "",
  categoryId: "",
  subCategoryId: "",
  subProductRequests: [
    {
      price: "",
      countOfProduct: 222,
      color: "",
      images: [],
      characteristics: {},
    },
  ],
  pdf: "Product pdf 1",
};

export const PRODUCT_INITIALSTATESCHEMA = yup.object().shape({
  productName: yup.string().required("Название товара — обязательное поле"),
  productVendorCode: yup.number(),
  guarantee: yup
    .number()
    .positive()
    .integer()
    .required("Гарантия (месяцев) - обязательное поле"),
  videoReview: yup.string(),
  description: yup.string(),
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
  subProductRequests: yup.array().of(
    yup.object().shape({
      price: yup.number().positive().required(),
      countOfProduct: yup.number(),
      color: yup.string().required("Color is a required field"),
      images: yup
        .array()
        .min(2, "Поле изображений должно содержать как минимум 2 элемента")
        .max(10, "Mаксимальное количество - 10 фото")
        .of(yup.string().required()),
      characteristics: yup.object(),
    })
  ),
  pdf: yup.string(),
});

export const PRODUCT_FORMS_FIELDS = [
  {
    id: 1,
    categoryId: 1,
    content: [
      {
        id: 1,
        name: "Объем памяти",
        key: "memoryOfPhone",
        values: [8, 16, 32, 64, 128, 256, 512],
        choosePlaceholder: "Выберите объем памяти",
        type: "select",
      },
      {
        id: 2,
        name: "Оперативная память",
        key: "ramOfPhone",
        values: [3, 4, 6, 8, 12],
        choosePlaceholder: "Выберите оперативную память",
        type: "select",
      },
      {
        id: 3,
        name: "Кол-во SIM-карт",
        key: "simCard",
        values: [1, 2],
        choosePlaceholder: "Выберите SIM-карты",
        type: "select",
      },
    ],
  },
  {
    id: 2,
    categoryId: 2,
    content: [
      {
        id: 1,
        name: "Процессор ноутбука",
        key: "laptopCPU",
        values: [
          "Intel Core i3",
          "Intel Core i5",
          "Intel Core i7",
          "Intel Core i9",
          "Intel Celeron",
          "Intel Pentium",
          "AMD",
          "Intel Quad Core",
          "Intel Dual Core",
          "AMD Ryzen 3 3250U",
          "Intel Core i7-8565U",
          "AMD Ryzen 7 4700U",
        ],
        choosePlaceholder: "Выберите процессор ноутбука",
        type: "select",
      },
      {
        id: 2,
        name: "Объем видеопамяти (GB)",
        key: "videoCardMemory",
        values: [2, 4, 6, 8, 16],
        choosePlaceholder: "Выберите объем памяти",
        type: "select",
      },
      {
        id: 3,
        name: "Объем оперативной памяти (GB)",
        key: "ramOfLaptop",
        values: [2, 4, 6, 8, 16, 32, 36],
        choosePlaceholder: "Выберите оперативную память",
        type: "select",
      },
      {
        id: 4,
        name: "Размер экрана (дюйм)",
        key: "screenDiagonalOfSmartWatch",
        values: [11.6, 13.3, 14, 15, 15.6, 16, 16.1, 17.3],
        choosePlaceholder: "Выберите Диагональ дисплея (дюйм)",
        type: "select",
      },
      {
        id: 5,
        name: "Разрешение экрана",
        key: "screenResolutionOfLaptop",
        values: [
          "1024x600",
          "1280x800",
          "1366x768",
          "1600x900",
          "1366x768",
          "1920x1080",
          "2160x1440",
          "2560x1600",
          "3072x1920",
          "3840x2160",
        ],
        choosePlaceholder: "Выберите разрешение экрана",
        type: "select",
      },
      {
        id: 6,
        name: "Назначение",
        key: "appointmentOfLaptop",
        values: [
          "Для работы",
          "Мультимедийный",
          "Игровой",
          "Для бизнеса",
          "Для учебы",
          "Офисный",
        ],
        choosePlaceholder: "Выберите Назначение",
        type: "select",
      },
    ],
  },
  {
    id: 3,
    categoryId: 3,
    content: [
      {
        id: 1,
        name: "Объем памяти (GB)",
        key: "memoryOfTablet",
        values: [8, 16, 32, 64, 128, 256],
        choosePlaceholder: "Выберите объем памяти (GB)",
        type: "select",
      },
      {
        id: 2,
        name: "Объем оперативной памяти (GB)",
        key: "ramOfTablet",
        values: [3, 4, 6, 8, 12],
        choosePlaceholder: "Выберите оперативную память",
        type: "select",
      },
      {
        id: 3,
        name: "Размер экрана (дюйм)",
        key: "screenSizeOfTablet",
        values: [14, 15, 16, 11.6, 13.3, 15.6, 16.1, 17.3],
        choosePlaceholder: "Выберите Диагональ дисплея (дюйм)",
        type: "select",
      },
      {
        id: 4,
        name: "Разрешение экрана",
        key: "screenResolutionOfTablet",
        values: [
          "1600x900",
          "1366x768",
          "1920x1080",
          "2560x1600",
          "3072x1920",
          "3840x2160",
        ],
        choosePlaceholder: "Выберите разрешение экрана",
        type: "select",
      },
      {
        id: 5,
        name: "Диагональ экрана (дюйм)",
        key: "screenDiagonalOfTablet",
        values: ["0 - 2 ", "3 - 5", "6 - 8", "9 - 11", "12 - 15"],
        choosePlaceholder: "Выберите разрешение экрана",
        type: "select",
      },
      {
        id: 6,
        name: "Емкость аккумулятора планшета, мА/ч",
        key: "batteryCapacity",
        values: [
          "0 – 2399 мА/час",
          "2400 – 4799 мА/час",
          "4800 – 7199 мА/час",
          "7200 – 9599 мА/ч",
          "9600 – 12000 мА/ч",
        ],
        choosePlaceholder: "Выберите Емкость аккумулятора",
        type: "select",
      },
    ],
  },
  {
    id: 4,
    categoryId: 4,
    content: [
      {
        id: 1,
        name: "Объем памяти",
        key: "memoryOfWatch",
        values: [4, 8, 16, 32],
        choosePlaceholder: "Выберите объем памяти",
        type: "select",
      },
      {
        id: 2,
        name: "Материал браслета/ремешка",
        key: "braceletMaterial",
        values: [
          "Силикон",
          "Кожа",
          "Резина",
          "Пластик",
          "Нейлон",
          "Из искусственной кожи",
          "Имитация керамики",
        ],
        choosePlaceholder: "Выберите материал браслета/ремешка",
        type: "select",
      },
      {
        id: 3,
        name: "Диагональ дисплея (дюйм)",
        key: "screenDiagonalOfSmartWatch",
        values: [1.2, 1.22, 13, 1.4, 1.41, 1.44, 1.54],
        choosePlaceholder: "Выберите диагональ дисплея",
        type: "select",
      },
      {
        id: 4,
        name: "Пол",
        key: "gender",
        values: ["Унисекс", "Женский", "Мужской"],
        choosePlaceholder: "",
        type: "radio",
      },
      {
        id: 5,
        name: "Водонепроницаемые",
        key: "waterProof",
        values: ["Да", "Нет"],
        choosePlaceholder: "",
        type: "radio",
      },
      {
        id: 6,
        name: "Беспроводные интерфейсы",
        key: "wirelessInterface",
        values: ["Bluetooth", "Wi-Fi", "GPS", "NFC"],
        choosePlaceholder: "",
        type: "radio",
      },
      {
        id: 7,
        name: "Форма корпуса",
        key: "caseShape",
        values: ["Квадратная", "Круглая", "Овальная", "Прямоугольная"],
        choosePlaceholder: "",
        type: "radio",
      },
    ],
  },
];

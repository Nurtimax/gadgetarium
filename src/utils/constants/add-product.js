import * as yup from "yup";
import DateTableItem from "../../components/add_product/table/DateTableItem";
import EditPriceTableIItem from "../../components/add_product/table/EditPriceTableIItem";
import EditCountProduct from "../../components/add_product/table/EditCountProduct";
import BrandTableItem from "../../components/add_product/table/BrandTableItem";
import ColorName from "../../components/add_product/fields/ColorName";

export const PRODUCT_INITIALSTATE = {
  productName: "",
  productVendorCode: 11111,
  guarantee: "",
  videoReview: "",
  description: "",
  brandId: "",
  categoryId: "",
  subCategoryId: "",
  subProductRequests: [
    {
      price: 0,
      countOfProduct: 1,
      color: "",
      images: [],
      characteristics: {},
    },
  ],
  pdf: "",
};
export const ADDPRODUCT_INITIALSTATE = {
  productName: "",
  guarantee: "",
  brandId: "",
  categoryId: "",
  subCategoryId: "",
  subProductRequests: [
    {
      price: 0,
      countOfProduct: 1,
      color: "",
      images: [],
      characteristics: {},
    },
  ],
  dateOfIssue: "",
};

export const PRODUCT_INITIALSTATESCHEMA = yup.object().shape({
  productName: yup.string().required("Название товара — обязательное поле"),
  productVendorCode: yup.number(),
  guarantee: yup
    .number()
    .positive()
    .integer()
    .required("Гарантия (месяцев) - обязательное поле"),
  videoReview: yup.string().required("Загрузите видеообзор обязательное поле"),
  description: yup.string().required("Описание обязательное поле"),
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
  pdf: yup.string().required("Загрузите документ PDF обязательное поле"),
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
        key: "ramLaptop",
        values: [2, 4, 6, 8, 16, 32, 36],
        choosePlaceholder: "Выберите оперативную память",
        type: "select",
      },
      {
        id: 4,
        name: "Размер экрана (дюйм)",
        key: "screenSizeLaptop",
        values: [11.6, 13.3, 14, 15, 15.6, 16, 16.1, 17.3],
        choosePlaceholder: "Выберите Диагональ дисплея (дюйм)",
        type: "select",
      },
      {
        id: 5,
        name: "Разрешение экрана",
        key: "screenResolutionLaptop",
        values: [
          "1024x600",
          "1280x800",
          "1366x768",
          "1600x900",
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
        key: "appointmentLaptop",
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
        id: 21,
        name: "Материал корпуса",
        key: "caseMaterial",
        values: [
          "Акриловый",
          "Алюминий",
          "Резина",
          "Керамика",
          "Пластик",
          "Металл",
          "Нержавейщая сталь",
          "Стекло",
        ],
        choosePlaceholder: "Выберите материал корпуса",
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

export const PRODUCT_FORM_KEYS = [
  {
    id: 1,
    keys: [
      {
        id: 1,
        key: "memoryOfPhone",
        required: "Объем памяти обязательное поле",
      },
      {
        id: 2,
        key: "ramOfPhone",
        required: "Оперативная память обязательное поле",
      },
      { id: 3, key: "simCard", required: "Кол-во SIM-карт обязательное поле" },
    ],
  },
  {
    id: 2,
    keys: [
      {
        id: 1,
        key: "laptopCPU",
        required: "Процессор ноутбука обязательное поле",
      },
      {
        id: 2,
        key: "videoCardMemory",
        required: "Объем видеопамяти (GB) обязательное поле",
      },
      {
        id: 3,
        key: "ramLaptop",
        required: "Объем оперативной памяти (GB) обязательное поле",
      },
      {
        id: 4,
        key: "screenSizeLaptop",
        required: "Размер экрана (дюйм) обязательное поле",
      },
      {
        id: 5,
        key: "screenResolutionLaptop",
        required: "Разрешение экрана обязательное поле",
      },
      {
        id: 6,
        key: "appointmentLaptop",
        required: "Назначение обязательное поле",
      },
    ],
  },
  {
    id: 3,
    keys: [
      {
        id: 1,
        key: "memoryOfTablet",
        required: "Объем памяти (GB) обязательное поле",
      },
      {
        id: 2,
        key: "ramOfTablet",
        required: "Объем оперативной памяти (GB) обязательное поле",
      },
      {
        id: 3,
        key: "screenSizeOfTablet",
        required: "Размер экрана (дюйм) обязательные поле",
      },
      {
        id: 4,
        key: "screenResolutionOfTablet",
        required: "Разрешение экрана обязательное поле",
      },
      {
        id: 5,
        key: "screenDiagonalOfTablet",
        required: "Диагональ экрана (дюйм) обязательное поле",
      },
      {
        id: 6,
        key: "batteryCapacity",
        required: "Емкость аккумулятора планшета, мА/ч обязательное поле",
      },
    ],
  },
  {
    id: 4,
    keys: [
      {
        id: 1,
        key: "memoryOfWatch",
        required: "Объем памяти обязательное поле",
      },
      {
        id: 2,
        key: "braceletMaterial",
        required: "Материал браслета/ремешка обязательное поле",
      },
      {
        id: 3,
        key: "caseMaterial",
        required: "Материал корпуса обязательное поле",
      },
      {
        id: 4,
        key: "screenDiagonalOfSmartWatch",
        required: "Диагональ дисплея (дюйм) обязательное поле",
      },
      { id: 5, key: "gender", required: "Пол обязательное поле" },
      {
        id: 6,
        key: "waterProof",
        required: "Водонепроницаемые обязательное поле",
      },
      {
        id: 7,
        key: "wirelessInterface",
        required: "Беспроводные интерфейсы обязательное поле",
      },
      { id: 8, key: "caseShape", required: "Форма корпуса обязательное поле" },
    ],
  },
];

const generalStyles = { padding: "28.5px" };

export const ADD_PRODUCT_TABLE_HEADER_TITLE = [
  {
    Header: "Бренд",
    accessor: "brandId",
    style: {
      flex: 1,
    },
    Cell: () => {
      return <BrandTableItem />;
    },
  },
  {
    Header: "Цвет",
    accessor: "color",
    style: {
      flex: 1.5,
    },
    Cell: ({ row }) => {
      return (
        <div style={generalStyles}>
          <ColorName color={row.original.color} />
        </div>
      );
    },
  },
];

export const ChangeValueTableData = [
  {
    Header: "Дата выпуска",
    accessor: "",
    style: {
      flex: 1.7,
    },
    Cell: ({ row }) => {
      return <DateTableItem id={row.id} />;
    },
  },
  {
    Header: "Кол-во товара",
    accessor: "",
    style: {
      flex: 1.5,
    },
    Cell: ({ row }) => {
      return (
        <EditCountProduct count={row.original.countOfProduct} id={row.id} />
      );
    },
  },
  {
    Header: "Цена",
    accessor: "price",
    style: {
      flex: 1.4,
    },
    Cell: ({ row }) => {
      return <EditPriceTableIItem id={row.id} price={row.original.price} />;
    },
  },
];

export const tableReusibleItems = [
  {
    id: 1,
    keys: [
      { id: 1, key: "memoryOfPhone", name: "Объем памяти", flex: 1.5 },
      { id: 2, key: "ramOfPhone", name: "Оперативная память", flex: 1.5 },
      { id: 3, key: "simCard", name: "Кол-во SIM-карт", flex: 1.5 },
    ],
  },
  {
    id: 2,
    keys: [
      { id: 1, key: "laptopCPU", name: "Процессор ноутбука", flex: 1.5 },
      {
        id: 2,
        key: "videoCardMemory",
        name: "Объем видеопамяти (GB)",
        flex: 2,
      },
      {
        id: 3,
        key: "ramLaptop",
        name: "Объем оперативной памяти (GB)",
        flex: 2,
      },
    ],
  },
  {
    id: 3,
    keys: [
      { id: 1, key: "memoryOfTablet", name: "Объем памяти (GB)", flex: 1.5 },
      {
        id: 2,
        key: "ramOfTablet",
        name: "Объем оперативной памяти (GB)",
        flex: 2,
      },
      {
        id: 3,
        key: "screenResolutionOfTablet",
        name: "Разрешение экрана",
        flex: 1.5,
      },
    ],
  },
  {
    id: 4,
    keys: [
      { id: 1, key: "memoryOfWatch", name: "Объем памяти", flex: 1.5 },
      {
        id: 2,
        key: "braceletMaterial",
        name: "Материал браслета/ремешка",
        flex: 2,
      },
      { id: 3, key: "caseShape", name: "Форма корпуса", flex: 1.5 },
    ],
  },
];

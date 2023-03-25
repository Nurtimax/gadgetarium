export const catalogProductData = [
  {
    id: 1,
    title: "Смартфоны",
    category: {
      type: "Категория",
      subCategory: [
        { id: 11, categoryName: "Apple" },
        { id: 12, categoryName: "Samsung" },
        { id: 13, categoryName: "Huawei" },
        { id: 14, categoryName: "Honor" },
        { id: 15, categoryName: "Xiaomi" },
      ],
    },
    categories: [
      {
        filterCharacteristicsKey: "memories",
        id: 2,
        type: "Объем памяти (GB)",
        subCategory: [
          { id: 1, title: 8 },
          { id: 2, title: 16 },
          { id: 3, title: 32 },
          { id: 4, title: 64 },
          { id: 5, title: 128 },
          { id: 6, title: 256 },
          { id: 7, title: 512 },
        ],
      },
      {
        id: 3,
        type: "Объем оперативной памяти (GB)",
        filterCharacteristicsKey: "rams",
        subCategory: [
          { id: 11, title: 3 },
          { id: 12, title: 4 },
          { id: 13, title: 6 },
          { id: 14, title: 8 },
          { id: 15, title: 12 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Ноутбуки",
    category: {
      type: "Категория",
      subCategory: [
        { id: 11, categoryName: "Acer" },
        { id: 12, categoryName: "Asus" },
        { id: 13, categoryName: "Apple" },
        { id: 14, categoryName: "DELL" },
        { id: 15, categoryName: "Digma" },
        { id: 16, categoryName: "Huawei" },
        { id: 17, categoryName: "HONOR" },
        { id: 18, categoryName: "Lenovo" },
        { id: 19, categoryName: "HP" },
        { id: 20, categoryName: "MSI" },
        { id: 21, categoryName: "Xiaomi" },
      ],
    },
    categories: [
      {
        id: 2,
        type: "Процессор ноутбука",
        filterCharacteristicsKey: "laptopCPUs",
        subCategory: [
          { id: 1, title: "Intel Core i3" },
          { id: 2, title: "Intel Core i5" },
          { id: 3, title: "Intel Core i7" },
          { id: 4, title: "Intel Core i9" },
          { id: 5, title: "Intel Celeron" },
          { id: 6, title: "Intel Pentium" },
          { id: 7, title: "AMD" },
          { id: 8, title: "Intel Quad Core" },
          { id: 9, title: "Intel Dual Core" },
          { id: 10, title: "AMD Ryzen 3 3250U" },
          { id: 15, title: "AMD Ryzen 5" },
          { id: 11, title: "Intel Core i7-8565U" },
          { id: 12, title: "AMD Ryzen 7 4700U" },
          { id: 13, title: "Apple M1" },
          { id: 14, title: "Apple M1 Pro" },
        ],
      },

      {
        id: 3,
        type: "Разрешение экрана",
        filterCharacteristicsKey: "screenResolutionss",
        subCategory: [
          { id: 1, title: "1024x600" },
          { id: 2, title: "1280x800" },
          { id: 3, title: "1366x768" },
          { id: 4, title: "1600x900" },
          { id: 6, title: "1920x1080" },
          { id: 7, title: "2160x1440" },
          { id: 11, title: "2388x1668" },
          { id: 8, title: "2560x1600" },
          { id: 9, title: "3072x1920" },
          { id: 10, title: "3840x2160" },
        ],
      },
      {
        id: 5,
        type: "Объем памяти (GB)",
        filterCharacteristicsKey: "memories",
        subCategory: [
          { id: 11, title: 2 },
          { id: 22, title: 4 },
          { id: 33, title: 6 },
          { id: 44, title: 8 },
          { id: 55, title: 16 },
        ],
      },
      {
        id: 6,
        type: "Объем оперативной памяти (GB)",
        filterCharacteristicsKey: "rams",
        subCategory: [
          { id: 16, title: 2 },
          { id: 17, title: 4 },
          { id: 18, title: 8 },
          { id: 19, title: 16 },
          { id: 20, title: 32 },
          { id: 21, title: 36 },
        ],
      },
      {
        id: 7,
        type: "Размер экрана (дюйм)",
        filterCharacteristicsKey: "screenSizes",
        subCategory: [
          { id: 1, title: 11.6 },
          { id: 2, title: 13.3 },
          { id: 4, title: 14 },
          { id: 5, title: 15 },
          { id: 6, title: 15.6 },
          { id: 7, title: 16 },
          { id: 8, title: 16.1 },
          { id: 9, title: 17.3 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Планшеты",
    category: {
      type: "Категория",
      subCategory: [
        { id: 11, categoryName: "Acer" },
        { id: 12, categoryName: "Asus" },
        { id: 13, categoryName: "Apple" },
        { id: 14, categoryName: "DELL" },
        { id: 15, categoryName: "Digma" },
        { id: 16, categoryName: "Huawei" },
        { id: 17, categoryName: "HONOR" },
        { id: 18, categoryName: "Lenovo" },
        { id: 19, categoryName: "HP" },
        { id: 20, categoryName: "MSI" },
        { id: 21, categoryName: "Xiaomi" },
      ],
    },
    categories: [
      {
        id: 3,
        type: "Разрешение экрана",
        filterCharacteristicsKey: "screenResolutions",
        subCategory: [
          { id: 10, title: "1600x900" },
          { id: 20, title: "1366x768" },
          { id: 30, title: "1920x1080" },
          { id: 40, title: "2560x1600" },
          { id: 70, title: "2388x1668" },
          { id: 50, title: "3072x1920" },
          { id: 60, title: "3840x2160" },
        ],
      },
      {
        id: 5,
        type: "Объем памяти (GB)",
        filterCharacteristicsKey: "memories",
        subCategory: [
          { id: 12, title: 8 },
          { id: 21, title: 16 },
          { id: 34, title: 32 },
          { id: 43, title: 64 },
          { id: 56, title: 128 },
          { id: 65, title: 256 },
        ],
      },
      {
        id: 6,
        type: "Объем оперативной памяти (GB)",
        filterCharacteristicsKey: "rams",
        subCategory: [
          { id: 31, title: 3 },
          { id: 32, title: 4 },
          { id: 34, title: 6 },
          { id: 35, title: 8 },
          { id: 36, title: 12 },
        ],
      },
      {
        id: 7,
        type: "Размер экрана (дюйм)",
        filterCharacteristicsKey: "screenSizes",
        subCategory: [
          { id: 41, title: 14 },
          { id: 42, title: 15 },
          { id: 44, title: 16 },
          { id: 50, title: 11 },
          { id: 45, title: 11.6 },
          { id: 46, title: 13.3 },
          { id: 47, title: 15.6 },
          { id: 48, title: 16.1 },
          { id: 49, title: 17.3 },
        ],
      },
      {
        id: 8,
        type: "Диагональ экрана (дюйм)",
        filterCharacteristicsKey: "screenDiagonals",
        subCategory: [
          { id: 1, title: "0 - 2" },
          { id: 2, title: "3 - 5" },
          { id: 4, title: "6 - 8" },
          { id: 5, title: "9 - 11" },
          { id: 6, title: "12 - 15" },
        ],
      },
      {
        id: 9,
        type: "Емкость аккумулятора планшета, мА/ч",
        filterCharacteristicsKey: "batteryCapacities",
        subCategory: [
          { id: 1, title: "0 - 2399мА/час" },
          { id: 2, title: "2400 - 4799 мА/час" },
          { id: 4, title: "4800 - 7199мА/час" },
          { id: 5, title: "7200 - 9599мА/час" },
          { id: 6, title: "9600 - 12000мА/час" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Смарт-часы и браслеты ",
    category: {
      type: "Категория",
      subCategory: [
        { id: 11, categoryName: "Смарт-часы Apple Watch" },
        { id: 12, categoryName: "Умные часы для взрослых" },
        { id: 13, categoryName: "Умные часы для детей" },
        { id: 14, categoryName: "Фитнес браслеты" },
      ],
    },
    categories: [
      {
        id: 3,
        type: "Беспроводные интерфейсы",
        filterCharacteristicsKey: "wirelessInterfaces",
        subCategory: [
          { id: 1, title: "Bluetooth" },
          { id: 2, title: "Wi-Fi" },
          { id: 3, title: "GPS" },
          { id: 4, title: "NFC" },
        ],
      },
      {
        id: 5,
        type: "Объем памяти (GB)",
        filterCharacteristicsKey: "memories",
        subCategory: [
          { id: 13, title: 4 },
          { id: 28, title: 8 },
          { id: 36, title: 16 },
          { id: 42, title: 32 },
        ],
      },
      {
        id: 6,
        type: "Форма корпуса",
        filterCharacteristicsKey: "caseShapes",
        subCategory: [
          { id: 1, title: "Квадратная" },
          { id: 2, title: "Круглая" },
          { id: 4, title: "Овальная" },
          { id: 5, title: "Прямоугольная" },
        ],
      },
      {
        id: 7,
        type: "Материал браслета/ремешка",
        filterCharacteristicsKey: "braceletMaterials",
        subCategory: [
          { id: 1, title: "Силикон" },
          { id: 2, title: "Кожа" },
          { id: 4, title: "Резина" },
          { id: 5, title: "Пластик" },
          { id: 6, title: "Нейлон" },
          { id: 7, title: "Из искусственной кожи" },
          { id: 8, title: "Имитация керамики" },
        ],
      },
      {
        id: 8,
        type: "Материал корпуса",
        filterCharacteristicsKey: "housingMaterials",
        subCategory: [
          { id: 1, title: "Акриловый" },
          { id: 2, title: "Алюминий" },
          { id: 4, title: "Керамика" },
          { id: 5, title: "Пластик" },
          { id: 6, title: "Металл" },
          { id: 7, title: "Нержавейщая сталь" },
          { id: 8, title: "Стекло" },
        ],
      },
      {
        id: 9,
        type: "Пол",
        filterCharacteristicsKey: "genders",
        subCategory: [
          { id: 1, title: "Унисекс" },
          { id: 2, title: "Женский" },
          { id: 4, title: "Мужской" },
        ],
      },
      {
        id: 10,
        type: "Водонепроницаемые",
        filterCharacteristicsKey: "waterProofs",
        subCategory: [
          { id: 1, title: "Да" },
          { id: 2, title: "Нет" },
        ],
      },
      {
        id: 11,
        type: "Диагональ дисплея (дюйм)",
        filterCharacteristicsKey: "screenDiagonals",
        subCategory: [
          { id: 1, title: 1.2 },
          { id: 2, title: 1.22 },
          { id: 3, title: 13 },
          { id: 4, title: 1.4 },
          { id: 5, title: 1.41 },
          { id: 6, title: 1.44 },
          { id: 7, title: 1.54 },
        ],
      },
    ],
  },
];

export const CATALOG_PRODUCTS_FILTERS_KEYS = [
  "subCategoryNames",
  "colors",
  "memories",
  "rams",
  "laptopCPUs",
  "screenSizes",
  "screenResolutions",
  "screenDiagonals",
  "batteryCapacities",
  "wirelessInterfaces",
  "caseShapes",
  "braceletMaterials",
  "housingMaterials",
  "genders",
  "waterProofs",
];

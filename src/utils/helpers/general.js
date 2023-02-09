export const priceProductSeparate = (number) => {
  return number.toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
};

export const handleWidthItems = (key) => {
  switch (key) {
    case "ID":
      return 0.5;
    case "Фото":
      return 0.9;
    case "Артикул":
      return 1.2;
    case "Наименование товара":
      return 2.4;
    case "Дата создания":
      return 1.7;
    case "Кол-во":
      return 1.4;
    case "Цена товара":
      return 1.4;
    case "Текущая цена":
      return 1.6;
    default:
      return false;
  }
};

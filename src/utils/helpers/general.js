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

export const handleWidthItemsOrders = (key) => {
  switch (key) {
    case "ID":
      return 0.5;
    case "ФИО":
      return 1.7;
    case "Номер/дата":
      return 1.8;
    case "Кол-во":
      return 1.4;
    case "Общая сумма":
      return 1.9;
    case "Оформление заказа":
      return 2;
    case "Статус":
      return 1.8;
    case "Действия":
      return 0;
    default:
      return false;
  }
};

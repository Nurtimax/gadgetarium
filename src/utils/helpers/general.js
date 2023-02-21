export const priceProductSeparate = (number) => {
  return number.toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
};

export const checkInOrderType = (key) => {
  switch (key) {
    case "PICKUP":
      return "Самовывоз";
    case "DELIVERY":
      return "Доставка";
    default:
      return "";
  }
};

export const checkInOrderStatus = (key) => {
  switch (key) {
    case "PICKUP":
      return "Самовывоз";
    case "DELIVERY":
      return "Доставка";
    case "WAITING":
      return "В ожидании";
    case "IN_PROCESSING":
      return "В обработке";
    case "ON_THE_WAY":
      return "Курьер в пути";
    case "DELIVERED":
      return "Доставлен";
    case "CANCEL":
      return "Отменить";
    default:
      return "";
  }
};

export const checkTabName = (key, size) => {
  switch (key) {
    case "В ожидании":
      return size.WAITING ? `(${size.WAITING})` : "";
    case "В обработке":
      return size.IN_PROCESSING ? `(${size.IN_PROCESSING})` : "";
    case "Курьер в пути":
      return size.ON_THE_WAY ? `(${size.ON_THE_WAY})` : "";
    case "Доставлены":
      return size.DELIVERED ? `(${size.DELIVERED})` : "";
    case "Отменены":
      return size.CANCEL ? `(${size.CANCEL})` : "";
    default:
      return "";
  }
};

export const orderStatus = (orderTitle) => {
  switch (orderTitle) {
    case "DELIVERED":
      return "Доставлен";

    case "CANCEL":
      return "Отменен";
    case "WAITING":
      return "В ожидании";
    case "ON_THE_WAY":
      return "В пути";
    case "IN_PROCESSING":
      return "В процессе";

    default:
      return null;
  }
};

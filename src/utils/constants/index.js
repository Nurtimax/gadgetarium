import {
  CartIcon,
  ComparativeIcon,
  ComporativePinkIcon,
  HeartIcon,
} from "../../assets";

export const dataDigitalBestSeller = [
  "https://img.freepik.com/free-photo/laptop-pens-phone-note-with-blank-screen-on-table_155003-5339.jpg?size=626&ext=jpg&ga=GA1.1.1780412916.1673425944",

  "https://img.freepik.com/premium-photo/purple-laptop-3d-illustration-dark-background-black-desk-laptop-computer-with-color-pink-purple-light-display_37129-947.jpg?size=626&ext=jpg&ga=GA1.1.1780412916.1673425944",

  "https://img.freepik.com/free-photo/attractive-young-couple-using-devices-together-tablet-laptop-smartphone-headphones-wireless-communication-gadgets-concept-technologies-connecting-people-in-self-insulation-lifestyle-at-home_155003-39115.jpg?size=626&ext=jpg&ga=GA1.1.1780412916.1673425944",

  "https://img.freepik.com/free-photo/books-and-laptop-assortment_23-2149765831.jpg?size=626&ext=jpg&ga=GA1.1.1780412916.1673425944",

  "https://img.freepik.com/free-photo/man-wearing-vr-glasses-with-blue-light_23-2148864958.jpg?size=626&ext=jpg&ga=GA1.1.1780412916.1673425944",

  "https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?size=626&ext=jpg&ga=GA1.1.1780412916.1673425944",

  "https://img.freepik.com/free-photo/smiling-brown-and-white-basenji-dog-listening-to-music-in-large-black-wireless-headphones-isolated-on-white_346278-1668.jpg?size=626&ext=jpg&ga=GA1.2.1780412916.1673425944",
  "https://img.freepik.com/free-photo/laptop-with-blank-black-screen-on-a-white-table_53876-97915.jpg?size=626&ext=jpg&ga=GA1.1.1780412916.1673425944",
  "https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-101286.jpg?size=626&ext=jpg&ga=GA1.1.1780412916.1673425944",
  "https://img.freepik.com/free-photo/charming-lucky-goodlooking-energized-young-blond-caucasian-girl-blurred-behind-stretch-hand-show-camera-smartphone-display-promoting-phone-application-gadget-standing-white-background_176420-55485.jpg?size=626&ext=jpg&ga=GA1.1.1780412916.1673425944",
  "https://img.freepik.com/premium-photo/modern-desktop-and-laptop-computers-with-sample-software-interfaces-on-the-screen-isolated-on-white_746318-3.jpg?size=626&ext=jpg&ga=GA1.1.1780412916.1673425944",
  "https://808.media/wp-content/uploads/2021/03/airpods-pro.jpg",
];

export const userPages = [
  { id: 11, theme: "Главная" },
  { id: 12, theme: "О магазине" },
  { id: 13, theme: "Доставка" },
  { id: 14, theme: "FAG" },
  { id: 15, theme: "Контакты" },
];
export const adminPage = [
  { id: 22, theme: "Товары" },
  { id: 23, theme: "Заказы" },
  { id: 24, theme: "Отзывы и рейтинг" },
];

export const iconsData = [
  {
    id: 1,
    tooltip_title_compative_add: "Добавить к сравнению",
    tooltip_title_compative_remove: "Удалить из сравнения",
    iconDefault: <ComparativeIcon />,
    iconRemoveItem: <ComporativePinkIcon />,
    title: "comporative",
    badgeContent: [],
    className: "dispatch_message",
    color: "error",
    placementTooltip: "top",
    focused: false,
  },
  {
    id: 2,
    tooltip_title_compative_add: "Добавить в избранное",
    tooltip_title_compative_remove: "Удалить из избранного",
    iconDefault: <HeartIcon />,
    iconRemoveItem: <ComporativePinkIcon />,
    title: "heart",
    badgeContent: [],
    className: "dispatch_message",
    color: "error",
    placementTooltip: "top",
    focused: false,
  },
  {
    id: 3,
    tooltip_title_compative_add: "come on",
    tooltip_title_compative_remove: "Удалить из избранного",
    iconDefault: <CartIcon />,
    iconRemoveItem: <CartIcon />,
    title: "cart",
    cartItem: [],
    badgeContent: [],
    className: "show_cart_items",
    color: "error",
    placementTooltip: "bottom",
    focused: false,
  },
];

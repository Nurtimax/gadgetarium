import {
  CartIcon,
  ComparativeIcon,
  ComporativePinkIcon,
  FaceBookIcon,
  HeartActiveIcon,
  HeartIcon,
  InstagramIcon,
  WhatsAppIcon,
  CardUponReceiptIcon,
  CashIcon,
  ComputerIcon,
  DeleteIcon,
  DeliveryIcon,
  EditIcon,
  PaymentByCardIcon,
  PhoneIcon,
  SmartWatchIcon,
  WalletIcon,
} from "../../assets";
import ImageTable from "../../assets/images/imageTables.png";

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
  { id: 11, theme: "Главная", to: "/" },
  { id: 12, theme: "О магазине", to: "about" },
  { id: 13, theme: "Доставка", to: "delivery" },
  { id: 14, theme: "FAG", to: "fag" },
  { id: 15, theme: "Контакты", to: "contacts" },
];

export const adminPage = [
  { id: 22, theme: "Товары", to: "goods" },
  { id: 23, theme: "Заказы", to: "orders" },
  { id: 24, theme: "Отзывы и рейтинг", to: "reviews-rating" },
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
    addedTitle: "Товар добавлен в список сравнения!",
    transitionTitle: "Перейти к сравнению",
  },
  {
    id: 2,
    tooltip_title_compative_add: "Добавить в избранное",
    tooltip_title_compative_remove: "Удалить из избранного",
    iconDefault: <HeartIcon />,
    iconRemoveItem: <HeartActiveIcon />,
    title: "heart",
    badgeContent: [],
    className: "dispatch_message",
    color: "error",
    placementTooltip: "top",
    focused: false,
    addedTitle: "Товар добавлен в избранное!",
    transitionTitle: "Перейти в избранное",
  },
  {
    id: 3,
    tooltip_title_compative_add: "",
    tooltip_title_compative_remove: "Удалить из избранного",
    iconDefault: <CartIcon />,
    iconRemoveItem: <CartIcon />,
    title: "cart",
    cartItem: [],
    badgeContent: [],
    className: "show_cart_items",
    color: "error",
    placementTooltip: "bottom-end",
    focused: false,
    addedTitle: "Товар успешно добавлен в корзину!",
    transitionTitle: "Перейти в корзину",
  },
];

export const socialIconsData = [
  { id: 1, icon: <FaceBookIcon />, href: "https://www.facebook.com/" },
  { id: 3, icon: <InstagramIcon />, href: "https://www.instagram.com/" },
  { id: 2, icon: <WhatsAppIcon />, href: "https://web.whatsapp.com/" },
];

export const contactsData = [
  { title: "Адрес:", value: "г. Бишкек, ул. Гражданская 119" },
  { title: "Телефон:", value: "г+996(400) 00-00-00" },
  { title: "Почта:", value: "Gadgetarium.kg" },
  { title: "Режим работы:", value: "10:00 - 21:00" },
];

export const URLMAP =
  "https://yandex.ru/map-widget/v1/?um=constructor%3A7c9e32c235e852302eb25a02c6b96f88cbebb9457e9a77022bb71341ecfb86e7&amp;source=constructor";

export const delivery = [
  {
    id: 1,
    deliveryIcon: <DeliveryIcon />,
    caption: "Самовывоз со склада",
    title: "Забрать в течение 14 дней",
    walletIcon: <WalletIcon />,
    text: " Предоплата не требуется",
  },
  {
    id: 2,
    deliveryIcon: <DeliveryIcon />,
    caption: "Самовывоз из магазина",
    title: "Забрать в течение 14 дней",
    walletIcon: <WalletIcon />,
    text: " Предоплата не требуется",
  },
  {
    id: 3,
    deliveryIcon: <DeliveryIcon />,
    caption: "Доставка",
    title:
      " По городу 200сом, по регионам Бесплатная доставка при покупках свыше — 10 000с.",
    walletIcon: <WalletIcon />,
    text: " Предоплата не требуется",
  },
];
export const paymentMethod = [
  {
    id: 1,
    paymentIcon: <PaymentByCardIcon />,
    paymentText: "Оплата картой онлайн",
  },
  {
    id: 2,
    paymentIcon: <CashIcon />,
    paymentText: "Наличными при получении",
  },
  {
    id: 3,
    paymentIcon: <CardUponReceiptIcon />,
    paymentText: "Картой при получении",
  },
];

export const catalogMenu_FAKE_DATA = [
  {
    id: 1,
    title: "Смартфоны",
    icon: <PhoneIcon />,
    subcategories: [
      { id: 1, title: "Apple" },
      { id: 2, title: "Sumsung" },
      { id: 3, title: "Huawei" },
      { id: 4, title: "Honor" },
      { id: 5, title: "Xiaomi" },
    ],
  },
  {
    id: 2,
    title: "Ноутбуки и планшеты ",
    icon: <ComputerIcon />,
    subcategories: [
      { id: 1, title: "Acer" },
      { id: 2, title: "Asus" },
      { id: 3, title: "Apple" },
      { id: 4, title: "DELL" },
      { id: 5, title: "Digma" },
      { id: 6, title: "Huawei" },
      { id: 7, title: "HONOR" },
      { id: 8, title: "Lenovo" },
      { id: 9, title: "HP" },
      { id: 10, title: "MSI" },
      { id: 11, title: "Xiaomi" },
    ],
  },
  {
    id: 3,
    title: "Смарт-часы и браслеты ",
    icon: <SmartWatchIcon />,
    subcategories: [
      { id: 1, title: "Смарт-часы Apple Watch" },
      { id: 2, title: "Умные часы для взрослых" },
      { id: 3, title: "Умные часы для детей" },
      { id: 4, title: "Фитнес браслеты" },
    ],
  },
];
export const titlesTables = [
  "ID",
  "Фото",
  "Артикул",
  "Наименование товара",
  "Дата создания",
  "Кол-во",
  "Цена товара",
  "Текущая цена",
  "Действия",
];

export const dataTables = [
  {
    id: 1,
    photo: ImageTable,
    vendor: 123456789,
    nameOfProduct: {
      quantityProduct: "Кол-во товара 105шт.",
      model: "Samsung Galaxy S21... ",
    },

    createOfDate: {
      date: "05.05.2022",
      time: "12:05",
    },

    quantity: 1,

    priceOfProduct: {
      price: "50 000c",
      discount: "15%",
    },

    currentPrice: "45 000c",

    action: {
      edit: <EditIcon />,
      delete: <DeleteIcon />,
    },
  },

  {
    id: 2,
    photo: ImageTable,
    vendor: 123456789,
    nameOfProduct: {
      quantityProduct: "Кол-во товара 105шт.",
      model: "Samsung Galaxy S21... ",
    },

    createOfDate: {
      date: "05.05.2022",
      time: "12:05",
    },

    quantity: 1,

    priceOfProduct: {
      price: "50 000c",
      discount: "15%",
    },

    currentPrice: "45 000c",

    action: {
      edit: <EditIcon />,
      delete: <DeleteIcon />,
    },
  },
];

export const userProfileStatus_FAKE_DATA = {
  enter: [
    { id: 1, title: "Войти", link: "" },
    { id: 2, title: "Регистрация", link: "" },
  ],
  enteredLogIn: [
    { id: 1, title: "История заказов", link: "" },
    { id: 2, title: "Избранное", link: "" },
    { id: 3, title: "Профиль", link: "" },
    { id: 4, title: "Выйти", link: "" },
  ],
  logIn: false,
};

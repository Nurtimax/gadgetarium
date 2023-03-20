import {
  CartIcon,
  ComparativeIcon,
  FaceBookIcon,
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
import TabletMacIcon from "@mui/icons-material/TabletMac";
import { ROUTES } from "./routes";

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
  { id: 14, theme: "FAQ", to: "fag" },
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
    iconRemoveItem: <ComparativeIcon />,
    title: "comporative",
    compareItem: [],
    badgeContent: [],
    className: "dispatch_message",
    color: "error",
    placementTooltip: "bottom-end",
    focused: false,
    addedTitle: "Товар добавлен в список сравнения!",
    transitionTitle: "Перейти к сравнению",
    link: ROUTES.COMPATISONPRODUCT,
  },
  {
    id: 2,
    tooltip_title_compative_add: "Добавить в избранное",
    tooltip_title_compative_remove: "Удалить из избранного",
    iconDefault: <HeartIcon />,
    iconRemoveItem: <HeartIcon />,
    title: "favorite",
    favoriteItem: [],
    badgeContent: [],
    className: "dispatch_message",
    color: "error",
    placementTooltip: "bottom-end",
    focused: false,
    addedTitle: "Товар добавлен в избранное!",
    transitionTitle: "Перейти в избранное",
    link: ROUTES.LIKE,
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
    link: ROUTES.CART,
  },
];

export const socialIconsData = [
  { id: 1, icon: <FaceBookIcon />, href: "https://www.facebook.com/" },
  { id: 3, icon: <InstagramIcon />, href: "https://www.instagram.com/" },
  { id: 2, icon: <WhatsAppIcon />, href: "https://web.whatsapp.com/" },
];

export const contactsData = [
  {
    title: "Адрес:",
    value: (
      <a href="https://go.2gis.com/0u9l3"> г. Бишкек, ул. Гражданская 119</a>
    ),
  },
  {
    title: "Телефон:",
    value: <a href="tel:+996(400) 00-00-00">г+996(400) 00-00-00</a>,
  },
  {
    title: "Почта:",
    value: <a href="mailto:zumanovaliser814@gmail.com">Gadgetarium.kg</a>,
  },
  { title: "Режим работы:", value: "10:00 - 21:00" },
];

export const URLMAP =
  "https://yandex.ru/map-widget/v1/?um=constructor%3Af5cc5d7b69388368d81e6fe3dc52745e81d656c14acad83d1ddcbe6bd8f0b806&amp;source=constructor";

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
    title: "Ноутбуки",
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
    title: "Планшеты",
    icon: <TabletMacIcon color="disabled" />,
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
    id: 4,
    title: "Смарт-часы и браслеты",
    icon: <SmartWatchIcon />,
    subcategories: [
      { id: 1, title: "Смарт-часы Apple Watch" },
      { id: 2, title: "Умные часы для взрослых" },
      { id: 3, title: "Умные часы для детей" },
      { id: 4, title: "Фитнес браслеты" },
    ],
  },
];
export const characteristicas = [
  { id: 1, title: "Основные xарактеристики", panel: "panel1" },

  { id: 2, title: "Память и процессор", panel: "panel2" },
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
    { id: 1, title: "Войти", link: "sign-in" },
    { id: 2, title: "Регистрация", link: "sign-up" },
  ],
  enteredLogIn: [
    { id: 1, title: "История заказов", link: "/vip/history" },
    { id: 2, title: "Избранное", link: "like" },
    { id: 3, title: "Профиль", link: "profile" },
    { id: 4, title: "Выйти", link: "" },
  ],
  logIn: false,
};

export const TAB_ITEMS = [
  {
    id: 1,
    param: "description",
    label: "Описание",
  },
  {
    id: 2,
    param: "characteristics",
    label: "Характеристики",
  },
  { id: 3, param: "reviews", label: "Отзывы" },
  {
    id: 4,
    param: "shipping-and-payment",
    label: "Доставка и оплата",
  },
];

export const SEARCH_PARAMS = {
  CONTENT: "content",
};

export const dataAboutStore = {
  textLi: [
    {
      li: (
        <>
          слаженная команда людей, любящих спорт и здоровый образ жизни знающих
          свое дело и ориентирующихся <br /> во всех нюансах фитнес
          оборудования;
        </>
      ),
    },

    {
      li: (
        <>
          широкая номенклатура качественной продукции ведущих мировых брендов с
          огромным выбором товаров в <br /> наличии;
        </>
      ),
    },

    {
      li: (
        <>
          склад запчастей для обеспечения качественного сервиса и бесперебойной
          работы оборудования;
        </>
      ),
    },
    {
      li: (
        <>
          полный послепродажный сервис с информационной и технической
          поддержкой;
        </>
      ),
    },

    {
      li: <>строгое соблюдение всех обязательств перед партнерами;</>,
    },

    {
      li: <>отличные цены и эксклюзивные условия для постоянных партнеров.</>,
    },
  ],
  textTwoBigText: [
    {
      text: (
        <>
          Развитие цифровых технологий привело к тому, что рациональное
          отношение человека к своему времени стало <br /> ведущим трендом,
          определяющим то, как ведут себя потребители. Именно по этой <br />{" "}
          причине те сервисы, которые дают возможность использовать время
          наиболее оптимально, становятся востребованными: <br /> выгул собак,
          уборка дома, каршеринг. Все эти появившиеся за последнее время сервисы
          не что иное, как отражение этого <br /> тренда. Этот запрос
          распространяется даже на состав продуктов и их упаковку. Среди ярких
          примеров — напитки, <br />
          содержащие все необходимые питательные вещества и повышенное
          количество
        </>
      ),
    },

    {
      text: (
        <>
          Ассортимент cамая распространенная ошибка — копирование
          офлайн-ассортимента. Нельзя взять бестселлеры <br /> из офлайн и
          перенести их в онлайн. Они не повторят своего успеха. У многих есть
          <br /> иллюзия, что онлайн-полка бесконечна, но на самом деле она
          намного уже, чем, например, в супермаркете. Все чаще <br />
          выбор товаров происходит со смартфона, и если в магазине вы видите на
          полке 100 или 200 категорий товаров, то в <br /> интернете
          пользователи готовы просматривать всего 10–20 из них. Чтобы покупатель
          обратил внимание <br /> именно на вас, придется постараться.
        </>
      ),
    },
  ],

  textThreeBigText: [
    {
      text: (
        <>
          Информированность и доступ к информации в любой момент <br />
          времени – становится особой ценностью на сегодняшний день. <br />
          одной стороны, быть все время на связи нам помогают <br />
          постоянно совершенствующиеся другие гаджеты.
        </>
      ),
    },

    {
      text: (
        <>
          В наше время Интернет приобретает колоссальные масштабы. <br />
          Современный человек, который не хочет отставать от <br /> жизни, уже
          не представляет работу на компьютере без <br /> Интернета. С его
          помощью пользователь может <br /> общаться и получать нужную
          информацию. Существует <br /> большой выбор телекоммуникационных
          компаний <br /> с различными условиями обслуживания.
        </>
      ),
    },
  ],
};

export const DUMMY_PRODUCT_DATA = [
  {
    id: 1,
    theme: "iphone",
  },
  {
    id: 2,
    theme: "sumsung",
  },
  {
    id: 3,
    theme: "huawei",
  },
  {
    id: 4,
    theme: "redmi",
  },
];

export const TAB_ITEMS_ORDER = [
  {
    id: 1,
    tabTitle: "WAITING",
    title: "В ожидании",
  },
  {
    id: 2,
    tabTitle: "IN_PROCESSING",
    title: "В обработке",
  },
  {
    id: 3,
    tabTitle: "ON_THE_WAY",
    title: "Курьер в пути",
  },
  {
    id: 4,
    tabTitle: "DELIVERED",
    title: "Доставлены",
  },
  {
    id: 5,
    tabTitle: "CANCEL",
    title: "Отменены",
  },
];

export const SECOND_TABS_DATA_ORDERS = [
  {
    id: "1",
    title: "За день",
    titlePanel: "Доставлено товаров на сумму",
    currentDuring: {
      text: "Текущий период",
      price: "120 000",
    },
    previousDuring: {
      text: "Предыдущий период",
      price: "100 500",
    },
  },

  {
    id: "2",
    title: "За месяц",
    titlePanel: "Доставлено товаров на сумму",
    currentDuring: {
      text: "Текущий период",
      price: "190 000",
    },
    previousDuring: {
      text: "Предыдущий период",
      price: "150 500",
    },
  },

  {
    id: "3",
    title: "За год",
    titlePanel: "Доставлено товаров на сумму",
    currentDuring: {
      text: "Текущий период",
      price: "130 000",
    },
    previousDuring: {
      text: "Предыдущий период",
      price: "110 500",
    },
  },
];

export const OrdersTableListData = [
  {
    id: 1,
    fullname: "Syimyk Ravshanbekov",
    orderNumber: "466247",
    dateOfOrder: "2021-09-13T18:20:03",
    countOfProduct: 3,
    totalSum: 217900,
    totalDiscount: 2043870,
    designOrder: "Самовывоз",
    status: "В обработке",
    action: <DeleteIcon />,
  },

  {
    id: 1,
    fullname: "Syimyk Ravshanbekov",
    orderNumber: "466247",
    dateOfOrder: "2021-09-13T18:20:03",
    countOfProduct: 3,
    totalSum: 217900,
    totalDiscount: 204387,
    designOrder: "Доставка",
    status: "В обработке",
    action: <DeleteIcon />,
  },
];

export const titlesOrderPopUpOne = [
  { text: "В ожидании", tab: "WAITING" },
  { text: "Готов к выдаче", tab: "IN_PROCESSING" },
  { text: "Получен", tab: "DELIVERED" },
  { text: "Отменено", tab: "CANCEL" },
];

export const titlesOrderPopUpTwo = [
  { text: "В ожидании", tab: "WAITING" },
  { text: "Готов к выдаче", tab: "IN_PROCESSING" },
  { text: "Курьер в пути", tab: "ON_THE_WAY" },
  { text: "Доставлен", tab: "DELIVERED" },
  { text: "Отменено", tab: "CANCEL" },
];

export const ITEM_SORT = [
  { id: 1, title: "Новинки" },
  {
    id: 2,
    title: "По акции",
    subcategories: [
      {
        id: 1,
        title: "Все акции",
      },
      {
        id: 2,
        title: "До 50%",
      },
      {
        id: 3,
        title: "Свыше 50%",
      },
    ],
  },
  { id: 3, title: "Рекомендуемые" },
  { id: 4, title: "По увеличению цены" },
  { id: 5, title: "По уменьшению цены" },
];

export const notFoundImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGbwe-jg6PydY6QXFnfHtw4KuLq448Q_AAciwxsGRZg&s";

export const TAB_ITEMS_COMPARE = [
  {
    id: 1,
    tabTitle: "Phone",
    title: "Смартфоны(7)",
  },
  {
    id: 2,
    tabTitle: "Laptop",
    title: "Ноутбуки (3)",
  },
  {
    id: 3,
    tabTitle: "Headphone",
    title: "Наушники (1)",
  },
];

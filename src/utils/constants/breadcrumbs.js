import AdminOrdersBreadcrumbs from "../../components/breadcrumbs/dynamic-detail/AdminOrdersBreadcrumbs";
import UserCatalogBreadcrumbs from "../../components/breadcrumbs/dynamic-detail/UserCatalogBreadcrumbs";
import UserCatalogItemBreadcrumbs from "../../components/breadcrumbs/dynamic-detail/UserCatalogItemBreadcrumbs";
import { ROUTES } from "./routes";

export const BREADCRUMBS = [
  {
    path: ROUTES.MAIN,
    breadcrumb: "Главная",
  },
  {
    path: ROUTES.ABOUTSTORE,
    breadcrumb: "О магазине",
  },
  {
    path: "item",
    breadcrumb: null,
  },
  {
    path: `item/${ROUTES.PHONE}`,
    breadcrumb: UserCatalogBreadcrumbs,
  },
  {
    path: `item/${ROUTES.PHONE}/${ROUTES.PRODUCT}`,
    breadcrumb: UserCatalogItemBreadcrumbs,
  },
  {
    path: ROUTES.CART,
    breadcrumb: "Корзина",
  },
  {
    path: ROUTES.CHECKOUT,
    breadcrumb: "Оформление заказа",
  },
  {
    path: ROUTES.COMPATISONPRODUCT,
    breadcrumb: "comparison",
  },
  {
    path: ROUTES.DELIVERY,
    breadcrumb: "Доставка",
  },
  {
    path: ROUTES.FAG,
    breadcrumb: "FAG",
  },
  {
    path: ROUTES.CONTACTS,
    breadcrumb: "Контакты",
  },
  {
    path: ROUTES.VIP,
    breadcrumb: "Личный кабинет",
  },
  {
    path: `${ROUTES.VIP}/${ROUTES.HISTORY}`,
    breadcrumb: "История заказов",
  },
  {
    path: `${ROUTES.VIP}/${ROUTES.LIKE}`,
    breadcrumb: "Избранное",
  },
  {
    path: `${ROUTES.VIP}/${ROUTES.PROFILE}`,
    breadcrumb: "Учетная запись",
  },
  {
    path: ROUTES.ADMIN,
    breadcrumb: null,
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.GOODS}`,
    breadcrumb: "Товары",
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.ORDERS}`,
    breadcrumb: null,
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.ORDERS}/:orderId`,
    breadcrumb: AdminOrdersBreadcrumbs,
  },

  {
    path: `${ROUTES.ADMIN}/${ROUTES.REVIEWSRATING}`,
    breadcrumb: null,
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.GOODS}/${ROUTES.PRODUCT}`,
    breadcrumb: null,
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.GOODS}/${ROUTES.ADMINITEMDETAIL}`,
    breadcrumb: "Детали товара",
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.GOODS}/${ROUTES.ADDPRODUCT}`,
    breadcrumb: null,
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.GOODS}/${ROUTES.ADDPRODUCT}/part-1`,
    breadcrumb: "Добавление товара",
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.GOODS}/${ROUTES.ADDPRODUCT}/part-2`,
    breadcrumb: "Установка цены и количества товара",
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.GOODS}/${ROUTES.ADDPRODUCT}/part-3`,
    breadcrumb: "Описание и обзор",
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.GOODS}/${ROUTES.SETTINGPRICEQUANTITYITEM}`,
    breadcrumb: "Установка цены и количества товара",
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.GOODS}/${ROUTES.DESCRIPTIONOVERVIEW}`,
    breadcrumb: "Описание и обзор",
  },
];

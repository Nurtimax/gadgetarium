import { ROUTES } from ".";
import UserCatalogBreadcrumbs from "../../components/breadcrumbs/dynamic-detail/UserCatalogBreadcrumbs";
import UserCatalogItemBreadcrumbs from "../../components/breadcrumbs/dynamic-detail/UserCatalogItemBreadcrumbs";

export const BREADCRUMBS = [
  {
    path: ROUTES.main,
    breadcrumb: "Главная",
  },
  {
    path: ROUTES.aboutStore,
    breadcrumb: "О магазине",
  },
  {
    path: `item`,
    breadcrumb: null,
  },
  {
    path: `item/${ROUTES.phone}`,
    breadcrumb: UserCatalogBreadcrumbs,
  },
  {
    path: `item/${ROUTES.phone}/${ROUTES.product}`,
    breadcrumb: UserCatalogItemBreadcrumbs,
  },
  {
    path: ROUTES.cart,
    breadcrumb: "Корзина",
  },
  {
    path: ROUTES.checkout,
    breadcrumb: "Оформление заказа",
  },
  {
    path: ROUTES.compatisonProduct,
    breadcrumb: "comparison",
  },
  {
    path: ROUTES.delivery,
    breadcrumb: "Доставка",
  },
  {
    path: ROUTES.fag,
    breadcrumb: "FAG",
  },
  {
    path: ROUTES.contacts,
    breadcrumb: "Контакты",
  },
  {
    path: ROUTES.vip,
    breadcrumb: "Личный кабинет",
  },
  {
    path: `${ROUTES.vip}/${ROUTES.history}`,
    breadcrumb: "История заказов",
  },
  {
    path: `${ROUTES.vip}/${ROUTES.like}`,
    breadcrumb: "Избранное",
  },
  {
    path: `${ROUTES.vip}/${ROUTES.profile}`,
    breadcrumb: "Учетная запись",
  },
  {
    path: ROUTES.ADMIN,
    breadcrumb: null,
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.goods}`,
    breadcrumb: null,
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.orders}`,
    breadcrumb: null,
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.reviewsRating}`,
    breadcrumb: null,
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.goods}/${ROUTES.product}`,
    breadcrumb: null,
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.goods}/${ROUTES.ADMINITEMDETAIL}`,
    breadcrumb: "Детали товара",
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.goods}/${ROUTES.addproduct}`,
    breadcrumb: "Добавление товара",
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.goods}/${ROUTES.settingPriceQuantityItem}`,
    breadcrumb: "Установка цены и количества товара",
  },
  {
    path: `${ROUTES.ADMIN}/${ROUTES.goods}/${ROUTES.descriptionOverview}`,
    breadcrumb: "Описание и обзор",
  },
];

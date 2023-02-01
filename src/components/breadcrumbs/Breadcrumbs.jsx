import useBreadcrumbs from "use-react-router-breadcrumbs";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { catalogMenu_FAKE_DATA, ROUTES } from "../../utils/constants";

const DynamicUserBreadcrumbByCatalogItem = () => {
  const { catalogItem } = useParams();
  const findedCatalogItem = catalogMenu_FAKE_DATA.find(
    (catalog) => catalog.id === +catalogItem
  );
  return <span>{findedCatalogItem?.title}</span>;
};

const DynamicUserBreadcrumbByCatalogItemId = () => {
  const { catalogItem, product } = useParams();

  const findedCatalogItem = catalogMenu_FAKE_DATA.find(
    (catalog) => catalog.id === +catalogItem
  );

  const getCatalogItem = findedCatalogItem.subcategories.find(
    (catalogId) => catalogId.id === +product
  );

  return <span>{getCatalogItem?.title}</span>;
};

const DynamicAdminBreadcrumbByCatalogItemId = () => {
  return <span></span>;
};

const routes = [
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
    breadcrumb: DynamicUserBreadcrumbByCatalogItem,
  },
  {
    path: `item/${ROUTES.phone}/${ROUTES.product}`,
    breadcrumb: DynamicUserBreadcrumbByCatalogItemId,
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
    breadcrumb: DynamicAdminBreadcrumbByCatalogItemId,
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

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <Breadcrumbs separator={<KeyboardDoubleArrowRightIcon fontSize="6px" />}>
      {breadcrumbs.length > 1 &&
        breadcrumbs.map(({ match, breadcrumb }) => (
          <NavLink key={match.pathname} to={match.pathname}>
            {breadcrumb}
          </NavLink>
        ))}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;

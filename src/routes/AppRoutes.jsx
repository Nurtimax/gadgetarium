import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AboutStore from "../containers/about-store/AboutStore";
import Home from "../containers/home";
import Layout from "../layout";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route />
          <Route
            path="/about"
            element={
              <PrivateRoute
                component={<AboutStore />}
                isLogin={true}
                fallbackPath="/login"
              />
            }
          />
          <Route
            path="phone"
            element={
              <>
                <h1>Cмартфоны</h1>
                <Outlet />
              </>
            }
          >
            <Route
              path="phone-item"
              element={
                <>
                  <h1>Galaxy S21 5G</h1>
                </>
              }
            />
          </Route>
          <Route
            path="cart"
            element={
              <>
                <h1>Товары в корзине</h1>
                <Outlet />
              </>
            }
          >
            <Route
              path="cart-item"
              element={
                <>
                  <h1>Оформление заказа</h1>
                </>
              }
            />
          </Route>
          <Route
            path="compo"
            element={
              <>
                <h1>Сравнение товаров</h1>
              </>
            }
          />
          <Route
            path="like"
            element={
              <>
                <h1>Избранное</h1>
              </>
            }
          />
          <Route
            path="delivery"
            element={
              <>
                <h1>Избранное</h1>
              </>
            }
          />
          <Route
            path="fag"
            element={
              <>
                <h1>FAG</h1>
              </>
            }
          />
          <Route
            path="contacts"
            element={
              <>
                <h1>Контакты</h1>
              </>
            }
          />
          <Route path="/history" element={<></>}>
            История заказов
            <Route index />
            <Route path="number" />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;

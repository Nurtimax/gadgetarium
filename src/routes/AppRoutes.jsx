import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AboutStore from "../containers/about-store/AboutStore";
import Contacts from "../containers/contacts/Contacts";
import Delivery from "../containers/delivery/Delivery";
import FrequentlyAskedQuestions from "../containers/FAQ/FrequentlyAskedQuestions";
import Home from "../containers/home";
import Layout from "../layout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route />
          <Route path="/about" element={<AboutStore />} />
          <Route
            path="phone"
            element={
              <>
                <h1>Cмартфоны</h1>
                <Outlet />
              </>
            }
          >
            <Route path=":phone_id" element={<h1>Galaxy S21 5G</h1>} />
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
            <Route path="cart-item" element={<h1>Оформление заказа</h1>} />
          </Route>
          <Route path="compo" element={<h1>Сравнение товаров</h1>} />
          <Route path="like" element={<h1>Избранное</h1>} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="fag" element={<FrequentlyAskedQuestions />} />
          <Route path="contacts" element={<Contacts />} />

          <Route path="/vip">
            <Route path="history" element={<h1>History</h1>}>
              История заказов
            </Route>
            <Route />
          </Route>
          <Route path="/admin" element={<h1>Admin</h1>}>
            <Route path="goods" element={<h1>Goods</h1>} />
            <Route path="orders" element={<h1>Orders</h1>} />
            <Route path="reviews-rating" element={<h1>reviews-rating</h1>} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<h1>Sign In</h1>} />
        <Route path="/sign-up" element={<h1>Sign up</h1>} />
      </Routes>
    </>
  );
};

export default AppRoutes;

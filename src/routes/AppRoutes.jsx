import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AboutStore from "../containers/about-store/AboutStore";
import Contacts from "../containers/contacts/Contacts";
import Delivery from "../containers/delivery/Delivery";
import FrequentlyAskedQuestions from "../containers/FAQ/FrequentlyAskedQuestions";
import Home from "../containers/home";
import Layout from "../layout";
import { pathsInRoutes } from "../utils/constants";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={pathsInRoutes.main} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={pathsInRoutes.aboutStore} element={<AboutStore />} />
          <Route
            path={`:${pathsInRoutes.phone}`}
            element={
              <>
                <h1>Cмартфоны</h1>
                <Outlet />
              </>
            }
          />
          <Route
            path={`:${pathsInRoutes.phone}/:${pathsInRoutes.phone}_id`}
            element={<h1>Galaxy S21 5G</h1>}
          />
          <Route
            path={pathsInRoutes.cart}
            element={
              <>
                <h1>Товары в корзине</h1>
                <Outlet />
              </>
            }
          >
            <Route
              path={`${pathsInRoutes.cart}-item`}
              element={<h1>Оформление заказа</h1>}
            />
          </Route>
          <Route
            path={pathsInRoutes.compatisonProduct}
            element={<h1>Сравнение товаров</h1>}
          />
          <Route path={pathsInRoutes.like} element={<h1>Избранное</h1>} />
          <Route path={pathsInRoutes.delivery} element={<Delivery />} />
          <Route
            path={pathsInRoutes.fag}
            element={<FrequentlyAskedQuestions />}
          />
          <Route path={pathsInRoutes.contacts} element={<Contacts />} />

          <Route path={pathsInRoutes.vip}>
            <Route path={pathsInRoutes.history} element={<h1>History</h1>}>
              История заказов
            </Route>
            <Route />
          </Route>
          <Route path={pathsInRoutes.ADMIN} element={<h1>Admin</h1>}>
            <Route path={pathsInRoutes.goods} element={<h1>Goods</h1>} />
            <Route path={pathsInRoutes.orders} element={<h1>Orders</h1>} />
            <Route
              path={pathsInRoutes.reviewsRating}
              element={<h1>reviews-rating</h1>}
            />
          </Route>
        </Route>
        <Route path={pathsInRoutes.signIn} element={<h1>Sign In</h1>} />
        <Route path={pathsInRoutes.signUp} element={<h1>Sign up</h1>} />
        <Route path={pathsInRoutes.notFound} element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};

export default AppRoutes;

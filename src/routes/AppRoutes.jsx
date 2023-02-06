import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutStore from "../containers/about-store/AboutStore";
import Contacts from "../containers/contacts/Contacts";
import Delivery from "../containers/delivery/Delivery";
import FrequentlyAskedQuestions from "../containers/FAQ/FrequentlyAskedQuestions";
import Home from "../containers/home";
import SignIn from "../containers/sign-in/SignIn";
import SignUp from "../containers/sign-up/Signup";
import Layout from "../layout";
import { PATHSINROUTES } from "../utils/constants";
import PrivateRole from "./PrivateRole";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path={PATHSINROUTES.main}
          element={
            <PrivateRole
              RouteComponent={<Layout />}
              roles={["admin"]}
              fallbackPath="admin"
            />
          }
        >
          <Route index element={<Home />} />
          <Route path={PATHSINROUTES.aboutStore} element={<AboutStore />} />
          <Route
            path={`:${PATHSINROUTES.phone}`}
            element={<h1>Cмартфоны</h1>}
          />
          <Route
            path={`:${PATHSINROUTES.phone}/:${PATHSINROUTES.phone}_id`}
            element={<h1>Galaxy S21 5G</h1>}
          />
          <Route
            path={PATHSINROUTES.cart}
            element={<h1>Товары в корзине</h1>}
          />
          <Route
            path={`${PATHSINROUTES.cart}/:${PATHSINROUTES.cart}_id`}
            element={<h1>Оформление заказа</h1>}
          />
          <Route
            path={PATHSINROUTES.compatisonProduct}
            element={<h1>Сравнение товаров</h1>}
          />
          <Route path={PATHSINROUTES.like} element={<h1>Избранное</h1>} />
          <Route path={PATHSINROUTES.delivery} element={<Delivery />} />
          <Route
            path={PATHSINROUTES.fag}
            element={<FrequentlyAskedQuestions />}
          />
          <Route path={PATHSINROUTES.contacts} element={<Contacts />} />

          <Route path={PATHSINROUTES.vip}>
            <Route path={PATHSINROUTES.history} element={<h1>History</h1>}>
              История заказов
            </Route>
            <Route />
          </Route>
          <Route path={PATHSINROUTES.ADMIN} element={<h1>Admin</h1>}>
            <Route path={PATHSINROUTES.goods} element={<h1>Goods</h1>} />
            <Route path={PATHSINROUTES.orders} element={<h1>Orders</h1>} />
            <Route
              path={PATHSINROUTES.reviewsRating}
              element={<h1>reviews-rating</h1>}
            />
          </Route>
        </Route>
        <Route path={`/${PATHSINROUTES.signIn}`} element={<SignIn />} />
        <Route path={PATHSINROUTES.signUp} element={<SignUp />} />
        <Route path={PATHSINROUTES.notFound} element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};

export default AppRoutes;

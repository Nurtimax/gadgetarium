import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CharacteristicsTabItem from "../components/product-details/CharacteristicsTabItem";
import DescriptionTabItem from "../components/product-details/DescriptionTabItem";
import ReviewsTabItem from "../components/product-details/ReviewsTabItem";
import AboutStore from "../containers/about-store/AboutStore";
import CatalogProducts from "../containers/catalog-products/CatalogProducts";
import Contacts from "../containers/contacts/Contacts";
import Delivery from "../containers/delivery/Delivery";
import FrequentlyAskedQuestions from "../containers/FAQ/FrequentlyAskedQuestions";
import Home from "../containers/home";
import OrderPage from "../containers/order-page/OrderPage";
import MainProductDetails from "../containers/productDetails/MainProductDetails";
import SignIn from "../containers/sign-in/SignIn";
import SignUp from "../containers/sign-up/Signup";
import Layout from "../layout";
import { ROUTES } from "../utils/constants";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUTSTORE} element={<AboutStore />} />
        <Route
          path={`item/${ROUTES.PHONE}`}
          element={
            <PrivateRoute Component={<CatalogProducts />} role={["Customer"]} />
          }
        />
        <Route
          path={`item/${ROUTES.PHONE}/${ROUTES.PRODUCT}`}
          element={
            <PrivateRoute
              Component={<MainProductDetails />}
              role={["Customer"]}
            />
          }
        >
          <Route path="description" element={<DescriptionTabItem />} />
          <Route path="characteristics" element={<CharacteristicsTabItem />} />
          <Route path="reviews" element={<ReviewsTabItem />} />
          <Route path="shipping-and-payment" element={<Delivery />} />
        </Route>
        <Route path={ROUTES.CART} element={<h1>Товары в корзине</h1>} />
        <Route path={ROUTES.CHECKOUT} element={<OrderPage />} />
        <Route path={ROUTES.COMPATISONPRODUCT} element={<h1>comparative</h1>} />
        <Route path={ROUTES.LIKE} element={<h1>Like</h1>} />
        <Route path={ROUTES.DELIVERY} element={<Delivery />} />
        <Route path={ROUTES.FAG} element={<FrequentlyAskedQuestions />} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
        <Route path={ROUTES.VIP} element={<Navigate to={ROUTES.HISTORY} />}>
          <Route path={ROUTES.HISTORY} element={<h1>History</h1>} />
          <Route path={ROUTES.PROFILE} element={<h1>Profile</h1>} />
          <Route path={ROUTES.LIKE} element={<h1>like</h1>} />
          <Route />
        </Route>
      </Route>
      <Route path={`/${ROUTES.SIGNIN}`} element={<SignIn />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
    </Routes>
  );
};

export default MainRoutes;

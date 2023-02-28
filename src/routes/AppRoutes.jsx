import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "../components/productDetails/ProductDetails";
import AboutStore from "../containers/about-store/AboutStore";
import AddProduct from "../containers/add-product/AddProduct";
import Contacts from "../containers/contacts/Contacts";
import Delivery from "../containers/delivery/Delivery";
import FrequentlyAskedQuestions from "../containers/FAQ/FrequentlyAskedQuestions";
import Home from "../containers/home";
import OrderPage from "../containers/order-page/OrderPage";
import SignIn from "../containers/sign-in/SignIn";
import SignUp from "../containers/sign-up/Signup";
import Layout from "../layout";
import { ROUTES } from "../utils/constants";
import { GADJEDTARIUM_LOGIN_INFO } from "../utils/constants/fetch";
import PrivateRole from "./PrivateRole";

const authSave = JSON.parse(localStorage.getItem(GADJEDTARIUM_LOGIN_INFO));

const AppRoutes = () => {
  const user = useSelector((state) => state.auth.data);
  const { roleName } = user || {};

  return (
    <>
      <Routes>
        <Route
          path={ROUTES.MAIN}
          element={
            <PrivateRole
              RouteComponent={<Layout role={roleName} authSave={authSave} />}
              roles={["admin"]}
              fallbackPath="admin"
              roleName={roleName}
            />
          }
        >
          <Route
            index
            element={
              <PrivateRole
                RouteComponent={<Home />}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            }
          />
          <Route
            path={ROUTES.ABOUTSTORE}
            element={
              <PrivateRole
                RouteComponent={<AboutStore />}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            }
          />
          <Route
            path={`item/${ROUTES.PHONE}`}
            element={
              <PrivateRole
                RouteComponent={<h1>Cмартфоны</h1>}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            }
          />
          <Route
            path={`item/${ROUTES.PHONE}/${ROUTES.PRODUCT}`}
            element={
              <PrivateRole
                RouteComponent={<ProductDetails />}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            }
          />
          <Route
            path={ROUTES.CART}
            element={
              <PrivateRole
                RouteComponent={<h1>Товары в корзине</h1>}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            }
          />
          <Route
            path={ROUTES.CHECKOUT}
            element={
              <PrivateRole
                RouteComponent={<OrderPage />}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            }
          />
          <Route
            path={ROUTES.COMPATISONPRODUCT}
            element={
              <PrivateRole
                RouteComponent={<h1>comparative</h1>}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            }
          />
          <Route
            path={ROUTES.LIKE}
            element={
              <PrivateRole
                RouteComponent={<h1>Like</h1>}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            }
          />
          <Route
            path={ROUTES.DELIVERY}
            element={
              <PrivateRole
                RouteComponent={<Delivery />}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            }
          />
          <Route
            path={ROUTES.FAG}
            element={
              <PrivateRole
                RouteComponent={<FrequentlyAskedQuestions />}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            }
          />
          <Route
            path={ROUTES.CONTACTS}
            element={
              <PrivateRole
                RouteComponent={<Contacts />}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            }
          />

          <Route path={ROUTES.VIP}>
            <Route
              path={ROUTES.HISTORY}
              element={
                <PrivateRole
                  RouteComponent={<h1>History</h1>}
                  roles={["admin"]}
                  fallbackPath="admin"
                  roleName={roleName}
                />
              }
            />
            <Route
              path={ROUTES.PROFILE}
              element={
                <PrivateRole
                  RouteComponent={<h1>Profile</h1>}
                  roles={["admin"]}
                  fallbackPath="admin"
                  roleName={roleName}
                />
              }
            />
            <Route
              path={ROUTES.LIKE}
              element={
                <PrivateRole
                  RouteComponent={<h1>like</h1>}
                  roles={["admin"]}
                  fallbackPath="admin"
                  roleName={roleName}
                />
              }
            />
            <Route />
          </Route>
          <Route
            path={ROUTES.ADMIN}
            element={
              <PrivateRole
                RouteComponent={<Navigate to={ROUTES.GOODS} />}
                roles={["Customer"]}
                fallbackPath="/"
                roleName={roleName}
              />
            }
          />
          <Route
            path={`${ROUTES.ADMIN}/${ROUTES.GOODS}`}
            element={
              <PrivateRole
                RouteComponent={<h1>goods</h1>}
                roles={["Customer"]}
                fallbackPath="/"
                roleName={roleName}
              />
            }
          />
          <Route
            path={`${ROUTES.ADMIN}/${ROUTES.GOODS}/${ROUTES.PRODUCT}`}
            element={
              <PrivateRole
                RouteComponent={<h1>Product</h1>}
                roles={["Customer"]}
                fallbackPath="/"
                roleName={roleName}
              />
            }
          />
          <Route
            path={`${ROUTES.ADMIN}/${ROUTES.GOODS}/${ROUTES.ADMINITEMDETAIL}`}
            element={
              <PrivateRole
                RouteComponent={<h1>detail</h1>}
                roles={["Customer"]}
                fallbackPath="/"
                roleName={roleName}
              />
            }
          />
          <Route
            path={`${ROUTES.ADMIN}/${ROUTES.GOODS}/${ROUTES.ADDPRODUCT}`}
            element={
              <PrivateRole
                RouteComponent={<AddProduct />}
                roles={["Customer"]}
                fallbackPath="/"
                roleName={roleName}
              />
            }
          />
          <Route
            path={`${ROUTES.ADMIN}/${ROUTES.ORDERS}`}
            element={
              <PrivateRole
                RouteComponent={<h1>Orders</h1>}
                roles={["Customer"]}
                fallbackPath="/"
                roleName={roleName}
              />
            }
          />
          <Route
            path={`${ROUTES.ADMIN}/${ROUTES.REVIEWSRATING}`}
            element={
              <PrivateRole
                RouteComponent={<h1>Revviews Rating</h1>}
                roles={["Customer"]}
                fallbackPath="/"
                roleName={roleName}
              />
            }
          />
        </Route>
        <Route path={`/${ROUTES.SIGNIN}`} element={<SignIn />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.NOTFOUND} element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};

export default AppRoutes;

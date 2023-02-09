import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutStore from "../containers/about-store/AboutStore";
import Contacts from "../containers/contacts/Contacts";
import Delivery from "../containers/delivery/Delivery";
import FrequentlyAskedQuestions from "../containers/FAQ/FrequentlyAskedQuestions";
import Home from "../containers/home";
import OrderPage from "../containers/order-page/OrderPage";
import SignIn from "../containers/sign-in/SignIn";
import SignUp from "../containers/sign-up/Signup";
import Layout from "../layout";
import { ROUTES } from "../utils/constants";
import PrivateRole from "./PrivateRole";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path={ROUTES.MAIN}
          element={
            <PrivateRole
              RouteComponent={<Layout role="user" />}
              roles={["admin"]}
              fallbackPath="admin"
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
              />
            }
          />
          <Route
            path={`item/${ROUTES.PHONE}/${ROUTES.PRODUCT}`}
            element={
              <PrivateRole
                RouteComponent={<h1>Galaxy S21 5G</h1>}
                roles={["admin"]}
                fallbackPath="admin"
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
                />
              }
            />
            <Route />
          </Route>
          <Route
            path={ROUTES.ADMIN}
            element={
              <PrivateRole
                RouteComponent={<h1>Admin</h1>}
                roles={["user"]}
                fallbackPath="/"
              />
            }
          >
            <Route
              path={ROUTES.GOODS}
              element={
                <PrivateRole
                  RouteComponent={<h1>goods</h1>}
                  roles={["user"]}
                  fallbackPath="/"
                />
              }
            />
            <Route
              path={`${ROUTES.GOODS}/${ROUTES.PRODUCT}`}
              element={
                <PrivateRole
                  RouteComponent={<h1>Product</h1>}
                  roles={["user"]}
                  fallbackPath="/"
                />
              }
            />
            <Route
              path={`${ROUTES.GOODS}/${ROUTES.ADMINITEMDETAIL}`}
              element={
                <PrivateRole
                  RouteComponent={<h1>detail</h1>}
                  roles={["user"]}
                  fallbackPath="/"
                />
              }
            />
            <Route
              path={ROUTES.ORDERS}
              element={
                <PrivateRole
                  RouteComponent={<h1>Orders</h1>}
                  roles={["user"]}
                  fallbackPath="/"
                />
              }
            />
            <Route
              path={ROUTES.REVIEWSRATING}
              element={
                <PrivateRole
                  RouteComponent={<h1>Revviews Rating</h1>}
                  roles={["user"]}
                  fallbackPath="/"
                />
              }
            />
          </Route>
        </Route>
        <Route path={`/${ROUTES.SIGNIN}`} element={<SignIn />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.NOTFOUND} element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};

export default AppRoutes;

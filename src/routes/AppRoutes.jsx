import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutStore from "../containers/about-store/AboutStore";
import Contacts from "../containers/contacts/Contacts";
import Delivery from "../containers/delivery/Delivery";
import FrequentlyAskedQuestions from "../containers/FAQ/FrequentlyAskedQuestions";
import Home from "../containers/home";
import Layout from "../layout";
import { ROUTES } from "../utils/constants";
import PrivateRole from "./PrivateRole";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path={ROUTES.main}
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
            path={ROUTES.aboutStore}
            element={
              <PrivateRole
                RouteComponent={<AboutStore />}
                roles={["admin"]}
                fallbackPath="admin"
              />
            }
          />
          <Route
            path={`item/${ROUTES.phone}`}
            element={
              <PrivateRole
                RouteComponent={<h1>Cмартфоны</h1>}
                roles={["admin"]}
                fallbackPath="admin"
              />
            }
          />
          <Route
            path={`item/${ROUTES.phone}/${ROUTES.product}`}
            element={
              <PrivateRole
                RouteComponent={<h1>Galaxy S21 5G</h1>}
                roles={["admin"]}
                fallbackPath="admin"
              />
            }
          />
          <Route
            path={ROUTES.cart}
            element={
              <PrivateRole
                RouteComponent={<h1>Товары в корзине</h1>}
                roles={["admin"]}
                fallbackPath="admin"
              />
            }
          />
          <Route
            path={ROUTES.checkout}
            element={
              <PrivateRole
                RouteComponent={<h1>Оформление заказа</h1>}
                roles={["admin"]}
                fallbackPath="admin"
              />
            }
          />
          <Route
            path={ROUTES.compatisonProduct}
            element={
              <PrivateRole
                RouteComponent={<h1>comparative</h1>}
                roles={["admin"]}
                fallbackPath="admin"
              />
            }
          />
          <Route
            path={ROUTES.like}
            element={
              <PrivateRole
                RouteComponent={<h1>Like</h1>}
                roles={["admin"]}
                fallbackPath="admin"
              />
            }
          />
          <Route
            path={ROUTES.delivery}
            element={
              <PrivateRole
                RouteComponent={<Delivery />}
                roles={["admin"]}
                fallbackPath="admin"
              />
            }
          />
          <Route
            path={ROUTES.fag}
            element={
              <PrivateRole
                RouteComponent={<FrequentlyAskedQuestions />}
                roles={["admin"]}
                fallbackPath="admin"
              />
            }
          />
          <Route
            path={ROUTES.contacts}
            element={
              <PrivateRole
                RouteComponent={<Contacts />}
                roles={["admin"]}
                fallbackPath="admin"
              />
            }
          />

          <Route path={ROUTES.vip}>
            <Route
              path={ROUTES.history}
              element={
                <PrivateRole
                  RouteComponent={<h1>History</h1>}
                  roles={["admin"]}
                  fallbackPath="admin"
                />
              }
            />
            <Route
              path={ROUTES.profile}
              element={
                <PrivateRole
                  RouteComponent={<h1>Profile</h1>}
                  roles={["admin"]}
                  fallbackPath="admin"
                />
              }
            />
            <Route
              path={ROUTES.like}
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
              path={ROUTES.goods}
              element={
                <PrivateRole
                  RouteComponent={<h1>goods</h1>}
                  roles={["user"]}
                  fallbackPath="/"
                />
              }
            />
            <Route
              path={`${ROUTES.goods}/${ROUTES.product}`}
              element={
                <PrivateRole
                  RouteComponent={<h1>Product</h1>}
                  roles={["user"]}
                  fallbackPath="/"
                />
              }
            />
            <Route
              path={`${ROUTES.goods}/${ROUTES.ADMINITEMDETAIL}`}
              element={
                <PrivateRole
                  RouteComponent={<h1>detail</h1>}
                  roles={["user"]}
                  fallbackPath="/"
                />
              }
            />
            <Route
              path={ROUTES.orders}
              element={
                <PrivateRole
                  RouteComponent={<h1>Orders</h1>}
                  roles={["user"]}
                  fallbackPath="/"
                />
              }
            />
            <Route
              path={ROUTES.reviewsRating}
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
        <Route path={ROUTES.signIn} element={<h1>Sign In</h1>} />
        <Route path={ROUTES.signUp} element={<h1>Sign up</h1>} />
        <Route path={ROUTES.notFound} element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};

export default AppRoutes;

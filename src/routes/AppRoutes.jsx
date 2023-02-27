import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import GadgetariumSpinnerLoading from "../components/GadgetariumSpinnerLoading";
import { ActionauthenticationSlice } from "../redux/slices/authentication";
// import AboutStore from "../containers/about-store/AboutStore";
// import AddProduct from "../containers/add-product/AddProduct";
// import Contacts from "../containers/contacts/Contacts";
// import Delivery from "../containers/delivery/Delivery";
// import FrequentlyAskedQuestions from "../containers/FAQ/FrequentlyAskedQuestions";
// import Home from "../containers/home";
// import OrderPage from "../containers/order-page/OrderPage";
// import SignIn from "../containers/sign-in/SignIn";
// import SignUp from "../containers/sign-up/Signup";
// import Layout from "../layout";
import { ROUTES } from "../utils/constants";
import { GADJEDTARIUM_LOGIN_INFO } from "../utils/constants/fetch";
import PrivateRole from "./PrivateRole";

const Layout = lazy(() => import("../layout"));
const SignUp = lazy(() => import("../containers/sign-up/Signup"));
const SignIn = lazy(() => import("../containers/sign-in/SignIn"));
const OrderPage = lazy(() => import("../containers/order-page/OrderPage"));
const Home = lazy(() => import("../containers/home"));
const Delivery = lazy(() => import("../containers/delivery/Delivery"));
const Contacts = lazy(() => import("../containers/contacts/Contacts"));
const AddProduct = lazy(() => import("../containers/add-product/AddProduct"));
const AboutStore = lazy(() => import("../containers/about-store/AboutStore"));
const FrequentlyAskedQuestions = lazy(() => {
  return import("../containers/FAQ/FrequentlyAskedQuestions");
});
const authSave = JSON.parse(localStorage.getItem(GADJEDTARIUM_LOGIN_INFO));

const AppRoutes = () => {
  const user = useSelector((state) => state.auth.data);
  const { roleName } = user || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionauthenticationSlice.getUserData(authSave || {}));
  }, [dispatch, authSave]);

  return (
    <>
      <Routes>
        <Route
          path={ROUTES.MAIN}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <PrivateRole
                RouteComponent={<Layout role={roleName} authSave={authSave} />}
                roles={["admin"]}
                fallbackPath="admin"
                roleName={roleName}
              />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<GadgetariumSpinnerLoading />}>
                <PrivateRole
                  RouteComponent={<Home />}
                  roles={["admin"]}
                  fallbackPath="admin"
                  roleName={roleName}
                />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.ABOUTSTORE}
            element={
              <Suspense fallback={<GadgetariumSpinnerLoading />}>
                <PrivateRole
                  RouteComponent={<AboutStore />}
                  roles={["admin"]}
                  fallbackPath="admin"
                  roleName={roleName}
                />
              </Suspense>
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
                RouteComponent={<h1>Galaxy S21 5G</h1>}
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
              <Suspense fallback={<GadgetariumSpinnerLoading />}>
                <PrivateRole
                  RouteComponent={<OrderPage />}
                  roles={["admin"]}
                  fallbackPath="admin"
                  roleName={roleName}
                />
              </Suspense>
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
              <Suspense fallback={<GadgetariumSpinnerLoading />}>
                <PrivateRole
                  RouteComponent={<Delivery />}
                  roles={["admin"]}
                  fallbackPath="admin"
                  roleName={roleName}
                />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.FAG}
            element={
              <Suspense fallback={<GadgetariumSpinnerLoading />}>
                <PrivateRole
                  RouteComponent={<FrequentlyAskedQuestions />}
                  roles={["admin"]}
                  fallbackPath="admin"
                  roleName={roleName}
                />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.CONTACTS}
            element={
              <Suspense fallback={<GadgetariumSpinnerLoading />}>
                <PrivateRole
                  RouteComponent={<Contacts />}
                  roles={[""]}
                  fallbackPath=""
                  roleName={roleName}
                />
              </Suspense>
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
              <Suspense fallback={<GadgetariumSpinnerLoading />}>
                <PrivateRole
                  RouteComponent={<AddProduct />}
                  roles={["Customer"]}
                  fallbackPath="/"
                  roleName={roleName}
                />
              </Suspense>
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
        <Route
          path={`/${ROUTES.SIGNIN}`}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SIGNUP}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <SignUp />
            </Suspense>
          }
        />
        <Route path={ROUTES.NOTFOUND} element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};

export default AppRoutes;

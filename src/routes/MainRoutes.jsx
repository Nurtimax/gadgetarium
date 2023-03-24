import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import GadgetariumSpinnerLoading from "../components/GadgetariumSpinnerLoading";
import { ROUTES } from "../utils/constants/routes";
import PrivateRoute from "./PrivateRoute";

const Paymant = lazy(() => import("../containers/paymant/Paymant"));
const PaymantMethod = lazy(() => import("../containers/paymant/PaymantMethod"));
const Layout = lazy(() => import("../layout"));
const Delivery = lazy(() => import("../containers/delivery/Delivery"));
const Favorite = lazy(() => import("../containers/favorite/Favorite"));
const Contacts = lazy(() => import("../containers/contacts/Contacts"));
const Home = lazy(() => import("../containers/home"));
const Compare = lazy(() => import("../containers/compare/Compare.jsx"));
const Item = lazy(() => import("../containers/item/Item"));
const Basket = lazy(() => import("../containers/basket/Basket"));
const AboutStore = lazy(() => import("../containers/about-store/AboutStore"));
const SignIn = lazy(() => import("../containers/sign-in/SignIn"));
const SignUp = lazy(() => import("../containers/sign-up/Signup"));
const Ordering = lazy(() => import("../containers/ordering/Ordering"));
const CatalogProducts = lazy(() => {
  return import("../containers/catalog-products/CatalogProducts");
});
const FrequentlyAskedQuestions = lazy(() => {
  return import("../containers/FAQ/FrequentlyAskedQuestions");
});
const CharacteristicsTabItem = lazy(() => {
  return import("../components/product-details/CharacteristicsTabItem");
});
const DescriptionTabItem = lazy(() => {
  return import("../components/product-details/DescriptionTabItem");
});
const ReviewsTabItem = lazy(() => {
  return import("../components/product-details/ReviewsTabItem");
});
const MainProductDetails = lazy(() => {
  return import("../containers/productDetails/MainProductDetails");
});

const MainRoutes = () => {
  const { auth } = useSelector((store) => store);

  if (auth?.data?.roleName?.toLowerCase() === "admin") {
    return <Navigate to="/admin" />;
  }

  return (
    <Routes>
      <Route
        path={ROUTES.MAIN}
        element={
          <Suspense fallback={<GadgetariumSpinnerLoading />}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.ABOUTSTORE}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <AboutStore />
            </Suspense>
          }
        />
        <Route path="item" element={<Item />}>
          <Route
            path={`${ROUTES.PHONE}`}
            element={
              <PrivateRoute
                Component={
                  <Suspense fallback={<GadgetariumSpinnerLoading />}>
                    <CatalogProducts />
                  </Suspense>
                }
                role={["Customer"]}
              />
            }
          />

          <Route
            path={`${ROUTES.PHONE}/${ROUTES.PRODUCT}`}
            element={
              <PrivateRoute
                Component={
                  <Suspense fallback={<GadgetariumSpinnerLoading />}>
                    <MainProductDetails />
                  </Suspense>
                }
                role={["Customer"]}
              />
            }
          >
            <Route
              path="description"
              element={
                <Suspense fallback={<GadgetariumSpinnerLoading />}>
                  <DescriptionTabItem />
                </Suspense>
              }
            />
            <Route
              path="characteristics"
              element={
                <Suspense fallback={<GadgetariumSpinnerLoading />}>
                  <CharacteristicsTabItem />
                </Suspense>
              }
            />

            <Route
              path="reviews"
              element={
                <Suspense fallback={<GadgetariumSpinnerLoading />}>
                  <ReviewsTabItem />
                </Suspense>
              }
            />
            <Route
              path="shipping-and-payment"
              element={
                <Suspense fallback={<GadgetariumSpinnerLoading />}>
                  <Delivery />
                </Suspense>
              }
            />
          </Route>
        </Route>

        <Route
          path={ROUTES.CART}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <Basket />
            </Suspense>
          }
        />

        <Route
          path={`${ROUTES.CART}/${ROUTES.ORDERING}`}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <Ordering />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.COMPATISONPRODUCT}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <Compare />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.CART}/${ROUTES.PAYMANT_METHOD}`}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <PaymantMethod />
            </Suspense>
          }
        />

        <Route
          path={`${ROUTES.CART}/${ROUTES.PAYMANT}`}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <Paymant />
            </Suspense>
          }
        />

        <Route path={ROUTES.COMPATISONPRODUCT} element={<h1>comparative</h1>} />
        <Route
          path={ROUTES.DELIVERY}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <Delivery />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.FAG}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <FrequentlyAskedQuestions />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <Contacts />
            </Suspense>
          }
        />

        <Route
          path={ROUTES.LIKE}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <Favorite />
            </Suspense>
          }
        />
        <Route path={ROUTES.VIP} element={<Navigate to={ROUTES.HISTORY} />}>
          <Route path={ROUTES.HISTORY} element={<h1>History</h1>} />
          <Route path={ROUTES.PROFILE} element={<h1>Profile</h1>} />
          <Route path={ROUTES.LIKE} element={<h1>like</h1>} />
          <Route />
        </Route>
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
    </Routes>
  );
};

export default MainRoutes;
